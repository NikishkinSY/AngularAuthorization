import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/core-module/api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-public',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {
  email: string
  guid: string

  public error: string
  public info: string

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute) {
    this.email = this.actRoute.snapshot.params.email;
    this.guid = this.actRoute.snapshot.params.guid;
  }

  ngOnInit() {
    this.apiService.confirmation(this.email, this.guid).subscribe({
      next: (response: string) => { 
        console.log(response) 
        this.info = response
      },
      error: response => { 
        console.log(response) 
        this.error = response.error
      }
    });
  }
}