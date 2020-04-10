import { Component, OnInit } from '@angular/core'

import { ApiService } from 'src/app/core-module/api.service'
import { InfoService } from 'src/app/core-module/info.service'

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html'
})
export class PublicComponent implements OnInit {
  data: Object

  constructor(
    private apiService: ApiService,
    public infoService: InfoService) {}

  ngOnInit() {
    this.apiService.getPublic().subscribe({
        next: (data: string) => { 
          this.infoService.clear()
          this.data=data
        },
        error: response => { 
          this.infoService.setErrorResponse(response)  
        }
      });
  }
}