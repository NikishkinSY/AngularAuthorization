import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { SigninComponent } from './signin.component'
import { CoreModule } from '../../core-module/core.module'

@NgModule({
  imports: [
    FormsModule,
    CoreModule
  ],
  exports: [
    SigninComponent
  ],
  declarations: [
    SigninComponent
  ],
  providers: [
  ],
})
export class SigninModule { }