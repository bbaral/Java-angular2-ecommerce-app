import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {User} from "../models/user";
import {AppConst} from "../constants/app-const";

@Injectable()
export class UserService {

  private serverPath: String = AppConst.serverPath;

  constructor(private http: Http) {
  }

  newUser(username: string, email: string) {
    let url = this.serverPath + '/user/newUser';
    let userInfo = {
      "username": username,
      "email": email
    }

    let tokenHeader = new Headers({
      'Content-type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(userInfo), {headers: tokenHeader});
  }

  retrievePassword(email: string) {
    let url = this.serverPath + '/user/forgetPassword';
    let userInfo = {
      "email": email
    }

    let tokenHeader = new Headers({
      'Content-type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(userInfo), {headers: tokenHeader});
  }

}
