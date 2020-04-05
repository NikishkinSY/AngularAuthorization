import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { SignupComponent } from './signup.component'
import { CoreModule } from '../../core-module/core.module'

@NgModule({
  imports: [
    FormsModule,
    CoreModule
  ],
  exports: [
    SignupComponent
  ],
  declarations: [
    SignupComponent
  ],
  providers: [
  ],
})
export class SignupModule { }