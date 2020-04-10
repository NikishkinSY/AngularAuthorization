import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

import { ApiService } from 'src/app/core-module/api.service'
import { IUser } from 'src/app/core-module/models/user.model'
import { DataService } from '../../core-module/data.service'
import { InfoService } from 'src/app/core-module/info.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  data: object

  constructor(
    private apiService: ApiService, 
    private router: Router,
    private dataService: DataService,
    public infoService: InfoService) {}

  submit(form: NgForm) {
    this.apiService.signin(form.value.email, form.value.password)
      .subscribe({
        next: (response: IUser) => {
          this.infoService.clear()
          form.reset()
          this.dataService.set(response.email, response.token)
          this.router.navigate(['private'])
        },
        error: response => { 
          this.infoService.setErrorResponse(response)
        }
      }) 
  }
}