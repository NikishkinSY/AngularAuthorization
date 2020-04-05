import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'

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

  constructor(private apiService: ApiService) {}

  submit(form: NgForm) {
    this.apiService.signin(form.value.email, form.value.password)
      .subscribe({
        next: (response: IUser) => { 
          console.log(response) 
          form.reset()
          //this.info = response
        },
        error: response => { 
          console.log(response) 
          this.error = response.error
        }
      })
  }
}