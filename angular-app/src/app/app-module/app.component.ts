import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { DataService } from '../core-module/data.service'

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    public dataService: DataService) {}

  signOut() {
    this.dataService.delete()
    this.router.navigate(['/'])
  }
}
