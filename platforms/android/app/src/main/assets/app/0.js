(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [{ path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }];
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

module.exports = ".login-logo {\n  margin: 15;\n  height: 100;\n}\n.text-field {\n  padding: 15;\n  background: white;\n  color: black;\n  border-width: 0.5;\n  border-radius: 5;\n  border-color: gray;\n}\n.sign-in-button {\n  padding: 15;\n  background: dodgerblue;\n  color: white;\n  font-size: 16;\n  border-width: 0.5;\n  border-radius: 5;\n}\n.to-sign-up-screen {\n  padding: 15;\n  text-align: center;\n  color: gray;\n}\n.text-error {\n  color: red;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ScrollView>\n  <StackLayout verticalAlignment=\"center\">\n    <Image class=\"login-logo\" src=\"~/images/app-logo.png\"></Image>\n    <TextField\n      class=\"text-field\"\n      [(ngModel)]=\"username\"\n      hint=\"Username\"\n      returnKeyType=\"next\"\n      (returnPress)=\"focusPassword()\"\n    >\n    </TextField>\n    <TextField\n      #passwordId\n      class=\"text-field\"\n      [(ngModel)]=\"password\"\n      hint=\"Password\"\n      secure=\"true\"\n      returnKeyType=\"done\"\n    >\n    </TextField>\n    <label\n      visibility=\"{{ textErrorValue ? 'visible' : 'collapsed' }}\"\n      text=\"{{ textError }}\"\n      class=\"text-error\"\n    ></label>\n    <Button class=\"sign-in-button\" text=\"Sign in\" (tap)=\"signIn()\"> </Button>\n    <label\n      class=\"to-sign-up-screen\"\n      text=\"Not yet a member ? sign up.\"\n      (tap)=\"toSignUpScreen()\"\n    >\n    </label>\n  </StackLayout>\n</ScrollView>\n"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(application_settings__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.password = "";
        this.username = "";
        this.textError = "";
        this.textErrorValue = "";
    }
    HomeComponent.prototype.signIn = function () {
        this.fetchUsers();
    };
    HomeComponent.prototype.checkErrors = function (aux) {
        if (this.password.trim().length == 0 && this.username.trim().length == 0) {
            this.textErrorValue = "visible";
            this.textError = "Username and password cannot be empty";
            return false;
        }
        if (this.username.trim().length == 0) {
            this.textErrorValue = "visible";
            this.textError = "Username cannot be empty";
            return false;
        }
        if (this.password.trim().length == 0) {
            this.textErrorValue = "visible";
            this.textError = "Password cannot be empty";
            return false;
        }
        if (aux == 0) {
            this.textErrorValue = "visible";
            this.textError = "Incorrect login information";
            return false;
        }
        this.textErrorValue = "";
        this.textError = "";
        return true;
    };
    HomeComponent.prototype.toSignUpScreen = function () {
        this.routerExtensions.navigate(["/register"], { clearHistory: true });
    };
    HomeComponent.prototype.focusPassword = function () {
        this.passwordId.nativeElement.focus();
    };
    HomeComponent.prototype.fetchUsers = function () {
        var _this = this;
        fetch("https://my-json-server.typicode.com/houssemfadhli/whateverapp/users/")
            .then(function (response) { return response.json(); })
            .then(function (r) {
            var k = 0;
            for (var i = 0; i < r.length; i++) {
                if (_this.username.trim().toLowerCase() == r[i].username &&
                    _this.password.trim().toLowerCase() == r[i].password) {
                    k++;
                    _this.checkUsersDetails(k);
                }
            }
            _this.checkUsersDetails(k);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.checkUsersDetails = function (aux) {
        if (this.checkErrors(aux)) {
            application_settings__WEBPACK_IMPORTED_MODULE_2__["setString"]("localUsername", this.username.trim().toLowerCase());
            application_settings__WEBPACK_IMPORTED_MODULE_2__["setString"]("localPassword", this.password.trim().toLowerCase());
            this.routerExtensions.navigate(["/body"], { clearHistory: true });
        }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-calendar/angular/calendar-directives.js");
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-ui-chart/angular/chart-directives.js");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-ui-dataform/angular/dataform-directives.js");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-ui-autocomplete/angular/autocomplete-directives.js");
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-ui-gauge/angular/gauges-directives.js");
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
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
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFDdEI7QUFFakQsSUFBTSxNQUFNLEdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDZEQUFhLEVBQUUsQ0FBQyxDQUFDO0FBS2hFO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csaUJBQWlCLENBQUc7SUFBRCx3QkFBQztDQUFBO0FBQUg7Ozs7Ozs7O0FDVjlCLCtCQUErQixlQUFlLGdCQUFnQixHQUFHLGVBQWUsZ0JBQWdCLHNCQUFzQixpQkFBaUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsR0FBRyxtQkFBbUIsZ0JBQWdCLDJCQUEyQixpQkFBaUIsa0JBQWtCLHNCQUFzQixxQkFBcUIsR0FBRyxzQkFBc0IsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsR0FBRyxlQUFlLGVBQWUsdUJBQXVCLEdBQUcsRzs7Ozs7OztBQ0FuZSxra0JBQWtrQiw0Q0FBNEMsbUJBQW1CLGFBQWEsd1Q7Ozs7Ozs7O0FDQTlvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RTtBQUNWO0FBQ1g7QUFRcEQ7SUFPRSx1QkFBb0IsZ0JBQWtDO1FB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OERBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxpR0FBOEI7Z0JBQzlCLDZGQUE0QjtnQkFDNUIsNkZBQTRCO2dCQUM1Qix1RkFBeUI7Z0JBQ3pCLDZGQUE0QjtnQkFDNUIsNkdBQXdDO2dCQUN4Qyx1RkFBeUI7Z0JBQ3pCLG9GQUF3QjtnQkFDeEIsdUVBQWlCO2dCQUNqQixrRkFBdUI7YUFDeEI7WUFDRCxZQUFZLEVBQUUsQ0FBQyw4REFBYSxDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLDhEQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxVQUFVLENBQUc7SUFBRCxpQkFBQztDQUFBO0FBQUgiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9XTtcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHt9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmxvZ2luLWxvZ28ge1xcbiAgbWFyZ2luOiAxNTtcXG4gIGhlaWdodDogMTAwO1xcbn1cXG4udGV4dC1maWVsZCB7XFxuICBwYWRkaW5nOiAxNTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjU7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcbn1cXG4uc2lnbi1pbi1idXR0b24ge1xcbiAgcGFkZGluZzogMTU7XFxuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNjtcXG4gIGJvcmRlci13aWR0aDogMC41O1xcbiAgYm9yZGVyLXJhZGl1czogNTtcXG59XFxuLnRvLXNpZ24tdXAtc2NyZWVuIHtcXG4gIHBhZGRpbmc6IDE1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcbi50ZXh0LWVycm9yIHtcXG4gIGNvbG9yOiByZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTY3JvbGxWaWV3PlxcbiAgPFN0YWNrTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICA8SW1hZ2UgY2xhc3M9XFxcImxvZ2luLWxvZ29cXFwiIHNyYz1cXFwifi9pbWFnZXMvYXBwLWxvZ28ucG5nXFxcIj48L0ltYWdlPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXJuYW1lXFxcIlxcbiAgICAgIGhpbnQ9XFxcIlVzZXJuYW1lXFxcIlxcbiAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxuICAgICAgKHJldHVyblByZXNzKT1cXFwiZm9jdXNQYXNzd29yZCgpXFxcIlxcbiAgICA+XFxuICAgIDwvVGV4dEZpZWxkPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgI3Bhc3N3b3JkSWRcXG4gICAgICBjbGFzcz1cXFwidGV4dC1maWVsZFxcXCJcXG4gICAgICBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiXFxuICAgICAgaGludD1cXFwiUGFzc3dvcmRcXFwiXFxuICAgICAgc2VjdXJlPVxcXCJ0cnVlXFxcIlxcbiAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxuICAgID5cXG4gICAgPC9UZXh0RmllbGQ+XFxuICAgIDxsYWJlbFxcbiAgICAgIHZpc2liaWxpdHk9XFxcInt7IHRleHRFcnJvclZhbHVlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCcgfX1cXFwiXFxuICAgICAgdGV4dD1cXFwie3sgdGV4dEVycm9yIH19XFxcIlxcbiAgICAgIGNsYXNzPVxcXCJ0ZXh0LWVycm9yXFxcIlxcbiAgICA+PC9sYWJlbD5cXG4gICAgPEJ1dHRvbiBjbGFzcz1cXFwic2lnbi1pbi1idXR0b25cXFwiIHRleHQ9XFxcIlNpZ24gaW5cXFwiICh0YXApPVxcXCJzaWduSW4oKVxcXCI+IDwvQnV0dG9uPlxcbiAgICA8bGFiZWxcXG4gICAgICBjbGFzcz1cXFwidG8tc2lnbi11cC1zY3JlZW5cXFwiXFxuICAgICAgdGV4dD1cXFwiTm90IHlldCBhIG1lbWJlciA/IHNpZ24gdXAuXFxcIlxcbiAgICAgICh0YXApPVxcXCJ0b1NpZ25VcFNjcmVlbigpXFxcIlxcbiAgICA+XFxuICAgIDwvbGFiZWw+XFxuICA8L1N0YWNrTGF5b3V0PlxcbjwvU2Nyb2xsVmlldz5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQWN0aW9uQmFyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcInBhc3N3b3JkSWRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIHBhc3N3b3JkSWQ6IEVsZW1lbnRSZWY7XG4gIHByb3RlY3RlZCBwYXNzd29yZDogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIHVzZXJuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBwcm90ZWN0ZWQgdGV4dEVycm9yOiBzdHJpbmcgPSBcIlwiO1xuICBwcm90ZWN0ZWQgdGV4dEVycm9yVmFsdWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuICBzaWduSW4oKTogdm9pZCB7XG4gICAgdGhpcy5mZXRjaFVzZXJzKCk7XG4gIH1cbiAgY2hlY2tFcnJvcnMoYXV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5wYXNzd29yZC50cmltKCkubGVuZ3RoID09IDAgJiYgdGhpcy51c2VybmFtZS50cmltKCkubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMudGV4dEVycm9yVmFsdWUgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMudGV4dEVycm9yID0gXCJVc2VybmFtZSBhbmQgcGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5XCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXNlcm5hbWUudHJpbSgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnRleHRFcnJvclZhbHVlID0gXCJ2aXNpYmxlXCI7XG4gICAgICB0aGlzLnRleHRFcnJvciA9IFwiVXNlcm5hbWUgY2Fubm90IGJlIGVtcHR5XCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhc3N3b3JkLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy50ZXh0RXJyb3JWYWx1ZSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy50ZXh0RXJyb3IgPSBcIlBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eVwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYXV4ID09IDApIHtcbiAgICAgIHRoaXMudGV4dEVycm9yVmFsdWUgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMudGV4dEVycm9yID0gXCJJbmNvcnJlY3QgbG9naW4gaW5mb3JtYXRpb25cIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy50ZXh0RXJyb3JWYWx1ZSA9IFwiXCI7XG4gICAgdGhpcy50ZXh0RXJyb3IgPSBcIlwiO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRvU2lnblVwU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcmVnaXN0ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG4gIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wYXNzd29yZElkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuICBmZXRjaFVzZXJzKCk6IHZvaWQge1xuICAgIGZldGNoKFxuICAgICAgXCJodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbS9ob3Vzc2VtZmFkaGxpL3doYXRldmVyYXBwL3VzZXJzL1wiXG4gICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgIHZhciBrOiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09IHJbaV0udXNlcm5hbWUgJiZcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT0gcltpXS5wYXNzd29yZFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgdGhpcy5jaGVja1VzZXJzRGV0YWlscyhrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1VzZXJzRGV0YWlscyhrKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG4gIGNoZWNrVXNlcnNEZXRhaWxzKGF1eDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hlY2tFcnJvcnMoYXV4KSkge1xuICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFxuICAgICAgICBcImxvY2FsVXNlcm5hbWVcIixcbiAgICAgICAgdGhpcy51c2VybmFtZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcbiAgICAgICAgXCJsb2NhbFBhc3N3b3JkXCIsXG4gICAgICAgIHRoaXMucGFzc3dvcmQudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2JvZHlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUge31cbiJdLCJzb3VyY2VSb290IjoiIn0=