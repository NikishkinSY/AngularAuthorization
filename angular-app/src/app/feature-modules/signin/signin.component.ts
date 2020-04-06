import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service'
import { RouterModule, Router } from '@angular/router'

import { ApiService } from 'src/app/core-module/api.service'
import { IUser } from 'src/app/core-module/models/user.model'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  data: object
  public error: string
  public info: string

  constructor(
    private apiService: ApiService, 
    private cookieService: CookieService,
    private router: Router) {}

  submit(form: NgForm) {
    this.apiService.signin(form.value.email, form.value.password)
      .subscribe({
        next: (response: IUser) => { 
          console.log(response) 
          form.reset()
          this.cookieService.set('login', response.email)
          this.cookieService.set('token', response.token)
          this.router.navigate(['private']);
        },
        error: response => { 
          console.log(response) 
          this.error = response.error
        }
      })
  }
}