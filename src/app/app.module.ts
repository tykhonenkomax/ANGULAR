import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import {UserDetailsComponent} from "./components/user-details/user-details.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home-page',component:HomeComponent},
      {path:'user-page',component:UsersComponent, children:[
          {path:'user-details/:id',component:UserDetailsComponent}
        ]},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
