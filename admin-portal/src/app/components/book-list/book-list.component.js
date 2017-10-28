"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BookListComponent = (function () {
    function BookListComponent(getBookListService, removeBookService, router, dialog) {
        this.getBookListService = getBookListService;
        this.removeBookService = removeBookService;
        this.router = router;
        this.dialog = dialog;
        this.removeBookList = new Array();
    }
    BookListComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.router.navigate(['/viewBook', this.selectedBook.id]);
    };
    BookListComponent.prototype.openDialog = function (book) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "yes") {
                _this.removeBookService.sendBook(book.id).subscribe(function (res) {
                    console.log(res);
                    _this.getBookList();
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    BookListComponent.prototype.updateRemoveBookList = function (checked, book) {
        if (checked) {
            this.removeBookList.push(book);
        }
        else {
            this.removeBookList.splice(this.removeBookList.indexOf(book), 1);
        }
    };
    BookListComponent.prototype.updateSelected = function (checked) {
        if (checked) {
            this.allChecked = true;
            this.removeBookList = this.bookList.slice();
        }
        else {
            this.allChecked = false;
            this.removeBookList = [];
        }
    };
    BookListComponent.prototype.removeSelectedBooks = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "yes") {
                for (var _i = 0, _a = _this.removeBookList; _i < _a.length; _i++) {
                    var book = _a[_i];
                    _this.removeBookService.sendBook(book.id).subscribe(function (res) {
                    }, function (err) {
                    });
                }
                location.reload();
            }
        });
    };
    BookListComponent.prototype.getBookList = function () {
        var _this = this;
        this.getBookListService.getBookList().subscribe(function (res) {
            console.log(res.json());
            _this.bookList = res.json();
        }, function (error) {
            console.log(error);
        });
    };
    BookListComponent.prototype.ngOnInit = function () {
        this.getBookList();
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    core_1.Component({
        selector: 'app-book-list',
        templateUrl: './book-list.component.html',
        styleUrls: ['./book-list.component.css']
    })
], BookListComponent);
exports.BookListComponent = BookListComponent;
var DialogResultExampleDialog = (function () {
    function DialogResultExampleDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DialogResultExampleDialog;
}());
DialogResultExampleDialog = __decorate([
    core_1.Component({
        selector: 'dialog-result-example-dialog',
        templateUrl: './dialog-result-example-dialog.html'
    })
], DialogResultExampleDialog);
exports.DialogResultExampleDialog = DialogResultExampleDialog;
