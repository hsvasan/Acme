import { Injectable } from '@angular/core';
import { UrlResolver } from '@angular/compiler';
import { User} from '../model/User';
import {Http, Headers,RequestMethod, RequestOptions, Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'


@Injectable()
export class LoginService {

  public login(_userID:string, _pwd:string): Observable<User> {

    let  url:string =  "http://localhost:51578/Token";

    let params = {
      'username': _userID,
      'password': _pwd,
      grant_type: "password"
    };  
    let body = this.serializeObj(params);

    let myHeaders = new Headers();
    myHeaders.append( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' ); 

    let options = new RequestOptions({ 
      method:RequestMethod.Post,
      headers: myHeaders
    });

    return this._http.post(url, body, options)
            .do(d => console.log(d.json()))
            .map(m => this.extractData(m))
            .catch(this.handleErrorObservable);

  }

  private serializeObj(obj) {
    var result = [];
    for (var property in obj)
        result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }

  private extractData(res: Response) {
    let body:object = res.json();
    
    let _user = new User();
    //if (jsonString .indexOf("yourKeyOrValue") > -1){

    if (body.hasOwnProperty("access_token")){
      _user.username = body["userName"]
      _user.token = body["access_token"];
      //alert("Inside" + JSON.stringify(_user));
    }
    return _user|| {};
  }
  

  private handleErrorObservable (error: Response | any) {
    
    let _error = error.json();
    if (_error.hasOwnProperty("error_description"))
      console.error(_error.error_description || error);
      
    return Observable.throw(_error.error_description|| error);
  }

  constructor(private _http: Http) {}

}




//https://www.concretepage.com/angular-2/angular-2-http-post-example
//https://stackoverflow.com/questions/38881964/angular-2-token-response-for-preflight-has-invalid-http-status-code-400
/*
          loginAccount(account: Account): Observable<string> {        
            var obj = { UserName: account.Email, Password: account.Password, grant_type: 'password' };
        
                let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
                let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
        
                let body = this.serializeObj(obj);
        
                 return this._http.post('https://localhost:44305/Token',  body, options)
                                     .map(this.extractData)
                                     .catch(this.handleError);
        }
        
        private serializeObj(obj) {
            var result = [];
            for (var property in obj)
                result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        
            return result.join("&");
        }
*/