import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../shared/login.service';
import { UserprofileService } from '../shared/userprofile.service';
import { User } from '../model/User'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'





@Component({
  templateUrl: './login.component.html'
})

@Injectable()
export class LoginComponent implements OnInit {
   errorMessage:string = "No Error";
  txtEmail:string;
  txtPassword:string;

  ngOnInit() {
    
  }

  Login() :void {
    this._loginService.login(this.txtEmail, this.txtPassword)    
    .subscribe(usr => {
      this._userProfileService.authenticatedUser = usr;
      this._router.navigate(['welcome' ]); 
    }, 
    error => this.errorMessage = error);
  }

  constructor(private _router: Router, private _loginService: LoginService, private _userProfileService:UserprofileService){
  
  }

}
