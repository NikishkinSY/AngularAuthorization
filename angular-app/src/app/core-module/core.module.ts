import { NgModule } from '@angular/core'
import { ApiService } from './api.service'
import { DataService } from './data.service'
import { InfoComponent } from './info/info.component'

@NgModule({
  imports: [
  ],
  exports: [
    InfoComponent
  ],
  declarations: [
    InfoComponent
  ],
  providers: [
    ApiService,
    DataService
  ],
})
export class CoreModule { }