import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'

import { ApiService } from 'src/app/core-module/api.service'
import { InfoService } from 'src/app/core-module/info.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  email: string
  password: string
  confirmPassword: string

  data: object

  constructor(
    private apiService: ApiService,
    public infoService: InfoService) {}

  submit(form: NgForm) {
    if (form.value.password !== form.value.confirmPassword) {
      this.infoService.setError('Passwords don`t match')
      return
    }

    this.apiService.signup(form.value.email, form.value.password)
      .subscribe({
        next: (result: string) => { 
          form.reset()
          this.infoService.setInfo(result)
        },
        error: response => { 
          this.infoService.setErrorResponse(response)
        }
      });
  } 
}