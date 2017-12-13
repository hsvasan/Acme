import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from '../app/shared/login.service';
import { UserprofileService } from '../app/shared/userprofile.service';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'welcome', canActivate: [UserprofileService],  component: WelcomeComponent},
      {path:'login', component: LoginComponent},
      {path:'', redirectTo:'login', pathMatch : 'full'},
      {path:'**', component: LoginComponent}   
    ])
  ],
  providers: [LoginService, UserprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
