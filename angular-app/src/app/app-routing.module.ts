import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './feature-modules/public/public.component';
import { PrivateComponent } from './feature-modules/private/private.component';
import { SigninComponent } from './feature-modules/signin/signin.component';
import { SignupComponent } from './feature-modules/signup/signup.component';

const routes: Routes = [
  {path: 'public', component: PublicComponent},
  {path: 'private', component: PrivateComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
