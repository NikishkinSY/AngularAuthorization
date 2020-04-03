import { NgModule } from '@angular/core'

import { PrivateComponent } from './private.component'
import { CoreModule } from '../../core-module/core.module'

@NgModule({
  imports: [
    CoreModule
  ],
  exports: [
    PrivateComponent
  ],
  declarations: [
    PrivateComponent
  ],
  providers: [
  ],
})
export class PrivateModule { }