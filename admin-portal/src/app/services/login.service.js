"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.sendCredential = function (username, password) {
        var url = "http://localhost:8181/token";
        var encodedCredentials = btoa(username + ":" + password);
        var basicHeader = "Basic " + encodedCredentials;
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicHeader
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.checkSession = function () {
        var url = "http://localhost:8181/checkSession";
        var headers = new http_1.Headers({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.logout = function () {
        var url = "http://localhost:8181/user/logout";
        var headers = new http_1.Headers({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, '', { headers: headers });
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable()
], LoginService);
exports.LoginService = LoginService;
