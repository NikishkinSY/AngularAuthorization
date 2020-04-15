import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, of} from 'rxjs'

import {IUser} from './models/user.model'
import {IHuman} from './models/human.model'

@Injectable()
export class ApiService {
	baseUrl: string = 'http://localhost:4000/'
	constructor(private http: HttpClient) { }

	getPublic() {
		const url = this.baseUrl + 'home/public'
		return this.http.get(url) 
	}

	getPrivate(token: string) {
		const url = this.baseUrl + 'home/private'
		const httpOptions = {
			headers: new HttpHeaders({
				'authorization': 'Bearer ' + token
			})
		};
		return this.http.get(url, httpOptions) 
	}

	signin(email: string, password: string): Observable<IUser> {
		const url = this.baseUrl + 'users/signin'
		return this.http.post<IUser>(url, { Email: email, Password: password })
	}

	signup(email: string, password: string) {
		const url = this.baseUrl + 'users/signup'
		return this.http.post(url, { Email: email, Password: password })

	}

	confirmation (email: string, guid: string) {
		const url = this.baseUrl + 'users/confirm?email=' + email + '&guid=' + guid
		return this.http.get(url)
	} 

	getHumans(token: string): Observable<IHuman[]> {
		const url = this.baseUrl + 'humans/get'
		const httpOptions = {
			headers: new HttpHeaders({
				'authorization': 'Bearer ' + token
			})
		};
		return this.http.get<IHuman[]>(url, httpOptions) 
	}

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
	 
			// TODO: send the error to remote logging infrastructure
			console.error(error) // log to console instead
	 
			// TODO: better job of transforming error for user consumption
			//this.log(`${operation} failed: ${error.message}`);
	 
			// Let the app keep running by returning an empty result.
			return of(result as T)
		};
	}
}