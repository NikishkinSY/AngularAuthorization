import { Component } from '@angular/core'

import { InfoService } from '../info.service'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html'
})
export class InfoComponent {
  constructor(public infoService: InfoService) {}

  ngOnInit() {
    this.infoService.clear()
  }
}