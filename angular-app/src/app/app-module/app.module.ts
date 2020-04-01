import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { SignupModule } from '../feature-modules/signup/signup.module';
import { SigninModule } from '../feature-modules/signin/signin.module';
import { PublicModule } from '../feature-modules/public/public.module';
import { PrivateModule } from '../feature-modules/private/private.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupModule,
    SigninModule,
    PublicModule,
    PrivateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
