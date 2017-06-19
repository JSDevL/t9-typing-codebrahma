webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "#phone button {\n  height: 50px;\n  width: 75px; }\n\n#phone button span {\n  display: block;\n  margin-top: 5px;\n  font-size: 10px; }\n\n#result {\n  width: 225px;\n  height: 25px;\n  margin-left: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

module.exports = "<table id=\"phone\">\n    <tr>\n        <td colspan=\"3\">\n            <input type=\"text\" id=\"result\" [(ngModel)]=\"text\"/>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <button data-value=\"1\" (click)=\"onClick($event)\" class=\"key\">1\n                <span>. , !</span>\n            </button>\n        </td>\n        <td>\n            <button data-value=\"2\" (click)=\"onClick($event)\" class=\"key\">2\n                <span>a b c</span>\n            </button>\n        </td>\n        <td>\n            <button data-value=\"3\" (click)=\"onClick($event)\" class=\"key\">3\n                <span>d e f</span>\n            </button>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <button data-value=\"4\" (click)=\"onClick($event)\" class=\"key\">4\n                <span>g h i</span>\n            </button>\n        </td>\n        <td>\n            <button data-value=\"5\" (click)=\"onClick($event)\" class=\"key\">5\n                <span>j k l</span>\n            </button>\n        </td>\n        <td>\n            <button data-value=\"6\" (click)=\"onClick($event)\" class=\"key\">6\n                <span>m n o</span>\n            </button>\n        </td>\n    </tr>\n    <tr>\n        <td><button data-value=\"7\" (click)=\"onClick($event)\" class=\"key\">7\n            <span>p q r s</span>\n            </button>\n        </td>\n        <td>\n            <button data-value=\"8\" (click)=\"onClick($event)\" class=\"key\">8\n                <span>t u v</span>\n            </button>\n        </td>\n        <td>\n            <button data-value=\"9\" (click)=\"onClick($event)\" class=\"key\">9\n                <span>w x y z</span>\n            </button>\n        </td>\n    </tr>\n    <tr>\n        <td><button data-value=\"*\" class=\"key\">*</button></td>\n        <td><button data-value=\"0\" class=\"key\">0</button></td>\n        <td><button data-value=\"#\" class=\"key\">#</button></td>\n    </tr>\n</table>"

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(79);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.text = '';
    }
    AppComponent.prototype.onClick = function (e) {
        var _this = this;
        // check if new button was clicked
        if (this.button !== e.currentTarget) {
            this.button = e.currentTarget;
            this.values = this.button.children[0].innerText.split(' ');
            this.valueIndex = 0;
            clearTimeout(this.timer);
            this.timer = undefined;
        }
        if (this.timer) {
            clearTimeout(this.timer);
            this.text = this.text.slice(0, this.text.length - 1) + this.values[this.valueIndex++];
        }
        else {
            this.valueIndex = 0;
            this.text = this.text + this.values[this.valueIndex++];
        }
        this.timer = setTimeout(function () {
            _this.timer = undefined;
        }, 800);
        this.valueIndex = this.valueIndex === this.values.length ? 0 : this.valueIndex;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(134),
        styles: [__webpack_require__(133)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[159]);
//# sourceMappingURL=main.bundle.js.map