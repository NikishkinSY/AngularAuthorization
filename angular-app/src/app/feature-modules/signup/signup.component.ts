import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { catchError, map, tap } from 'rxjs/operators'
import {Observable, of} from 'rxjs'

import { ApiService } from 'src/app/core-module/api.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  email: string
  password: string
  confirmPassword: string

  data: object
  public error: string
  public info: string


  constructor(private apiService: ApiService) {}

  submit(form: NgForm) {
    if (form.value.password !== form.value.confirmPassword) {
      this.info = 'Passwords don`t match'
      return
    }

    this.apiService.signup(form.value.email, form.value.password)
      .subscribe({
        next: (result: string) => { 
          console.log(result) 
          form.reset()
          this.info = result
        },
        error: response => { 
          console.log(response) 
          this.error = response.error
        }
      });
  } 
}