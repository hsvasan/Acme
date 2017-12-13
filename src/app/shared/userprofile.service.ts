import { Injectable } from '@angular/core';
import {Route, CanActivate} from '@angular/router';
import {User } from '../model/User'


@Injectable()
export class UserprofileService implements CanActivate {

  authenticatedUser: User=null; 

  canActivate() :boolean{
    let _action:boolean = false;
    if (this.authenticatedUser && this.authenticatedUser.token && this.authenticatedUser.token.length > 10)
      _action =  true;
    else
      _action = false;

    return _action;
  }

  constructor(){
    this.authenticatedUser = new User();
  }

}
