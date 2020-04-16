import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PrivateComponent, NgbdSortableHeader } from './private.component'
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
    PrivateComponent, NgbdSortableHeader
  ],
  providers: [
  ],
})
export class PrivateModule { }