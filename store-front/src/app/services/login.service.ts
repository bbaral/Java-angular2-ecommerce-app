import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import { Router} from "@angular/router";
import {AppConst} from "../constants/app-const";

@Injectable()
export class LoginService {

  private serverPath:String = AppConst.serverPath;

  constructor(private http:Http, private router: Router) { }

  sendCredential(username: string, password: string) {
    let url = this.serverPath + '/token';
    let encodedCredentials = btoa(username+ ":" + password);
    let basidHeader = "Basic " + encodedCredentials;
    let headers = new Headers({
      'Content-type' : 'application/x-www-form-urlencoded',
      'Authorization' : basidHeader
    });

    return this.http.get(url, {headers: headers});
  }

  checkSession() {
    let url = "http://localhost:8181/checkSession";

    let headers = new Headers ({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

  logout() {
    let url = "http://localhost:8181/user/logout";

    let headers = new Headers ({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, '', {headers: headers});
  }
}
