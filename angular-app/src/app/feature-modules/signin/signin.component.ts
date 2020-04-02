import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  email: string
  password: string

  submit(form: NgForm) {

  }
}