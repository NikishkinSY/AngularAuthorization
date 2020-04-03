import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import {User} from './models/user.model'

@Injectable()
export class ApiService {
	baseUrl: string = 'http://localhost:4000'
	constructor(private http: HttpClient) { }

	getPublic() {
		const url = this.baseUrl + '/home/public';
		return this.http.get(url) 
	}

	getPrivate() {
		const url = this.baseUrl + '/home/public';
		return this.http.get(url) 
	}

	Signin(email: string, password: string): Observable<User> {
		const url = this.baseUrl + 'users/signin';
		return this.http.post<User>(url, { Email: email, Password: password })
	}

	Signup(email: string, password: string): Observable<User> {
		const url = this.baseUrl + 'users/signup';
		return this.http.post<User>(url, { Email: email, Password: password })
	}

	Confirmation (email: string, guid: string) {
		const url = this.baseUrl + 'users/confirm?email=' + email + '&guid=' + guid
		return this.http.get(url)
	} 
}