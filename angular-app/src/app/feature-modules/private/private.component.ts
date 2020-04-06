import { Component } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'

import { ApiService } from 'src/app/core-module/api.service'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent {
  data: Object
  error: Object

  constructor(private apiService: ApiService, private cookieService: CookieService) {}

  ngOnInit() {
    let token = this.cookieService.get('token')
    this.apiService.getPrivate(token).subscribe({
      next: (data: string) => { 
        this.data=data
      },
      error: response => { 
        console.log(response) 
        this.error = response.error
      }
    })
  }
}