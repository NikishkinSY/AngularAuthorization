import { Injectable } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  login: string
  token: string
  info: string
  error: string

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.login = this.cookieService.get('login')
    this.token = this.cookieService.get('token')
  }

  set(login: string, token: string) {
    this.login = login
    this.token = token
    this.cookieService.set('login', login)
    this.cookieService.set('token', token)
  }

  delete() {
    this.login = null
    this.token = null
    this.cookieService.delete('login')
    this.cookieService.delete('token')
  }
}