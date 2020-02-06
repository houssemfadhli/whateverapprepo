require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./register/register.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./body/body.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./profile/profile.component.ts");





var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: "body", component: _body_body_component__WEBPACK_IMPORTED_MODULE_3__["BodyComponent"] },
    { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    {
        path: "home",
        loadChildren: function () { return Promise.all(/* import() */[__webpack_require__.e("vendor"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, "./home/home.module.ts")).then(function (m) { return m.HomeModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nRadSideDrawer is a UI component part of the Progress NativeScript UI set of components.\nLearn more about the RadSideDrawer UI component and how it can be customized in this documentation article:\nhttp://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/getting-started\n-->\n<RadSideDrawer\n  [drawerTransition]=\"sideDrawerTransition\"\n  gesturesEnabled=\"false\"\n>\n  <GridLayout\n    tkDrawerContent\n    rows=\"auto, *\"\n    class=\"sidedrawer sidedrawer-left\"\n    (tap)=\"closeSideDrawer()\"\n  >\n    <StackLayout row=\"0\" class=\"sidedrawer-header\">\n      <Label\n        horizontalAlignment=\"center\"\n        class=\"sidedrawer-header-image fa\"\n        text=\"&#xf2bd;\"\n      ></Label>\n      <Label\n        horizontalAlignment=\"center\"\n        text=\"{{ usernameLabel }}\"\n        class=\"sidedrawer-header-brand\"\n      ></Label>\n    </StackLayout>\n    <ScrollView row=\"1\">\n      <StackLayout class=\"sidedrawer-content\">\n        <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n          <Label col=\"0\" text=\"&#xf015;\" class=\"fa\"></Label>\n\n          <Label\n            col=\"1\"\n            text=\"Home\"\n            (tap)=\"toHomeScreen()\"\n            class=\"p-r-10\"\n          ></Label>\n        </GridLayout>\n\n        <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n          <Label col=\"0\" text=\"&#xf007;\" class=\"fa\"></Label>\n          <Label\n            (tap)=\"toProfileScreen()\"\n            col=\"1\"\n            text=\"Profile\"\n            class=\"p-r-10\"\n          ></Label>\n        </GridLayout>\n\n        <StackLayout class=\"hr-light\"></StackLayout>\n\n        <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n          <Label col=\"0\" text=\"&#xf023;\" class=\"fa\"></Label>\n          <Label (tap)=\"logOut()\" col=\"1\" text=\"Logout\" class=\"p-r-10\"></Label>\n        </GridLayout>\n      </StackLayout>\n    </ScrollView>\n  </GridLayout>\n  <page-router-outlet tkMainContent class=\"page page-content\">\n  </page-router-outlet>\n</RadSideDrawer>\n"

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js");
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(application_settings__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.usernameLabel = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        if (application_settings__WEBPACK_IMPORTED_MODULE_4__["hasKey"]("localUsername")) {
            this.usernameLabel = application_settings__WEBPACK_IMPORTED_MODULE_4__["getString"]("localUsername");
            this.routerExtensions.navigate(["/body"], { clearHistory: true });
        }
        this._sideDrawerTransition = new nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3__["SlideInOnTopTransition"]();
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logOut = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
        application_settings__WEBPACK_IMPORTED_MODULE_4__["clear"]();
    };
    AppComponent.prototype.toProfileScreen = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
        this.routerExtensions.navigate(["/profile"], { clearHistory: true });
    };
    AppComponent.prototype.toHomeScreen = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
        this.routerExtensions.navigate(["/body"], { clearHistory: true });
    };
    AppComponent.prototype.closeSideDrawer = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
    };
    AppComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__("./app.component.html")).default
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("~nativescript-theme-core/css/core.dark.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.dark.css"));
global.registerModule("nativescript-theme-core/css/core.dark.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.dark.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"import","import":"\"~nativescript-theme-core/css/core.dark.css\""},{"type":"rule","selectors":[".fa"],"declarations":[{"type":"declaration","property":"font-family","value":"\"FontAwesome\""}]},{"type":"rule","selectors":[".action-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"color","value":"black"}]},{"type":"rule","selectors":[".page-content .page-placeholder"],"declarations":[{"type":"declaration","property":"color","value":"#d7d7d7"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"horizontal-align","value":"center"}]},{"type":"rule","selectors":[".page-content .page-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"72"},{"type":"declaration","property":"vertical-align","value":"top"},{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"color","value":"#d7d7d7"},{"type":"declaration","property":"margin-top","value":"20%"}]},{"type":"rule","selectors":[".sidedrawer"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"-100"}]},{"type":"rule","selectors":[".sidedrawer-list-item-icon",".sidedrawer-list-item"],"declarations":[{"type":"declaration","property":"color","value":"#022734"}]},{"type":"rule","selectors":[".sidedrawer.sidedrawer-left"],"declarations":[{"type":"declaration","property":"background-color","value":"#3a53ff"}]},{"type":"rule","selectors":[".sidedrawer.sidedrawer-left .sidedrawer-header-image"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"height","value":"60"},{"type":"declaration","property":"width","value":"60"},{"type":"declaration","property":"font-size","value":"60"},{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-top","value":"20"}]},{"type":"rule","selectors":[".sidedrawer.sidedrawer-left .footnote"],"declarations":[{"type":"declaration","property":"color","value":"rgba(255, 255, 255, 0.5)"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-header"],"declarations":[{"type":"declaration","property":"background-color","value":"slategrey"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-header .sidedrawer-header-brand"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item"],"declarations":[{"type":"declaration","property":"padding-left","value":"15"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item label"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"color","value":"#022734"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item .fa"],"declarations":[{"type":"declaration","property":"width","value":"20"},{"type":"declaration","property":"margin-right","value":"10"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item.selected"],"declarations":[{"type":"declaration","property":"background-color","value":"#f8f8f8"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item.selected label"],"declarations":[{"type":"declaration","property":"color","value":"#3a53ff"}]}],"parsingErrors":[]}};;
    if (false) {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./register/register.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./body/body.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./profile/profile.component.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__);










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIListViewModule"],
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptUISideDrawerModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./body/body.component.css":
/***/ (function(module, exports) {

module.exports = ".post-card-view {\r\n  margin-left: 4;\r\n  margin-right: 4;\r\n  margin-top: 2;\r\n  margin-bottom: 2;\r\n  background-color: white;\r\n}\r\n.item-image {\r\n  width: 80;\r\n  height: 80;\r\n}\r\n.item-name {\r\n  color: #303c47;\r\n  font-family: \"Open Sans\", \"OpenSans-Bold\";\r\n  font-weight: bold;\r\n  padding: 2;\r\n}\r\n.add-button-container {\r\n  margin-top: 85%;\r\n  margin-left: 75%;\r\n}\r\n.item-desc {\r\n  color: #303c47;\r\n  font-family: \"Open Sans\", \"OpenSans-Regular\";\r\n  padding: 2;\r\n}\r\n.item-price {\r\n  color: #c40404;\r\n  font-family: \"Open Sans\", \"OpenSans-Bold\";\r\n  font-weight: bold;\r\n  padding: 2;\r\n}\r\n.add-button {\r\n  background-color: black;\r\n  width: 70;\r\n  height: 70;\r\n  font-size: 50;\r\n  padding: 0 0 8;\r\n  border-radius: 100%;\r\n  color: white;\r\n  margin-right: 15;\r\n}\r\n.edit-view-stack-layout {\r\n  width: 50%;\r\n  background-color: dodgerblue;\r\n  color: #ffffff;\r\n}\r\n.delete-view-stack-layout {\r\n  width: 50%;\r\n  background-color: red;\r\n  color: #ffffff;\r\n}\r\n.dialog-open .content {\r\n  opacity: 0.6;\r\n}\r\n.dialog-open .dialog-wrapper {\r\n  visibility: visible;\r\n}\r\n.dialog-wrapper {\r\n  visibility: collapse;\r\n}\r\n.dialog {\r\n  background-color: white;\r\n  width: 95%;\r\n  margin-left: 10;\r\n  margin-top: 100;\r\n  border-radius: 10;\r\n}\r\n.text-field {\r\n  padding: 15;\r\n  background: white;\r\n  color: black;\r\n  border-width: 0.5;\r\n  border-radius: 5;\r\n  border-color: gray;\r\n}\r\n.text-error {\r\n  color: red;\r\n  text-align: center;\r\n}\r\n.dialog-add-button {\r\n  border-radius: 5;\r\n  background-color: dodgerblue;\r\n  font-size: 16;\r\n  color: white;\r\n  width: 50%;\r\n}\r\n.dialog-cancel-button {\r\n  border-radius: 5;\r\n  background-color: red;\r\n  font-size: 16;\r\n  color: white;\r\n  width: 50%;\r\n}\r\n.dialog-logo {\r\n  margin: 10;\r\n  height: 90;\r\n  align-content: center;\r\n}\r\n.dialog-label {\r\n  padding: 10;\r\n  font-weight: bold;\r\n  font-size: 14;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"whateverapp\" class=\"action-bar\">\n  <ActionItem>\n    <StackLayout>\n      <Button\n        class=\"fa\"\n        text=\"&#xf0c9;\"\n        fontSize=\"18\"\n        (tap)=\"onDrawerButtonTap()\"\n      ></Button>\n    </StackLayout>\n  </ActionItem>\n</ActionBar>\n<GridLayout class=\"page\" [class.dialog-open]=\"dialogOpen\">\n  <StackLayout orientation=\"vertical\" class=\"page page-content\" tkMainContent>\n    <GridLayout class=\"content\" tkExampleTitle tkToggleNavButton>\n      <RadListView\n        [items]=\"data\"\n        id=\"radlistview\"\n        swipeActions=\"true\"\n        (pullToRefreshInitiated)=\"onPullToRefreshInitiated($event)\"\n        (itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\"\n        backgroundColor=\"#e6e6e6\"\n        (itemLoading)=\"onItemLoading($event)\"\n      >\n        <ListViewStaggeredLayout\n          tkListViewLayout\n          scrollDirection=\"Vertical\"\n          spanCount=\"1\"\n        >\n        </ListViewStaggeredLayout>\n        <ng-template tkTemplate let-item=\"item\">\n          <DockLayout class=\"post-card-view\">\n            <Image src=\"{{ item.imageSrc }}\" class=\"item-image\"></Image>\n            <StackLayout backgroundColor=\"white\">\n              <Label\n                text=\"{{ item.name }}\"\n                class=\"item-name\"\n                textWrap=\"true\"\n              ></Label>\n              <Label\n                text=\"{{ item.desc }}\"\n                class=\"item-desc\"\n                textWrap=\"true\"\n              ></Label>\n              <Label text=\"{{ item.price }}\" class=\"item-price\"> </Label>\n              <Label visibility=\"collapsed\" text=\"{{ item.byUsername }}\">\n              </Label>\n              <Label visibility=\"collapsed\" text=\"{{ item.postId }}\"> </Label>\n            </StackLayout>\n          </DockLayout>\n        </ng-template>\n        <GridLayout\n          *tkListItemSwipeTemplate\n          columns=\"auto, *, auto\"\n          class=\"listItemSwipeGridLayout\"\n        >\n          <StackLayout\n            class=\"edit-view-stack-layout\"\n            col=\"0\"\n            (tap)=\"showDialog(1)\"\n          >\n            <Label\n              text=\"EDIT\"\n              verticalAlignment=\"center\"\n              horizontalAlignment=\"left\"\n            ></Label>\n          </StackLayout>\n          <StackLayout\n            class=\"delete-view-stack-layout\"\n            col=\"1\"\n            (tap)=\"onDelete()\"\n          >\n            <Label\n              text=\"DELETE\"\n              verticalAlignment=\"center\"\n              horizontalAlignment=\"right\"\n            ></Label>\n          </StackLayout>\n        </GridLayout>\n      </RadListView>\n      <StackLayout class=\"add-button-container\">\n        <Button class=\"add-button\" text=\"+\" (tap)=\"showDialog(0)\"> </Button>\n      </StackLayout>\n    </GridLayout>\n  </StackLayout>\n\n  <AbsoluteLayout class=\"dialog-wrapper\">\n    <StackLayout class=\"dialog\">\n      <Image class=\"dialog-logo\" src=\"~/images/dialog-logo.png\"></Image>\n      <label\n        class=\"dialog-label\"\n        textWrap=\"true\"\n        text=\"{{ addLabelText }}\"\n      ></label>\n      <text-field\n        [(ngModel)]=\"title\"\n        class=\"text-field\"\n        hint=\"Title\"\n      ></text-field>\n      <text-field\n        [(ngModel)]=\"description\"\n        class=\"text-field\"\n        hint=\"Description\"\n      ></text-field>\n      <text-field\n        class=\"text-field\"\n        hint=\"Price\"\n        [(ngModel)]=\"price\"\n        keyboardtype=\"number\"\n      ></text-field>\n      <label\n        visibility=\"{{ textErrorValue ? 'visible' : 'collapsed' }}\"\n        text=\"{{ textError }}\"\n        class=\"text-error\"\n      ></label>\n      <FlexboxLayout>\n        <Button\n          class=\"dialog-add-button\"\n          text=\"{{ addButtonText }}\"\n          (tap)=\"addOrUpdatePost()\"\n        ></Button>\n        <Button\n          class=\"dialog-cancel-button\"\n          text=\"Cancel\"\n          (tap)=\"closeDialog()\"\n        ></Button>\n      </FlexboxLayout>\n    </StackLayout>\n  </AbsoluteLayout>\n</GridLayout>\n"

/***/ }),

/***/ "./body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/color/color.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(utils_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ui_frame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
/* harmony import */ var ui_frame__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ui_frame__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(application_settings__WEBPACK_IMPORTED_MODULE_7__);








var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
        this.data = [];
        this.dialogOpen = false;
        this.title = "";
        this.description = "";
        this.price = "";
        this.sumPosts = 0;
        this.addLabelText = "";
        this.addButtonText = "";
        this.textError = "";
        this.textErrorValue = "";
        this.alpha = 0;
    }
    BodyComponent.prototype.showDialog = function (aux) {
        if (aux == 0) {
            this.alpha = 0;
            this.addButtonText = "Add";
            this.addLabelText = "How can you make the post attractive ?";
            this.title = "";
            this.description = "";
            this.price = "";
            this.dialogOpen = true;
        }
        else {
            this.alpha = 1;
            this.addButtonText = "Update";
            this.addLabelText =
                "How can you make the post more attractive after updates ?";
            var radListView = (ui_frame__WEBPACK_IMPORTED_MODULE_5__["Frame"].topmost().currentPage.getViewById("radlistview"));
            this.title = radListView.items[this.selected].name;
            this.description = radListView.items[this.selected].desc;
            this.price = radListView.items[this.selected].price;
            this.dialogOpen = true;
        }
    };
    BodyComponent.prototype.closeDialog = function () {
        this.dialogOpen = false;
    };
    BodyComponent.prototype.onItemLoading = function (args) {
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__["isIOS"]) {
            var newcolor = new color__WEBPACK_IMPORTED_MODULE_3__["Color"]("#e6e6e6");
            args.ios.backgroundView.backgroundColor = newcolor.ios;
        }
    };
    BodyComponent.prototype.ngOnInit = function () {
        this.fetchPosts();
    };
    BodyComponent.prototype.onDelete = function () {
        var _this = this;
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["confirm"]({
            title: "Delete post",
            message: "Are you sure you want to delete this post ?",
            okButtonText: "Yes",
            cancelButtonText: "No"
        })
            .then(function (result) {
            if (result) {
                var radListView = (ui_frame__WEBPACK_IMPORTED_MODULE_5__["Frame"].topmost().currentPage.getViewById("radlistview"));
                _this.data.splice(_this.selected, 1);
                radListView.notifySwipeToExecuteFinished();
                fetch("https://my-json-server.typicode.com/houssemfadhli/whateverapp/posts/" +
                    radListView.items.postId, {
                    method: "DELETE"
                });
            }
        });
    };
    BodyComponent.prototype.onPullToRefreshInitiated = function (args) {
        var _this = this;
        var radListView = args.object;
        setTimeout(function () {
            _this.data.push();
            radListView.notifyPullToRefreshFinished();
        }, 500);
    };
    BodyComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        swipeLimits.threshold = 50 * utils_utils__WEBPACK_IMPORTED_MODULE_4__["layout"].getDisplayDensity();
        swipeLimits.left = 100 * utils_utils__WEBPACK_IMPORTED_MODULE_4__["layout"].getDisplayDensity();
        swipeLimits.right = 100 * utils_utils__WEBPACK_IMPORTED_MODULE_4__["layout"].getDisplayDensity();
        this.selected = args.index;
    };
    BodyComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    BodyComponent.prototype.fetchPosts = function () {
        var _this = this;
        fetch("https://my-json-server.typicode.com/houssemfadhli/whateverapp/posts/")
            .then(function (response) { return response.json(); })
            .then(function (r) {
            for (var i = 0; i < r.length; i++) {
                _this.data.push({
                    name: r[i].name,
                    postId: r[i].id,
                    desc: r[i].desc,
                    price: r[i].price + " DT",
                    imageSrc: r[i].imageSrc,
                    byUsername: ""
                });
            }
            _this.sumPosts = r.length;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    BodyComponent.prototype.addOrUpdatePost = function () {
        if (this.checkErrors()) {
            if (this.alpha == 0) {
                fetch("https://my-json-server.typicode.com/houssemfadhli/whateverapp/posts/", {
                    method: "POST",
                    body: JSON.stringify({
                        name: this.title,
                        id: (this.sumPosts + 1).toString(),
                        desc: this.description,
                        price: this.price,
                        imageSrc: "https://image.flaticon.com/icons/svg/146/146817.svg",
                        byUsername: application_settings__WEBPACK_IMPORTED_MODULE_7__["getString"]("localUsername")
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(function (response) { return response.json(); })
                    .then(function (json) { return console.log(json); });
                this.closeDialog();
            }
            else {
                fetch("https://jsonplaceholder.typicode.com/posts/" + this.selected + 1, {
                    method: "PUT",
                    body: JSON.stringify({
                        name: this.title,
                        price: this.price,
                        desc: this.description
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(function (response) { return response.json(); })
                    .then(function (json) { return console.log(json); });
                var radListView = (ui_frame__WEBPACK_IMPORTED_MODULE_5__["Frame"].topmost().currentPage.getViewById("radlistview"));
                this.closeDialog();
            }
        }
    };
    BodyComponent.prototype.checkErrors = function () {
        if (this.title.trim().length == 0 &&
            this.description.trim().length == 0 &&
            this.price.trim().length == 0) {
            this.textErrorValue = "visible";
            this.textError = "Title, description and price cannot be empty";
            return false;
        }
        if (this.title.trim().length == 0) {
            this.textErrorValue = "visible";
            this.textError = "Title cannot be empty";
            return false;
        }
        if (this.description.trim().length == 0) {
            this.textErrorValue = "visible";
            this.textError = "Description cannot be empty";
            return false;
        }
        if (this.price.trim().length == 0) {
            this.textErrorValue = "visible";
            this.textError = "Price cannot be empty";
            return false;
        }
        this.textErrorValue = "";
        this.textError = "";
        return true;
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Body",
            template: __importDefault(__webpack_require__("./body/body.component.html")).default,
            styles: [__importDefault(__webpack_require__("./body/body.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (false) {}
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        // this import should be first in order to load some required settings (like globals and reflect-metadata)



Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
Object(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"main.js","name":"tns-template-blank-ng","version":"3.1.1"};

/***/ }),

/***/ "./profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".profile-pic {\n  width: 130;\n  height: 130;\n  border-radius: 100;\n  margin: 32 32 16 32;\n}\n.profile-title {\n  color: #000;\n  font-size: 19;\n  font-weight: bold;\n}\n.additional-info {\n  border-radius: 15;\n  background: #eeeeee;\n  padding: 18;\n  line-height: 18;\n  margin-top: 20;\n  width: 85%;\n}\n.icon-aditional-info {\n  font-size: 16;\n  color: #557aad;\n  text-align: center;\n  padding-top: 2;\n}\n.description-aditional-info {\n  font-size: 15;\n  color: #000;\n  margin-left: 8;\n  border-width: 1;\n  border-color: transparent;\n}\n.profile-posts-number {\n  padding-top: 15;\n  color: #000;\n  font-size: 19;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"whateverapp\" class=\"action-bar\">\n  <ActionItem>\n    <StackLayout>\n      <Button\n        class=\"fa\"\n        text=\"&#xf0c9;\"\n        fontSize=\"20\"\n        (tap)=\"onDrawerButtonTap()\"\n      ></Button>\n    </StackLayout>\n  </ActionItem>\n</ActionBar>\n<GridLayout class=\"animate-fadeInUp-delay-0ms\">\n  <ScrollView orientation=\"vertical\">\n    <GridLayout rows=\"auto, auto, auto, auto,auto\" columns=\"*\">\n      <Image\n        row=\"0\"\n        col=\"0\"\n        src=\"~/images/default-profile-pic.png\"\n        stretch=\"aspectFill\"\n        class=\"profile-pic\"\n      ></Image>\n      <Label\n        row=\"1\"\n        col=\"0\"\n        text=\"{{ usernamelabel }}\"\n        class=\"profile-title\"\n        textAlignment=\"center\"\n      ></Label>\n      <GridLayout\n        row=\"2\"\n        col=\"0\"\n        rows=\"auto, auto\"\n        columns=\"auto, auto\"\n        class=\"additional-info\"\n      >\n        <Label\n          row=\"0\"\n          col=\"0\"\n          text=\"&#xf041;\"\n          class=\"fa icon-aditional-info\"\n        ></Label>\n        <Label\n          row=\"0\"\n          col=\"1\"\n          text=\"{{ '' + usernameAddress }}\"\n          class=\"fa description-aditional-info\"\n        ></Label>\n      </GridLayout>\n      <Label\n        row=\"3\"\n        col=\"0\"\n        text=\"{{ usernamePostsNumber }}\"\n        class=\"profile-posts-number\"\n        textAlignment=\"center\"\n      ></Label>\n      <Label\n        row=\"4\"\n        col=\"0\"\n        font-size=\"13\"\n        text=\"Posts\"\n        textAlignment=\"center\"\n      ></Label>\n    </GridLayout>\n  </ScrollView>\n</GridLayout>\n"

/***/ }),

/***/ "./profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(application__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(application_settings__WEBPACK_IMPORTED_MODULE_4__);





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.usernameAddress = "";
        this.usernamelabel = "";
        this.usernamePostsNumber = "0";
    }
    ProfileComponent.prototype.getLocation = function () {
        var _this = this;
        nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["getCurrentLocation"]({
            desiredAccuracy: ui_enums__WEBPACK_IMPORTED_MODULE_2__["Accuracy"].high,
            maximumAge: 5000,
            timeout: 20000
        })
            .then(function (res) {
            // get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
            fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
                res.latitude +
                "," +
                res.longitude +
                "&key=AIzaSyDA86y73zC9Fo04VoLf9y_aMx5OHEZvTmY")
                .then(function (response) { return response.json(); })
                .then(function (r) {
                console.log(r);
                _this.usernameAddress = "Searching for location...";
                if (r.results[0]) {
                    _this.usernameAddress = r.results[0].formatted_address;
                }
            });
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.fetchPostsNumber();
        this.getLocation();
        this.usernamelabel = application_settings__WEBPACK_IMPORTED_MODULE_4__["getString"]("localUsername")
            .toLocaleUpperCase();
    };
    ProfileComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_3__["getRootView"]();
        sideDrawer.showDrawer();
    };
    ProfileComponent.prototype.fetchPostsNumber = function () {
        var _this = this;
        fetch("https://my-json-server.typicode.com/houssemfadhli/whateverapp/posts/")
            .then(function (response) { return response.json(); })
            .then(function (r) {
            var k = 0;
            for (var i = 0; i < r.length; i++) {
                if (r[i].byUsername == application_settings__WEBPACK_IMPORTED_MODULE_4__["getString"]("localUsername")) {
                    k++;
                }
            }
            _this.usernamePostsNumber = k.toString();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Profile",
            template: __importDefault(__webpack_require__("./profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__("./profile/profile.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel {\n  vertical-align: center;\n  font-size: 20;\n  margin: 15;\n}\n.register-logo {\n  margin: 15;\n  height: 90;\n}\n.text-field {\n  padding: 15;\n  background: white;\n  color: black;\n  border-width: 0.5;\n  border-radius: 5;\n  border-color: gray;\n}\n.sign-up-button {\n  padding: 15;\n  background-color: goldenrod;\n  color: white;\n  font-size: 16;\n  border-width: 0.5;\n  border-radius: 5;\n}\n.to-sign-in-screen {\n  padding: 15;\n  text-align: center;\n  color: gray;\n}\n.text-error {\n  color: red;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<ScrollView>\n  <StackLayout verticalAlignment=\"center\">\n    <Image class=\"register-logo\" src=\"~/images/register-logo.png\"></Image>\n    <TextField\n      class=\"text-field\"\n      [(ngModel)]=\"username\"\n      hint=\"Username\"\n      returnKeyType=\"next\"\n      (returnPress)=\"focusPassword(true)\"\n    >\n    </TextField>\n    <TextField\n      #passwordId\n      class=\"text-field\"\n      [(ngModel)]=\"password\"\n      hint=\"Password\"\n      secure=\"true\"\n      returnKeyType=\"next\"\n      (returnPress)=\"focusPassword(false)\"\n    >\n    </TextField>\n    <TextField\n      #secondPasswordId\n      class=\"text-field\"\n      [(ngModel)]=\"secondpassword\"\n      hint=\"Confirm password\"\n      secure=\"true\"\n      returnKeyType=\"done\"\n    >\n    </TextField>\n    <label\n      visibility=\"{{ textErrorValue ? 'visible' : 'collapsed' }}\"\n      text=\"{{ textError }}\"\n      class=\"text-error\"\n    ></label>\n    <Button class=\"sign-up-button\" text=\"Sign up\" (tap)=\"onSignUp()\"> </Button>\n    <label\n      class=\"to-sign-in-screen\"\n      text=\"Already sign up ? sign in.\"\n      (tap)=\"toSignInScreen()\"\n    >\n    </label>\n  </StackLayout>\n</ScrollView>\n"

/***/ }),

/***/ "./register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(application_settings__WEBPACK_IMPORTED_MODULE_2__);



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.username = "";
        this.password = "";
        this.secondpassword = "";
        this.textError = "";
        this.textErrorValue = "";
    }
    RegisterComponent.prototype.onSignUp = function () {
        this.fetchUsers();
    };
    RegisterComponent.prototype.checkErrors = function (aux) {
        if (aux > 0) {
            this.textErrorValue = "visible";
            this.textError = "Username already taken";
            return false;
        }
        if (this.username.trim().length == 0 &&
            this.password.trim().length == 0 &&
            this.secondpassword.trim().length == 0) {
            this.textErrorValue = "visible";
            this.textError = "Username, password and second password cannot be empty";
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
        if (this.secondpassword.trim().length == 0) {
            this.textErrorValue = "visible";
            this.textError = "Second password cannot be empty";
            return false;
        }
        if (this.password.trim() != this.secondpassword.trim()) {
            this.textErrorValue = "visible";
            this.textError = "Password does not match";
            return false;
        }
        this.textErrorValue = "";
        this.textError = "";
        return true;
    };
    RegisterComponent.prototype.toSignInScreen = function () {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    };
    RegisterComponent.prototype.focusPassword = function (btw) {
        if (btw) {
            this.passwordId.nativeElement.focus();
        }
        else {
            this.secondPasswordId.nativeElement.focus();
        }
    };
    RegisterComponent.prototype.addUser = function () {
        fetch("https://my-json-server.typicode.com/houssemfadhli/whateverapp/users/", {
            method: "POST",
            body: JSON.stringify({
                username: this.username.trim().toLowerCase(),
                password: this.password.trim().toLowerCase()
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(function (response) { return response.json(); })
            .then(function (json) { return console.log(json); });
    };
    RegisterComponent.prototype.fetchUsers = function () {
        var _this = this;
        fetch("https://my-json-server.typicode.com/houssemfadhli/whateverapp/users/")
            .then(function (response) { return response.json(); })
            .then(function (r) {
            var k = 0;
            for (var i = 0; i < r.length; i++) {
                if (_this.username.trim().toLowerCase() == r[i]) {
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
    RegisterComponent.prototype.checkUsersDetails = function (aux) {
        if (this.checkErrors(aux)) {
            application_settings__WEBPACK_IMPORTED_MODULE_2__["setString"]("localUsername", this.username.trim().toLowerCase());
            application_settings__WEBPACK_IMPORTED_MODULE_2__["setString"]("localPassword", this.password.trim().toLowerCase());
            this.routerExtensions.navigate(["/body"], { clearHistory: true });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("passwordId", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "passwordId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("secondPasswordId", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "secondPasswordId", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Register",
            template: __importDefault(__webpack_require__("./register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__("./register/register.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2JvZHkvYm9keS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2JvZHkvYm9keS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib2R5L2JvZHkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNMO0FBQ1o7QUFDUztBQUUvRCxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFB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QXFCLENBQ25CLGVBQWUsRUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUNuQyxDQUFDO1lBQ0YsOERBQXFCLENBQ25CLGVBQWUsRUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUNuQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDO0lBQ0Qsb0NBQVEsR0FBUixjQUFrQixDQUFDOztnQkFuRG1CLDRFQUFnQjs7SUE1RFY7UUFBM0MsK0RBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7a0NBQWEsd0RBQVU7eURBQUM7SUFFbkU7UUFEQywrREFBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUMvQix3REFBVTsrREFBQztJQUhsQixpQkFBaUI7UUFON0IsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBRXBCLDRGQUF3Qzs7U0FFekMsQ0FBQzt5Q0E4RHNDLDRFQUFnQjtPQTdEM0MsaUJBQWlCLENBaUg3QjtJQUFELHdCQUFDO0NBQUE7QUFqSDZCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCb2R5Q29tcG9uZW50IH0gZnJvbSBcIi4vYm9keS9ib2R5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gIHsgcGF0aDogXCJyZWdpc3RlclwiLCBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogXCJib2R5XCIsIGNvbXBvbmVudDogQm9keUNvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwicHJvZmlsZVwiLCBjb21wb25lbnQ6IFByb2ZpbGVDb21wb25lbnQgfSxcbiAge1xuICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KFwiLi9ob21lL2hvbWUubW9kdWxlXCIpLnRoZW4obSA9PiBtLkhvbWVNb2R1bGUpXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS1cXG5SYWRTaWRlRHJhd2VyIGlzIGEgVUkgY29tcG9uZW50IHBhcnQgb2YgdGhlIFByb2dyZXNzIE5hdGl2ZVNjcmlwdCBVSSBzZXQgb2YgY29tcG9uZW50cy5cXG5MZWFybiBtb3JlIGFib3V0IHRoZSBSYWRTaWRlRHJhd2VyIFVJIGNvbXBvbmVudCBhbmQgaG93IGl0IGNhbiBiZSBjdXN0b21pemVkIGluIHRoaXMgZG9jdW1lbnRhdGlvbiBhcnRpY2xlOlxcbmh0dHA6Ly9kb2NzLnRlbGVyaWsuY29tL2RldnRvb2xzL25hdGl2ZXNjcmlwdC11aS9Db250cm9scy9OYXRpdmVTY3JpcHQvU2lkZURyYXdlci9nZXR0aW5nLXN0YXJ0ZWRcXG4tLT5cXG48UmFkU2lkZURyYXdlclxcbiAgW2RyYXdlclRyYW5zaXRpb25dPVxcXCJzaWRlRHJhd2VyVHJhbnNpdGlvblxcXCJcXG4gIGdlc3R1cmVzRW5hYmxlZD1cXFwiZmFsc2VcXFwiXFxuPlxcbiAgPEdyaWRMYXlvdXRcXG4gICAgdGtEcmF3ZXJDb250ZW50XFxuICAgIHJvd3M9XFxcImF1dG8sICpcXFwiXFxuICAgIGNsYXNzPVxcXCJzaWRlZHJhd2VyIHNpZGVkcmF3ZXItbGVmdFxcXCJcXG4gICAgKHRhcCk9XFxcImNsb3NlU2lkZURyYXdlcigpXFxcIlxcbiAgPlxcbiAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1oZWFkZXJcXFwiPlxcbiAgICAgIDxMYWJlbFxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIGZhXFxcIlxcbiAgICAgICAgdGV4dD1cXFwiJiN4ZjJiZDtcXFwiXFxuICAgICAgPjwvTGFiZWw+XFxuICAgICAgPExhYmVsXFxuICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICB0ZXh0PVxcXCJ7eyB1c2VybmFtZUxhYmVsIH19XFxcIlxcbiAgICAgICAgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kXFxcIlxcbiAgICAgID48L0xhYmVsPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8U2Nyb2xsVmlldyByb3c9XFxcIjFcXFwiPlxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic2lkZWRyYXdlci1jb250ZW50XFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwMTU7XFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgIDxMYWJlbFxcbiAgICAgICAgICAgIGNvbD1cXFwiMVxcXCJcXG4gICAgICAgICAgICB0ZXh0PVxcXCJIb21lXFxcIlxcbiAgICAgICAgICAgICh0YXApPVxcXCJ0b0hvbWVTY3JlZW4oKVxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwicC1yLTEwXFxcIlxcbiAgICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwMDc7XFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxMYWJlbFxcbiAgICAgICAgICAgICh0YXApPVxcXCJ0b1Byb2ZpbGVTY3JlZW4oKVxcXCJcXG4gICAgICAgICAgICBjb2w9XFxcIjFcXFwiXFxuICAgICAgICAgICAgdGV4dD1cXFwiUHJvZmlsZVxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwicC1yLTEwXFxcIlxcbiAgICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDIzO1xcXCIgY2xhc3M9XFxcImZhXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWwgKHRhcCk9XFxcImxvZ091dCgpXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIkxvZ291dFxcXCIgY2xhc3M9XFxcInAtci0xMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuICA8L0dyaWRMYXlvdXQ+XFxuICA8cGFnZS1yb3V0ZXItb3V0bGV0IHRrTWFpbkNvbnRlbnQgY2xhc3M9XFxcInBhZ2UgcGFnZS1jb250ZW50XFxcIj5cXG4gIDwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbjwvUmFkU2lkZURyYXdlcj5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1xuICBEcmF3ZXJUcmFuc2l0aW9uQmFzZSxcbiAgUmFkU2lkZURyYXdlcixcbiAgU2xpZGVJbk9uVG9wVHJhbnNpdGlvblxufSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm90ZWN0ZWQgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcbiAgcHJvdGVjdGVkIHVzZXJuYW1lTGFiZWw6IHN0cmluZyA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoYXBwU2V0dGluZ3MuaGFzS2V5KFwibG9jYWxVc2VybmFtZVwiKSkge1xuICAgICAgdGhpcy51c2VybmFtZUxhYmVsID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibG9jYWxVc2VybmFtZVwiKTtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYm9keVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgfVxuXG4gIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICB9XG4gIGxvZ091dCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgYXBwU2V0dGluZ3MuY2xlYXIoKTtcbiAgfVxuICB0b1Byb2ZpbGVTY3JlZW4oKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3Byb2ZpbGVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG4gIHRvSG9tZVNjcmVlbigpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYm9keVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cbiAgY2xvc2VTaWRlRHJhd2VyKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gIH1cbn1cbiIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5kYXJrLmNzc1xcXCJcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udEF3ZXNvbWVcXFwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFjdGlvbi1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2UtY29udGVudCAucGFnZS1wbGFjZWhvbGRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Q3ZDdkN1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2UtY29udGVudCAucGFnZS1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNzJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcInRvcFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNkN2Q3ZDdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiLTEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uXCIsXCIuc2lkZWRyYXdlci1saXN0LWl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMjI3MzRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlci5zaWRlZHJhd2VyLWxlZnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIuc2lkZWRyYXdlci1sZWZ0IC5mb290bm90ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItaGVhZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInNsYXRlZ3JleVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWhlYWRlciAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIGxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMjI3MzRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbSAuZmFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5zZWxlY3RlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjhmOGY4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0uc2VsZWN0ZWQgbGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIE5nTW9kdWxlRmFjdG9yeUxvYWRlcixcbiAgTk9fRVJST1JTX1NDSEVNQVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJvZHlDb21wb25lbnQgfSBmcm9tIFwiLi9ib2R5L2JvZHkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuQE5nTW9kdWxlKHtcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICBCb2R5Q29tcG9uZW50LFxuICAgIFByb2ZpbGVDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wb3N0LWNhcmQtdmlldyB7XFxyXFxuICBtYXJnaW4tbGVmdDogNDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNDtcXHJcXG4gIG1hcmdpbi10b3A6IDI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5pdGVtLWltYWdlIHtcXHJcXG4gIHdpZHRoOiA4MDtcXHJcXG4gIGhlaWdodDogODA7XFxyXFxufVxcclxcbi5pdGVtLW5hbWUge1xcclxcbiAgY29sb3I6ICMzMDNjNDc7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJPcGVuU2Fucy1Cb2xkXFxcIjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogMjtcXHJcXG59XFxyXFxuLmFkZC1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDg1JTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XFxyXFxufVxcclxcbi5pdGVtLWRlc2Mge1xcclxcbiAgY29sb3I6ICMzMDNjNDc7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJPcGVuU2Fucy1SZWd1bGFyXFxcIjtcXHJcXG4gIHBhZGRpbmc6IDI7XFxyXFxufVxcclxcbi5pdGVtLXByaWNlIHtcXHJcXG4gIGNvbG9yOiAjYzQwNDA0O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiT3BlblNhbnMtQm9sZFxcXCI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDI7XFxyXFxufVxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgd2lkdGg6IDcwO1xcclxcbiAgaGVpZ2h0OiA3MDtcXHJcXG4gIGZvbnQtc2l6ZTogNTA7XFxyXFxuICBwYWRkaW5nOiAwIDAgODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcclxcbn1cXHJcXG4uZWRpdC12aWV3LXN0YWNrLWxheW91dCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG4uZGVsZXRlLXZpZXctc3RhY2stbGF5b3V0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLmRpYWxvZy1vcGVuIC5jb250ZW50IHtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuLmRpYWxvZy1vcGVuIC5kaWFsb2ctd3JhcHBlciB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG4uZGlhbG9nLXdyYXBwZXIge1xcclxcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVxcclxcbi5kaWFsb2cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwO1xcclxcbiAgbWFyZ2luLXRvcDogMTAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTA7XFxyXFxufVxcclxcbi50ZXh0LWZpZWxkIHtcXHJcXG4gIHBhZGRpbmc6IDE1O1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICBib3JkZXItY29sb3I6IGdyYXk7XFxyXFxufVxcclxcbi50ZXh0LWVycm9yIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kaWFsb2ctYWRkLWJ1dHRvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG4uZGlhbG9nLWNhbmNlbC1idXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG4uZGlhbG9nLWxvZ28ge1xcclxcbiAgbWFyZ2luOiAxMDtcXHJcXG4gIGhlaWdodDogOTA7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5kaWFsb2ctbGFiZWwge1xcclxcbiAgcGFkZGluZzogMTA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIndoYXRldmVyYXBwXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICA8QWN0aW9uSXRlbT5cXG4gICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgIDxCdXR0b25cXG4gICAgICAgIGNsYXNzPVxcXCJmYVxcXCJcXG4gICAgICAgIHRleHQ9XFxcIiYjeGYwYzk7XFxcIlxcbiAgICAgICAgZm9udFNpemU9XFxcIjE4XFxcIlxcbiAgICAgICAgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgICAgPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9BY3Rpb25JdGVtPlxcbjwvQWN0aW9uQmFyPlxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiBbY2xhc3MuZGlhbG9nLW9wZW5dPVxcXCJkaWFsb2dPcGVuXFxcIj5cXG4gIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJwYWdlIHBhZ2UtY29udGVudFxcXCIgdGtNYWluQ29udGVudD5cXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcImNvbnRlbnRcXFwiIHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICAgIDxSYWRMaXN0Vmlld1xcbiAgICAgICAgW2l0ZW1zXT1cXFwiZGF0YVxcXCJcXG4gICAgICAgIGlkPVxcXCJyYWRsaXN0dmlld1xcXCJcXG4gICAgICAgIHN3aXBlQWN0aW9ucz1cXFwidHJ1ZVxcXCJcXG4gICAgICAgIChwdWxsVG9SZWZyZXNoSW5pdGlhdGVkKT1cXFwib25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKCRldmVudClcXFwiXFxuICAgICAgICAoaXRlbVN3aXBlUHJvZ3Jlc3NTdGFydGVkKT1cXFwib25Td2lwZUNlbGxTdGFydGVkKCRldmVudClcXFwiXFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNlNmU2ZTZcXFwiXFxuICAgICAgICAoaXRlbUxvYWRpbmcpPVxcXCJvbkl0ZW1Mb2FkaW5nKCRldmVudClcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPExpc3RWaWV3U3RhZ2dlcmVkTGF5b3V0XFxuICAgICAgICAgIHRrTGlzdFZpZXdMYXlvdXRcXG4gICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uPVxcXCJWZXJ0aWNhbFxcXCJcXG4gICAgICAgICAgc3BhbkNvdW50PVxcXCIxXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgPC9MaXN0Vmlld1N0YWdnZXJlZExheW91dD5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a1RlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgPERvY2tMYXlvdXQgY2xhc3M9XFxcInBvc3QtY2FyZC12aWV3XFxcIj5cXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ7eyBpdGVtLmltYWdlU3JjIH19XFxcIiBjbGFzcz1cXFwiaXRlbS1pbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVxcXCJ3aGl0ZVxcXCI+XFxuICAgICAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICAgICAgdGV4dD1cXFwie3sgaXRlbS5uYW1lIH19XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaXRlbS1uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IGl0ZW0uZGVzYyB9fVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcIml0ZW0tZGVzY1xcXCJcXG4gICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLnByaWNlIH19XFxcIiBjbGFzcz1cXFwiaXRlbS1wcmljZVxcXCI+IDwvTGFiZWw+XFxuICAgICAgICAgICAgICA8TGFiZWwgdmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiB0ZXh0PVxcXCJ7eyBpdGVtLmJ5VXNlcm5hbWUgfX1cXFwiPlxcbiAgICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgICAgIDxMYWJlbCB2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIHRleHQ9XFxcInt7IGl0ZW0ucG9zdElkIH19XFxcIj4gPC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICA8L0RvY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPEdyaWRMYXlvdXRcXG4gICAgICAgICAgKnRrTGlzdEl0ZW1Td2lwZVRlbXBsYXRlXFxuICAgICAgICAgIGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJsaXN0SXRlbVN3aXBlR3JpZExheW91dFxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0XFxuICAgICAgICAgICAgY2xhc3M9XFxcImVkaXQtdmlldy1zdGFjay1sYXlvdXRcXFwiXFxuICAgICAgICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICh0YXApPVxcXCJzaG93RGlhbG9nKDEpXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgICB0ZXh0PVxcXCJFRElUXFxcIlxcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiXFxuICAgICAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgIDxTdGFja0xheW91dFxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJkZWxldGUtdmlldy1zdGFjay1sYXlvdXRcXFwiXFxuICAgICAgICAgICAgY29sPVxcXCIxXFxcIlxcbiAgICAgICAgICAgICh0YXApPVxcXCJvbkRlbGV0ZSgpXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgICB0ZXh0PVxcXCJERUxFVEVcXFwiXFxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiXFxuICAgICAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImFkZC1idXR0b24tY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImFkZC1idXR0b25cXFwiIHRleHQ9XFxcIitcXFwiICh0YXApPVxcXCJzaG93RGlhbG9nKDApXFxcIj4gPC9CdXR0b24+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9TdGFja0xheW91dD5cXG5cXG4gIDxBYnNvbHV0ZUxheW91dCBjbGFzcz1cXFwiZGlhbG9nLXdyYXBwZXJcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImRpYWxvZ1xcXCI+XFxuICAgICAgPEltYWdlIGNsYXNzPVxcXCJkaWFsb2ctbG9nb1xcXCIgc3JjPVxcXCJ+L2ltYWdlcy9kaWFsb2ctbG9nby5wbmdcXFwiPjwvSW1hZ2U+XFxuICAgICAgPGxhYmVsXFxuICAgICAgICBjbGFzcz1cXFwiZGlhbG9nLWxhYmVsXFxcIlxcbiAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICB0ZXh0PVxcXCJ7eyBhZGRMYWJlbFRleHQgfX1cXFwiXFxuICAgICAgPjwvbGFiZWw+XFxuICAgICAgPHRleHQtZmllbGRcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJ0aXRsZVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIlxcbiAgICAgICAgaGludD1cXFwiVGl0bGVcXFwiXFxuICAgICAgPjwvdGV4dC1maWVsZD5cXG4gICAgICA8dGV4dC1maWVsZFxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcImRlc2NyaXB0aW9uXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiXFxuICAgICAgICBoaW50PVxcXCJEZXNjcmlwdGlvblxcXCJcXG4gICAgICA+PC90ZXh0LWZpZWxkPlxcbiAgICAgIDx0ZXh0LWZpZWxkXFxuICAgICAgICBjbGFzcz1cXFwidGV4dC1maWVsZFxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIlByaWNlXFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcInByaWNlXFxcIlxcbiAgICAgICAga2V5Ym9hcmR0eXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgPjwvdGV4dC1maWVsZD5cXG4gICAgICA8bGFiZWxcXG4gICAgICAgIHZpc2liaWxpdHk9XFxcInt7IHRleHRFcnJvclZhbHVlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCcgfX1cXFwiXFxuICAgICAgICB0ZXh0PVxcXCJ7eyB0ZXh0RXJyb3IgfX1cXFwiXFxuICAgICAgICBjbGFzcz1cXFwidGV4dC1lcnJvclxcXCJcXG4gICAgICA+PC9sYWJlbD5cXG4gICAgICA8RmxleGJveExheW91dD5cXG4gICAgICAgIDxCdXR0b25cXG4gICAgICAgICAgY2xhc3M9XFxcImRpYWxvZy1hZGQtYnV0dG9uXFxcIlxcbiAgICAgICAgICB0ZXh0PVxcXCJ7eyBhZGRCdXR0b25UZXh0IH19XFxcIlxcbiAgICAgICAgICAodGFwKT1cXFwiYWRkT3JVcGRhdGVQb3N0KClcXFwiXFxuICAgICAgICA+PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uXFxuICAgICAgICAgIGNsYXNzPVxcXCJkaWFsb2ctY2FuY2VsLWJ1dHRvblxcXCJcXG4gICAgICAgICAgdGV4dD1cXFwiQ2FuY2VsXFxcIlxcbiAgICAgICAgICAodGFwKT1cXFwiY2xvc2VEaWFsb2coKVxcXCJcXG4gICAgICAgID48L0J1dHRvbj5cXG4gICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L0Fic29sdXRlTGF5b3V0PlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiQm9keVwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2JvZHkuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2JvZHkuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBCb2R5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvdGVjdGVkIHNlbGVjdGVkOiBudW1iZXI7XG4gIHByb3RlY3RlZCBkYXRhID0gW107XG4gIHByb3RlY3RlZCBkaWFsb2dPcGVuID0gZmFsc2U7XG4gIHByb3RlY3RlZCB0aXRsZTogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBcIlwiO1xuICBwcm90ZWN0ZWQgcHJpY2U6IHN0cmluZyA9IFwiXCI7XG4gIHByb3RlY3RlZCBzdW1Qb3N0czogbnVtYmVyID0gMDtcbiAgcHJvdGVjdGVkIGFkZExhYmVsVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIGFkZEJ1dHRvblRleHQ6IHN0cmluZyA9IFwiXCI7XG4gIHByb3RlY3RlZCB0ZXh0RXJyb3I6IHN0cmluZyA9IFwiXCI7XG4gIHByb3RlY3RlZCB0ZXh0RXJyb3JWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIGFscGhhOiBudW1iZXIgPSAwO1xuXG4gIHNob3dEaWFsb2coYXV4OiBudW1iZXIpIHtcbiAgICBpZiAoYXV4ID09IDApIHtcbiAgICAgIHRoaXMuYWxwaGEgPSAwO1xuICAgICAgdGhpcy5hZGRCdXR0b25UZXh0ID0gXCJBZGRcIjtcbiAgICAgIHRoaXMuYWRkTGFiZWxUZXh0ID0gXCJIb3cgY2FuIHlvdSBtYWtlIHRoZSBwb3N0IGF0dHJhY3RpdmUgP1wiO1xuXG4gICAgICB0aGlzLnRpdGxlID0gXCJcIjtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgdGhpcy5wcmljZSA9IFwiXCI7XG4gICAgICB0aGlzLmRpYWxvZ09wZW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFscGhhID0gMTtcbiAgICAgIHRoaXMuYWRkQnV0dG9uVGV4dCA9IFwiVXBkYXRlXCI7XG4gICAgICB0aGlzLmFkZExhYmVsVGV4dCA9XG4gICAgICAgIFwiSG93IGNhbiB5b3UgbWFrZSB0aGUgcG9zdCBtb3JlIGF0dHJhY3RpdmUgYWZ0ZXIgdXBkYXRlcyA/XCI7XG4gICAgICBsZXQgcmFkTGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+KFxuICAgICAgICBGcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoXCJyYWRsaXN0dmlld1wiKVxuICAgICAgKTtcbiAgICAgIHRoaXMudGl0bGUgPSByYWRMaXN0Vmlldy5pdGVtc1t0aGlzLnNlbGVjdGVkXS5uYW1lO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHJhZExpc3RWaWV3Lml0ZW1zW3RoaXMuc2VsZWN0ZWRdLmRlc2M7XG4gICAgICB0aGlzLnByaWNlID0gcmFkTGlzdFZpZXcuaXRlbXNbdGhpcy5zZWxlY3RlZF0ucHJpY2U7XG4gICAgICB0aGlzLmRpYWxvZ09wZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLmRpYWxvZ09wZW4gPSBmYWxzZTtcbiAgfVxuICBvbkl0ZW1Mb2FkaW5nKGFyZ3MpIHtcbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIHZhciBuZXdjb2xvciA9IG5ldyBDb2xvcihcIiNlNmU2ZTZcIik7XG4gICAgICBhcmdzLmlvcy5iYWNrZ3JvdW5kVmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXdjb2xvci5pb3M7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mZXRjaFBvc3RzKCk7XG4gIH1cbiAgb25EZWxldGUoKSB7XG4gICAgZGlhbG9nc1xuICAgICAgLmNvbmZpcm0oe1xuICAgICAgICB0aXRsZTogXCJEZWxldGUgcG9zdFwiLFxuICAgICAgICBtZXNzYWdlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwb3N0ID9cIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCJcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgbGV0IHJhZExpc3RWaWV3ID0gPFJhZExpc3RWaWV3PihcbiAgICAgICAgICAgIEZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZChcInJhZGxpc3R2aWV3XCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKHRoaXMuc2VsZWN0ZWQsIDEpO1xuICAgICAgICAgIHJhZExpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcbiAgICAgICAgICBmZXRjaChcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vaG91c3NlbWZhZGhsaS93aGF0ZXZlcmFwcC9wb3N0cy9cIiArXG4gICAgICAgICAgICAgIHJhZExpc3RWaWV3Lml0ZW1zLnBvc3RJZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiAgcHVibGljIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZChhcmdzOiBhbnkpIHtcbiAgICB2YXIgcmFkTGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YS5wdXNoKCk7XG4gICAgICByYWRMaXN0Vmlldy5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcbiAgICB9LCA1MDApO1xuICB9XG4gIHB1YmxpYyBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG4gICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gNTAgKiBVdGlscy5sYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcbiAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gMTAwICogVXRpbHMubGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XG4gICAgc3dpcGVMaW1pdHMucmlnaHQgPSAxMDAgKiBVdGlscy5sYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gYXJncy5pbmRleDtcbiAgfVxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cbiAgZmV0Y2hQb3N0cygpOiB2b2lkIHtcbiAgICBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vaG91c3NlbWZhZGhsaS93aGF0ZXZlcmFwcC9wb3N0cy9cIlxuICAgIClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmRhdGEucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiByW2ldLm5hbWUsXG4gICAgICAgICAgICBwb3N0SWQ6IHJbaV0uaWQsXG4gICAgICAgICAgICBkZXNjOiByW2ldLmRlc2MsXG4gICAgICAgICAgICBwcmljZTogcltpXS5wcmljZSArIFwiIERUXCIsXG4gICAgICAgICAgICBpbWFnZVNyYzogcltpXS5pbWFnZVNyYyxcbiAgICAgICAgICAgIGJ5VXNlcm5hbWU6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1bVBvc3RzID0gci5sZW5ndGg7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuICBhZGRPclVwZGF0ZVBvc3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hlY2tFcnJvcnMoKSkge1xuICAgICAgaWYgKHRoaXMuYWxwaGEgPT0gMCkge1xuICAgICAgICBmZXRjaChcbiAgICAgICAgICBcImh0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2hvdXNzZW1mYWRobGkvd2hhdGV2ZXJhcHAvcG9zdHMvXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgaWQ6ICh0aGlzLnN1bVBvc3RzICsgMSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgZGVzYzogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2UsXG4gICAgICAgICAgICAgIGltYWdlU3JjOiBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDYvMTQ2ODE3LnN2Z1wiLFxuICAgICAgICAgICAgICBieVVzZXJuYW1lOiBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJsb2NhbFVzZXJuYW1lXCIpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oanNvbiA9PiBjb25zb2xlLmxvZyhqc29uKSk7XG4gICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZldGNoKFxuICAgICAgICAgIFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzL1wiICsgdGhpcy5zZWxlY3RlZCArIDEsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgICAgICAgICAgZGVzYzogdGhpcy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgIC50aGVuKGpzb24gPT4gY29uc29sZS5sb2coanNvbikpO1xuICAgICAgICBsZXQgcmFkTGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+KFxuICAgICAgICAgIEZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZChcInJhZGxpc3R2aWV3XCIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2hlY2tFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy50aXRsZS50cmltKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24udHJpbSgpLmxlbmd0aCA9PSAwICYmXG4gICAgICB0aGlzLnByaWNlLnRyaW0oKS5sZW5ndGggPT0gMFxuICAgICkge1xuICAgICAgdGhpcy50ZXh0RXJyb3JWYWx1ZSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy50ZXh0RXJyb3IgPSBcIlRpdGxlLCBkZXNjcmlwdGlvbiBhbmQgcHJpY2UgY2Fubm90IGJlIGVtcHR5XCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnRpdGxlLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy50ZXh0RXJyb3JWYWx1ZSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy50ZXh0RXJyb3IgPSBcIlRpdGxlIGNhbm5vdCBiZSBlbXB0eVwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZXNjcmlwdGlvbi50cmltKCkubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMudGV4dEVycm9yVmFsdWUgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMudGV4dEVycm9yID0gXCJEZXNjcmlwdGlvbiBjYW5ub3QgYmUgZW1wdHlcIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJpY2UudHJpbSgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnRleHRFcnJvclZhbHVlID0gXCJ2aXNpYmxlXCI7XG4gICAgICB0aGlzLnRleHRFcnJvciA9IFwiUHJpY2UgY2Fubm90IGJlIGVtcHR5XCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudGV4dEVycm9yVmFsdWUgPSBcIlwiO1xuICAgIHRoaXMudGV4dEVycm9yID0gXCJcIjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIucHJvZmlsZS1waWMge1xcbiAgd2lkdGg6IDEzMDtcXG4gIGhlaWdodDogMTMwO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwO1xcbiAgbWFyZ2luOiAzMiAzMiAxNiAzMjtcXG59XFxuLnByb2ZpbGUtdGl0bGUge1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDE5O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hZGRpdGlvbmFsLWluZm8ge1xcbiAgYm9yZGVyLXJhZGl1czogMTU7XFxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xcbiAgcGFkZGluZzogMTg7XFxuICBsaW5lLWhlaWdodDogMTg7XFxuICBtYXJnaW4tdG9wOiAyMDtcXG4gIHdpZHRoOiA4NSU7XFxufVxcbi5pY29uLWFkaXRpb25hbC1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBjb2xvcjogIzU1N2FhZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAyO1xcbn1cXG4uZGVzY3JpcHRpb24tYWRpdGlvbmFsLWluZm8ge1xcbiAgZm9udC1zaXplOiAxNTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbWFyZ2luLWxlZnQ6IDg7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHJvZmlsZS1wb3N0cy1udW1iZXIge1xcbiAgcGFkZGluZy10b3A6IDE1O1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDE5O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIndoYXRldmVyYXBwXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICA8QWN0aW9uSXRlbT5cXG4gICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgIDxCdXR0b25cXG4gICAgICAgIGNsYXNzPVxcXCJmYVxcXCJcXG4gICAgICAgIHRleHQ9XFxcIiYjeGYwYzk7XFxcIlxcbiAgICAgICAgZm9udFNpemU9XFxcIjIwXFxcIlxcbiAgICAgICAgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgICAgPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9BY3Rpb25JdGVtPlxcbjwvQWN0aW9uQmFyPlxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJhbmltYXRlLWZhZGVJblVwLWRlbGF5LTBtc1xcXCI+XFxuICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLGF1dG9cXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcbiAgICAgIDxJbWFnZVxcbiAgICAgICAgcm93PVxcXCIwXFxcIlxcbiAgICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgc3JjPVxcXCJ+L2ltYWdlcy9kZWZhdWx0LXByb2ZpbGUtcGljLnBuZ1xcXCJcXG4gICAgICAgIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiXFxuICAgICAgICBjbGFzcz1cXFwicHJvZmlsZS1waWNcXFwiXFxuICAgICAgPjwvSW1hZ2U+XFxuICAgICAgPExhYmVsXFxuICAgICAgICByb3c9XFxcIjFcXFwiXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICB0ZXh0PVxcXCJ7eyB1c2VybmFtZWxhYmVsIH19XFxcIlxcbiAgICAgICAgY2xhc3M9XFxcInByb2ZpbGUtdGl0bGVcXFwiXFxuICAgICAgICB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgPjwvTGFiZWw+XFxuICAgICAgPEdyaWRMYXlvdXRcXG4gICAgICAgIHJvdz1cXFwiMlxcXCJcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiXFxuICAgICAgICBjb2x1bW5zPVxcXCJhdXRvLCBhdXRvXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImFkZGl0aW9uYWwtaW5mb1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgcm93PVxcXCIwXFxcIlxcbiAgICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICAgIHRleHQ9XFxcIiYjeGYwNDE7XFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwiZmEgaWNvbi1hZGl0aW9uYWwtaW5mb1xcXCJcXG4gICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgPExhYmVsXFxuICAgICAgICAgIHJvdz1cXFwiMFxcXCJcXG4gICAgICAgICAgY29sPVxcXCIxXFxcIlxcbiAgICAgICAgICB0ZXh0PVxcXCJ7eyAnJyArIHVzZXJuYW1lQWRkcmVzcyB9fVxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcImZhIGRlc2NyaXB0aW9uLWFkaXRpb25hbC1pbmZvXFxcIlxcbiAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDxMYWJlbFxcbiAgICAgICAgcm93PVxcXCIzXFxcIlxcbiAgICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgdGV4dD1cXFwie3sgdXNlcm5hbWVQb3N0c051bWJlciB9fVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJwcm9maWxlLXBvc3RzLW51bWJlclxcXCJcXG4gICAgICAgIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICA+PC9MYWJlbD5cXG4gICAgICA8TGFiZWxcXG4gICAgICAgIHJvdz1cXFwiNFxcXCJcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIGZvbnQtc2l6ZT1cXFwiMTNcXFwiXFxuICAgICAgICB0ZXh0PVxcXCJQb3N0c1xcXCJcXG4gICAgICAgIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICA+PC9MYWJlbD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9TY3JvbGxWaWV3PlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIlByb2ZpbGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9wcm9maWxlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9wcm9maWxlLmNvbXBvbmVudC5jc3NcIl0sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb3RlY3RlZCB1c2VybmFtZUFkZHJlc3MgPSBcIlwiO1xuICBwcm90ZWN0ZWQgdXNlcm5hbWVsYWJlbDogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIHVzZXJuYW1lUG9zdHNOdW1iZXI6IHN0cmluZyA9IFwiMFwiO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbiAgZ2V0TG9jYXRpb24oKTogdm9pZCB7XG4gICAgZ2VvbG9jYXRpb25cbiAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXG4gICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXG4gICAgICAgIHRpbWVvdXQ6IDIwMDAwXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgLy8gZ2V0IHRoZSBhZGRyZXNzIChSRVFVSVJFUyBZT1VSIE9XTiBHT09HTEUgTUFQIEFQSSBLRVkhKVxuICAgICAgICBmZXRjaChcbiAgICAgICAgICBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/bGF0bG5nPVwiICtcbiAgICAgICAgICAgIHJlcy5sYXRpdHVkZSArXG4gICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICByZXMubG9uZ2l0dWRlICtcbiAgICAgICAgICAgIFwiJmtleT1BSXphU3lEQTg2eTczekM5Rm8wNFZvTGY5eV9hTXg1T0hFWnZUbVlcIlxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lQWRkcmVzcyA9IFwiU2VhcmNoaW5nIGZvciBsb2NhdGlvbi4uLlwiO1xuICAgICAgICAgICAgaWYgKHIucmVzdWx0c1swXSkge1xuICAgICAgICAgICAgICB0aGlzLnVzZXJuYW1lQWRkcmVzcyA9IHIucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mZXRjaFBvc3RzTnVtYmVyKCk7XG4gICAgdGhpcy5nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMudXNlcm5hbWVsYWJlbCA9IGFwcFNldHRpbmdzXG4gICAgICAuZ2V0U3RyaW5nKFwibG9jYWxVc2VybmFtZVwiKVxuICAgICAgLnRvTG9jYWxlVXBwZXJDYXNlKCk7XG4gIH1cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG4gIGZldGNoUG9zdHNOdW1iZXIoKTogdm9pZCB7XG4gICAgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2hvdXNzZW1mYWRobGkvd2hhdGV2ZXJhcHAvcG9zdHMvXCJcbiAgICApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyID0+IHtcbiAgICAgICAgdmFyIGs6IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChyW2ldLmJ5VXNlcm5hbWUgPT0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibG9jYWxVc2VybmFtZVwiKSkge1xuICAgICAgICAgICAgaysrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVzZXJuYW1lUG9zdHNOdW1iZXIgPSBrLnRvU3RyaW5nKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVsIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwO1xcbiAgbWFyZ2luOiAxNTtcXG59XFxuLnJlZ2lzdGVyLWxvZ28ge1xcbiAgbWFyZ2luOiAxNTtcXG4gIGhlaWdodDogOTA7XFxufVxcbi50ZXh0LWZpZWxkIHtcXG4gIHBhZGRpbmc6IDE1O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDAuNTtcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxuICBib3JkZXItY29sb3I6IGdyYXk7XFxufVxcbi5zaWduLXVwLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBib3JkZXItd2lkdGg6IDAuNTtcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxufVxcbi50by1zaWduLWluLXNjcmVlbiB7XFxuICBwYWRkaW5nOiAxNTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4udGV4dC1lcnJvciB7XFxuICBjb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U2Nyb2xsVmlldz5cXG4gIDxTdGFja0xheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgPEltYWdlIGNsYXNzPVxcXCJyZWdpc3Rlci1sb2dvXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL3JlZ2lzdGVyLWxvZ28ucG5nXFxcIj48L0ltYWdlPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXJuYW1lXFxcIlxcbiAgICAgIGhpbnQ9XFxcIlVzZXJuYW1lXFxcIlxcbiAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxuICAgICAgKHJldHVyblByZXNzKT1cXFwiZm9jdXNQYXNzd29yZCh0cnVlKVxcXCJcXG4gICAgPlxcbiAgICA8L1RleHRGaWVsZD5cXG4gICAgPFRleHRGaWVsZFxcbiAgICAgICNwYXNzd29yZElkXFxuICAgICAgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInBhc3N3b3JkXFxcIlxcbiAgICAgIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIlxcbiAgICAgIHNlY3VyZT1cXFwidHJ1ZVxcXCJcXG4gICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQoZmFsc2UpXFxcIlxcbiAgICA+XFxuICAgIDwvVGV4dEZpZWxkPlxcbiAgICA8VGV4dEZpZWxkXFxuICAgICAgI3NlY29uZFBhc3N3b3JkSWRcXG4gICAgICBjbGFzcz1cXFwidGV4dC1maWVsZFxcXCJcXG4gICAgICBbKG5nTW9kZWwpXT1cXFwic2Vjb25kcGFzc3dvcmRcXFwiXFxuICAgICAgaGludD1cXFwiQ29uZmlybSBwYXNzd29yZFxcXCJcXG4gICAgICBzZWN1cmU9XFxcInRydWVcXFwiXFxuICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCJcXG4gICAgPlxcbiAgICA8L1RleHRGaWVsZD5cXG4gICAgPGxhYmVsXFxuICAgICAgdmlzaWJpbGl0eT1cXFwie3sgdGV4dEVycm9yVmFsdWUgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJyB9fVxcXCJcXG4gICAgICB0ZXh0PVxcXCJ7eyB0ZXh0RXJyb3IgfX1cXFwiXFxuICAgICAgY2xhc3M9XFxcInRleHQtZXJyb3JcXFwiXFxuICAgID48L2xhYmVsPlxcbiAgICA8QnV0dG9uIGNsYXNzPVxcXCJzaWduLXVwLWJ1dHRvblxcXCIgdGV4dD1cXFwiU2lnbiB1cFxcXCIgKHRhcCk9XFxcIm9uU2lnblVwKClcXFwiPiA8L0J1dHRvbj5cXG4gICAgPGxhYmVsXFxuICAgICAgY2xhc3M9XFxcInRvLXNpZ24taW4tc2NyZWVuXFxcIlxcbiAgICAgIHRleHQ9XFxcIkFscmVhZHkgc2lnbiB1cCA/IHNpZ24gaW4uXFxcIlxcbiAgICAgICh0YXApPVxcXCJ0b1NpZ25JblNjcmVlbigpXFxcIlxcbiAgICA+XFxuICAgIDwvbGFiZWw+XFxuICA8L1N0YWNrTGF5b3V0PlxcbjwvU2Nyb2xsVmlldz5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiUmVnaXN0ZXJcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcmVnaXN0ZXIuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJwYXNzd29yZElkXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBwYXNzd29yZElkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic2Vjb25kUGFzc3dvcmRJZFwiLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgc2Vjb25kUGFzc3dvcmRJZDogRWxlbWVudFJlZjtcbiAgcHJvdGVjdGVkIHVzZXJuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBwcm90ZWN0ZWQgcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XG4gIHByb3RlY3RlZCBzZWNvbmRwYXNzd29yZDogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIHRleHRFcnJvcjogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIHRleHRFcnJvclZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuICBvblNpZ25VcCgpOiB2b2lkIHtcbiAgICB0aGlzLmZldGNoVXNlcnMoKTtcbiAgfVxuICBjaGVja0Vycm9ycyhhdXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChhdXggPiAwKSB7XG4gICAgICB0aGlzLnRleHRFcnJvclZhbHVlID0gXCJ2aXNpYmxlXCI7XG4gICAgICB0aGlzLnRleHRFcnJvciA9IFwiVXNlcm5hbWUgYWxyZWFkeSB0YWtlblwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLnVzZXJuYW1lLnRyaW0oKS5sZW5ndGggPT0gMCAmJlxuICAgICAgdGhpcy5wYXNzd29yZC50cmltKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIHRoaXMuc2Vjb25kcGFzc3dvcmQudHJpbSgpLmxlbmd0aCA9PSAwXG4gICAgKSB7XG4gICAgICB0aGlzLnRleHRFcnJvclZhbHVlID0gXCJ2aXNpYmxlXCI7XG4gICAgICB0aGlzLnRleHRFcnJvciA9IFwiVXNlcm5hbWUsIHBhc3N3b3JkIGFuZCBzZWNvbmQgcGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5XCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnVzZXJuYW1lLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy50ZXh0RXJyb3JWYWx1ZSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy50ZXh0RXJyb3IgPSBcIlVzZXJuYW1lIGNhbm5vdCBiZSBlbXB0eVwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXNzd29yZC50cmltKCkubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMudGV4dEVycm9yVmFsdWUgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMudGV4dEVycm9yID0gXCJQYXNzd29yZCBjYW5ub3QgYmUgZW1wdHlcIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2Vjb25kcGFzc3dvcmQudHJpbSgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnRleHRFcnJvclZhbHVlID0gXCJ2aXNpYmxlXCI7XG4gICAgICB0aGlzLnRleHRFcnJvciA9IFwiU2Vjb25kIHBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eVwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXNzd29yZC50cmltKCkgIT0gdGhpcy5zZWNvbmRwYXNzd29yZC50cmltKCkpIHtcbiAgICAgIHRoaXMudGV4dEVycm9yVmFsdWUgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMudGV4dEVycm9yID0gXCJQYXNzd29yZCBkb2VzIG5vdCBtYXRjaFwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnRleHRFcnJvclZhbHVlID0gXCJcIjtcbiAgICB0aGlzLnRleHRFcnJvciA9IFwiXCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdG9TaWduSW5TY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuICBmb2N1c1Bhc3N3b3JkKGJ0dzogYm9vbGVhbikge1xuICAgIGlmIChidHcpIHtcbiAgICAgIHRoaXMucGFzc3dvcmRJZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Vjb25kUGFzc3dvcmRJZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge31cblxuICBhZGRVc2VyKCk6IHZvaWQge1xuICAgIGZldGNoKFxuICAgICAgXCJodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbS9ob3Vzc2VtZmFkaGxpL3doYXRldmVyYXBwL3VzZXJzL1wiLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiBjb25zb2xlLmxvZyhqc29uKSk7XG4gIH1cbiAgZmV0Y2hVc2VycygpOiB2b2lkIHtcbiAgICBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vaG91c3NlbWZhZGhsaS93aGF0ZXZlcmFwcC91c2Vycy9cIlxuICAgIClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICB2YXIgazogbnVtYmVyID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudXNlcm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT0gcltpXSkge1xuICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgdGhpcy5jaGVja1VzZXJzRGV0YWlscyhrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1VzZXJzRGV0YWlscyhrKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG4gIGNoZWNrVXNlcnNEZXRhaWxzKGF1eDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hlY2tFcnJvcnMoYXV4KSkge1xuICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFxuICAgICAgICBcImxvY2FsVXNlcm5hbWVcIixcbiAgICAgICAgdGhpcy51c2VybmFtZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcbiAgICAgICAgXCJsb2NhbFBhc3N3b3JkXCIsXG4gICAgICAgIHRoaXMucGFzc3dvcmQudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2JvZHlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9