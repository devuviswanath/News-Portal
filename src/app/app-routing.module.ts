import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';

import { LoginComponent } from '../login/login.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { HomeComponent } from '../home/home.component';
import { ArticleComponent } from '../article/article.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'',component:LoginComponent},
  {path: 'user-profile',component:UserProfileComponent},
  {path:'home',component:HomeComponent},
  {path:'article',component:ArticleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
