(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".login-logo {\n  margin: 15;\n  height: 100;\n}\n.text-field {\n  padding: 15;\n  background: white;\n  color: black;\n  border-width: 0.5;\n  border-radius: 5;\n  border-color: gray;\n}\n.sign-in-button {\n  padding: 15;\n  background: #00a2e8;\n  color: white;\n  font-size: 16;\n  border-width: 0.5;\n  border-radius: 5;\n}\n.to-sign-in-screen {\n  padding: 15;\n  text-align: center;\n  color: gray;\n}\n.text-error {\n  padding-left: 15;\n  color: red;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ScrollView>\n  <StackLayout verticalAlignment=\"center\" padding=\"5\">\n    <Image class=\"login-logo\" src=\"~/images/app-logo.png\"></Image>\n    <TextField\n      class=\"text-field\"\n      [(ngModel)]=\"username\"\n      hint=\"Username\"\n      returnKeyType=\"next\"\n      (returnPress)=\"focusPassword()\"\n    >\n    </TextField>\n    <label\n      visibility=\"{{ usernameTextErrorValue ? 'visible' : 'collapsed' }}\"\n      text=\"{{ usernameTextError }}\"\n      class=\"text-error\"\n    ></label>\n    <TextField\n      #passwordId\n      class=\"text-field\"\n      [(ngModel)]=\"password\"\n      hint=\"Password\"\n      secure=\"true\"\n      returnKeyType=\"done\"\n    >\n    <label\n      visibility=\"{{ passwordTextErrorValue ? 'visible' : 'collapsed' }}\"\n      text=\"{{ passwordTextError }}\"\n      class=\"text-error\"\n    ></label>\n    </TextField>\n    <Button class=\"sign-in-button\" text=\"Sign in\" (tap)=\"signIn()\"> </Button>\n    <label\n      class=\"to-sign-in-screen\"\n      text=\"Already sign up ? sign in.\"\n      (tap)=\"toSignInScreen()\"\n    >\n    </label>\n  </StackLayout>\n</ScrollView>\n"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.password = "";
        this.username = "";
        this.usernameTextError = "";
        this.usernameTextErrorValue = "";
        this.passwordTextError = "";
        this.passwordTextErrorValue = "";
        this.alpha = false;
    }
    HomeComponent.prototype.signIn = function () {
        this.checkErrors();
    };
    HomeComponent.prototype.checkErrors = function () {
        if (this.username.trim().length == 0) {
            this.usernameTextErrorValue = "visible";
            this.usernameTextError = "Username cannot be empty";
            this.alpha = false;
        }
        if (this.password.trim().length == 0) {
            this.passwordTextErrorValue = "visible";
            this.passwordTextError = "Password cannot be empty";
            this.alpha = false;
        }
        this.passwordTextErrorValue = "";
        this.passwordTextError = "";
        this.usernameTextErrorValue = "";
        this.usernameTextError = "";
        this.alpha = true;
    };
    HomeComponent.prototype.toSignInScreen = function () {
        this.routerExtensions.navigate(["/register"], { clearHistory: true });
    };
    HomeComponent.prototype.focusPassword = function () {
        this.passwordId.nativeElement.focus();
    };
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("passwordId", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "passwordId", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-ui-sidedrawer/angular");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-ui-listview/angular");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-ui-calendar/angular");
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-ui-chart/angular");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nativescript-ui-dataform/angular");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nativescript-ui-autocomplete/angular");
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nativescript-ui-gauge/angular");
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./home/home.component.ts");












var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptUISideDrawerModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUIListViewModule"],
                nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUICalendarModule"],
                nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIChartModule"],
                nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__["NativeScriptUIDataFormModule"],
                nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUIAutoCompleteTextViewModule"],
                nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIGaugeModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUN0QjtBQUVqRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDZEQUFhLEVBQUU7Q0FDekMsQ0FBQztBQUtGO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDWjlCLCtCQUErQixlQUFlLGdCQUFnQixHQUFHLGVBQWUsZ0JBQWdCLHNCQUFzQixpQkFBaUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsR0FBRyxtQkFBbUIsZ0JBQWdCLHdCQUF3QixpQkFBaUIsa0JBQWtCLHNCQUFzQixxQkFBcUIsR0FBRyxzQkFBc0IsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsR0FBRyxlQUFlLHFCQUFxQixlQUFlLEdBQUcsQzs7Ozs7OztBQ0E5ZCwwWUFBMFksb0RBQW9ELG1CQUFtQixxQkFBcUIsb1FBQW9RLG9EQUFvRCxtQkFBbUIscUJBQXFCLHlVOzs7Ozs7OztBQ0F0MEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXVCO0FBQ3dDO0FB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QkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmxvZ2luLWxvZ28ge1xcbiAgbWFyZ2luOiAxNTtcXG4gIGhlaWdodDogMTAwO1xcbn1cXG4udGV4dC1maWVsZCB7XFxuICBwYWRkaW5nOiAxNTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjU7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcbn1cXG4uc2lnbi1pbi1idXR0b24ge1xcbiAgcGFkZGluZzogMTU7XFxuICBiYWNrZ3JvdW5kOiAjMDBhMmU4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNjtcXG4gIGJvcmRlci13aWR0aDogMC41O1xcbiAgYm9yZGVyLXJhZGl1czogNTtcXG59XFxuLnRvLXNpZ24taW4tc2NyZWVuIHtcXG4gIHBhZGRpbmc6IDE1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcbi50ZXh0LWVycm9yIHtcXG4gIHBhZGRpbmctbGVmdDogMTU7XFxuICBjb2xvcjogcmVkO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U2Nyb2xsVmlldz5cXG4gIDxTdGFja0xheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBwYWRkaW5nPVxcXCI1XFxcIj5cXG4gICAgPEltYWdlIGNsYXNzPVxcXCJsb2dpbi1sb2dvXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL2FwcC1sb2dvLnBuZ1xcXCI+PC9JbWFnZT5cXG4gICAgPFRleHRGaWVsZFxcbiAgICAgIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIlxcbiAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VybmFtZVxcXCJcXG4gICAgICBoaW50PVxcXCJVc2VybmFtZVxcXCJcXG4gICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQoKVxcXCJcXG4gICAgPlxcbiAgICA8L1RleHRGaWVsZD5cXG4gICAgPGxhYmVsXFxuICAgICAgdmlzaWJpbGl0eT1cXFwie3sgdXNlcm5hbWVUZXh0RXJyb3JWYWx1ZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIlxcbiAgICAgIHRleHQ9XFxcInt7IHVzZXJuYW1lVGV4dEVycm9yIH19XFxcIlxcbiAgICAgIGNsYXNzPVxcXCJ0ZXh0LWVycm9yXFxcIlxcbiAgICA+PC9sYWJlbD5cXG4gICAgPFRleHRGaWVsZFxcbiAgICAgICNwYXNzd29yZElkXFxuICAgICAgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInBhc3N3b3JkXFxcIlxcbiAgICAgIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIlxcbiAgICAgIHNlY3VyZT1cXFwidHJ1ZVxcXCJcXG4gICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICA+XFxuICAgIDxsYWJlbFxcbiAgICAgIHZpc2liaWxpdHk9XFxcInt7IHBhc3N3b3JkVGV4dEVycm9yVmFsdWUgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJyB9fVxcXCJcXG4gICAgICB0ZXh0PVxcXCJ7eyBwYXNzd29yZFRleHRFcnJvciB9fVxcXCJcXG4gICAgICBjbGFzcz1cXFwidGV4dC1lcnJvclxcXCJcXG4gICAgPjwvbGFiZWw+XFxuICAgIDwvVGV4dEZpZWxkPlxcbiAgICA8QnV0dG9uIGNsYXNzPVxcXCJzaWduLWluLWJ1dHRvblxcXCIgdGV4dD1cXFwiU2lnbiBpblxcXCIgKHRhcCk9XFxcInNpZ25JbigpXFxcIj4gPC9CdXR0b24+XFxuICAgIDxsYWJlbFxcbiAgICAgIGNsYXNzPVxcXCJ0by1zaWduLWluLXNjcmVlblxcXCJcXG4gICAgICB0ZXh0PVxcXCJBbHJlYWR5IHNpZ24gdXAgPyBzaWduIGluLlxcXCJcXG4gICAgICAodGFwKT1cXFwidG9TaWduSW5TY3JlZW4oKVxcXCJcXG4gICAgPlxcbiAgICA8L2xhYmVsPlxcbiAgPC9TdGFja0xheW91dD5cXG48L1Njcm9sbFZpZXc+XFxuXCIiLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPdXRwdXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJwYXNzd29yZElkXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBwYXNzd29yZElkOiBFbGVtZW50UmVmO1xuICBwcm90ZWN0ZWQgcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XG4gIHByb3RlY3RlZCB1c2VybmFtZTogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIHVzZXJuYW1lVGV4dEVycm9yOiBzdHJpbmcgPSBcIlwiO1xuICBwcm90ZWN0ZWQgdXNlcm5hbWVUZXh0RXJyb3JWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIHBhc3N3b3JkVGV4dEVycm9yOiBzdHJpbmcgPSBcIlwiO1xuICBwcm90ZWN0ZWQgcGFzc3dvcmRUZXh0RXJyb3JWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIGFscGhhOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuICBzaWduSW4oKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0Vycm9ycygpOyBcbiAgfVxuICBjaGVja0Vycm9ycygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VybmFtZS50cmltKCkubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMudXNlcm5hbWVUZXh0RXJyb3JWYWx1ZSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy51c2VybmFtZVRleHRFcnJvciA9IFwiVXNlcm5hbWUgY2Fubm90IGJlIGVtcHR5XCI7XG4gICAgICB0aGlzLmFscGhhID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhc3N3b3JkLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5wYXNzd29yZFRleHRFcnJvclZhbHVlID0gXCJ2aXNpYmxlXCI7XG4gICAgICB0aGlzLnBhc3N3b3JkVGV4dEVycm9yID0gXCJQYXNzd29yZCBjYW5ub3QgYmUgZW1wdHlcIjtcbiAgICAgIHRoaXMuYWxwaGEgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5wYXNzd29yZFRleHRFcnJvclZhbHVlID0gXCJcIjtcbiAgICB0aGlzLnBhc3N3b3JkVGV4dEVycm9yID0gXCJcIjtcbiAgICB0aGlzLnVzZXJuYW1lVGV4dEVycm9yVmFsdWUgPSBcIlwiO1xuICAgIHRoaXMudXNlcm5hbWVUZXh0RXJyb3IgPSBcIlwiO1xuICAgIHRoaXMuYWxwaGEgPSB0cnVlO1xuICB9XG4gIHRvU2lnbkluU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcmVnaXN0ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG4gIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wYXNzd29yZElkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=