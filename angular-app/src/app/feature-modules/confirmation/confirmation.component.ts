import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/core-module/api.service'

@Component({
  selector: 'app-public',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit() {
  }
}