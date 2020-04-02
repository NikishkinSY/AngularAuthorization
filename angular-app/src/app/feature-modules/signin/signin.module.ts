import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';

@NgModule({
  imports: [
    FormsModule
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