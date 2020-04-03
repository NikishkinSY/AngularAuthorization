import { Component } from '@angular/core'

import { ApiService } from 'src/app/core-module/api.service'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent {
  data: Object

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPrivate().subscribe(data => this.data=data)
  }
}