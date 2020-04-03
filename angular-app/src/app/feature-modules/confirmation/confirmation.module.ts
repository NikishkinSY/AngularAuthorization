import { NgModule } from '@angular/core'

import { ConfirmationComponent } from './confirmation.component'
import { CoreModule } from '../../core-module/core.module'

@NgModule({
  imports: [
    CoreModule
  ],
  exports: [
    ConfirmationComponent
  ],
  declarations: [
    ConfirmationComponent
  ],
  providers: [
  ],
})
export class ConfirmationModule { }