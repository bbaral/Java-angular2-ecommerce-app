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
var RemoveBookService = (function () {
    function RemoveBookService(http) {
        this.http = http;
    }
    RemoveBookService.prototype.sendBook = function (bookId) {
        var url = "http://localhost:8181/book/remove";
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, bookId, { headers: headers });
    };
    return RemoveBookService;
}());
RemoveBookService = __decorate([
    core_1.Injectable()
], RemoveBookService);
exports.RemoveBookService = RemoveBookService;
