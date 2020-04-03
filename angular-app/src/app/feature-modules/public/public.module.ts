import { NgModule } from '@angular/core'

import { PublicComponent } from './public.component'
import { CoreModule } from '../../core-module/core.module'

@NgModule({
  imports: [
    CoreModule
  ],
  exports: [
    PublicComponent
  ],
  declarations: [
    PublicComponent
  ],
  providers: [
  ],
})
export class PublicModule { }