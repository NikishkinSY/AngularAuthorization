import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from '../app-routing.module'
import { SignupModule } from '../feature-modules/signup/signup.module'
import { SigninModule } from '../feature-modules/signin/signin.module'
import { PublicModule } from '../feature-modules/public/public.module'
import { PrivateModule } from '../feature-modules/private/private.module'
import { ConfirmationModule } from '../feature-modules/confirmation/confirmation.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SignupModule,
    SigninModule,
    PublicModule,
    PrivateModule,
    ConfirmationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
