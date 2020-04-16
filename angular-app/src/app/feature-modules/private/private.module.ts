import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PrivateComponent } from './private.component'
import { CoreModule } from '../../core-module/core.module'
import { NgbdSortableHeader } from '../../core-module/sortable.table'

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