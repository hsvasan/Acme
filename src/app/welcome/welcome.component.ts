import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../shared/userprofile.service';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _userprofileService: UserprofileService) { }

  ngOnInit() {
    console.log("UserName " + this._userprofileService.authenticatedUser.username);
    console.log(this._userprofileService.authenticatedUser.token);
  }

}
