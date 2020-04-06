import { Component } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'
import { OnInit } from '@angular/core'

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  login: string

  constructor(
    private cookieService: CookieService,
    private router: Router) {}

  ngOnInit() {
    let newLogin = this.cookieService.get('login')
    let isLoginChanged = this.login === newLogin
    this.login = newLogin
    if (isLoginChanged) {
      location.reload()
    }
  }

  signOut() {
    this.cookieService.delete('login')
    this.cookieService.delete('token')
    this.router.navigate(['/'])
  }
}
