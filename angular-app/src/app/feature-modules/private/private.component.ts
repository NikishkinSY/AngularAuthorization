import { Component } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'

import { ApiService } from '../../core-module/api.service'
import { InfoService } from '../../core-module/info.service'
import { IHuman } from '../../core-module/models/human.model'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent {
  humans: IHuman[] = []

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

    this.apiService.getHumans(token).subscribe({
      next: (data: IHuman[]) => { 
        this.infoService.clear()
        this.humans = data
      },
      error: response => { 
        this.infoService.setError('Unauthorized')   
      }
    })
  }
}