import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PrivateComponent } from './private.component'
import { CoreModule } from '../../core-module/core.module'

@NgModule({
  imports: [
    CoreModule,
    CommonModule
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