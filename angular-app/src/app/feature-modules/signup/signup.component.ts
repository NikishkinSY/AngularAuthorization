import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  email: string
  password: string
  confirmPassword: string

  submit(form: NgForm) {

  }
}