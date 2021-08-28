import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NetworkComponent } from './network/network.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path :'', redirectTo : 'home' , pathMatch :'full'},
  {path :'home' , component : HomeComponent},
  {path :'about' , component : AboutComponent},
  {path :'movies' , component : MoviesComponent},
  {path :'tv' , component : TvComponent},
  {path :'netwok' , component : NetworkComponent},
  {path :'people' , component : PeopleComponent},
  {path :'login' , component : LoginComponent},
  {path :'register' , component : RegisterComponent},
  {path :'**' , component : NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
