import { Component } from '@angular/core';
import {User} from './model/User'
@Component({  
  selector: 'acme-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginUser:User;
  title = 'APM Project for Angular';
}