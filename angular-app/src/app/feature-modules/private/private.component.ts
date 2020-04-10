import { Component } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'

import { ApiService } from 'src/app/core-module/api.service'
import { InfoService } from 'src/app/core-module/info.service'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent {
  data: Object

  constructor(
    private apiService: ApiService, 
    private cookieService: CookieService,
    public infoService: InfoService) {}

  ngOnInit() {
    this.infoService.setInfo('test')
    let token = this.cookieService.get('token')
    if (!token) {
      this.infoService.setError('Unauthorized')
    }

    this.apiService.getPrivate(token).subscribe({
      next: (data: string) => { 
        this.infoService.clear()
        this.data = data
      },
      error: response => { 
        this.infoService.setError('Unauthorized')   
      }
    })
  }
}