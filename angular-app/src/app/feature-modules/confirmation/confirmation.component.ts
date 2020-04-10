import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ApiService } from '../../core-module/api.service'
import { InfoService } from '../../core-module/info.service'

@Component({
  selector: 'app-public',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {
  email: string
  guid: string

  constructor(
      private apiService: ApiService, 
      private actRoute: ActivatedRoute,
      private infoService: InfoService) {
    this.email = this.actRoute.snapshot.params.email;
    this.guid = this.actRoute.snapshot.params.guid;
  }

  ngOnInit() {
    this.apiService.confirmation(this.email, this.guid).subscribe({
      next: (response: string) => { 
        console.log(response)
        this.infoService.setInfo(response)
      },
      error: response => { 
        console.log(response) 
        this.infoService.setError(response.error)
      }
    });
  }
}