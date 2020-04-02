import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    FormsModule
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