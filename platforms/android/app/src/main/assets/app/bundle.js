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
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

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
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2JvZHkvYm9keS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2JvZHkvYm9keS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib2R5L2JvZHkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNMO0FBQ1o7QUFDUztBQUUvRCxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFB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QUFxQixDQUNuQixlQUFlLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FDbkMsQ0FBQztZQUNGLDhEQUFxQixDQUNuQixlQUFlLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FDbkMsQ0FBQztZQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUNELG9DQUFRLEdBQVIsY0FBa0IsQ0FBQzs7Z0JBbkRtQiw0RUFBZ0I7O0lBNURWO1FBQTNDLCtEQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFhLHdEQUFVO3lEQUFDO0lBRW5FO1FBREMsK0RBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztrQ0FDL0Isd0RBQVU7K0RBQUM7SUFIbEIsaUJBQWlCO1FBTjdCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUVwQiw0RkFBd0M7O1NBRXpDLENBQUM7eUNBOERzQyw0RUFBZ0I7T0E3RDNDLGlCQUFpQixDQWlIN0I7SUFBRCx3QkFBQztDQUFBO0FBakg2QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQm9keUNvbXBvbmVudCB9IGZyb20gXCIuL2JvZHkvYm9keS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwiYm9keVwiLCBjb21wb25lbnQ6IEJvZHlDb21wb25lbnQgfSxcbiAgeyBwYXRoOiBcInByb2ZpbGVcIiwgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50IH0sXG4gIHtcbiAgICBwYXRoOiBcImhvbWVcIixcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydChcIi4vaG9tZS9ob21lLm1vZHVsZVwiKS50aGVuKG0gPT4gbS5Ib21lTW9kdWxlKVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge31cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tXFxuUmFkU2lkZURyYXdlciBpcyBhIFVJIGNvbXBvbmVudCBwYXJ0IG9mIHRoZSBQcm9ncmVzcyBOYXRpdmVTY3JpcHQgVUkgc2V0IG9mIGNvbXBvbmVudHMuXFxuTGVhcm4gbW9yZSBhYm91dCB0aGUgUmFkU2lkZURyYXdlciBVSSBjb21wb25lbnQgYW5kIGhvdyBpdCBjYW4gYmUgY3VzdG9taXplZCBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXJ0aWNsZTpcXG5odHRwOi8vZG9jcy50ZWxlcmlrLmNvbS9kZXZ0b29scy9uYXRpdmVzY3JpcHQtdWkvQ29udHJvbHMvTmF0aXZlU2NyaXB0L1NpZGVEcmF3ZXIvZ2V0dGluZy1zdGFydGVkXFxuLS0+XFxuPFJhZFNpZGVEcmF3ZXJcXG4gIFtkcmF3ZXJUcmFuc2l0aW9uXT1cXFwic2lkZURyYXdlclRyYW5zaXRpb25cXFwiXFxuICBnZXN0dXJlc0VuYWJsZWQ9XFxcImZhbHNlXFxcIlxcbj5cXG4gIDxHcmlkTGF5b3V0XFxuICAgIHRrRHJhd2VyQ29udGVudFxcbiAgICByb3dzPVxcXCJhdXRvLCAqXFxcIlxcbiAgICBjbGFzcz1cXFwic2lkZWRyYXdlciBzaWRlZHJhd2VyLWxlZnRcXFwiXFxuICAgICh0YXApPVxcXCJjbG9zZVNpZGVEcmF3ZXIoKVxcXCJcXG4gID5cXG4gICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyXFxcIj5cXG4gICAgICA8TGFiZWxcXG4gICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWhlYWRlci1pbWFnZSBmYVxcXCJcXG4gICAgICAgIHRleHQ9XFxcIiYjeGYyYmQ7XFxcIlxcbiAgICAgID48L0xhYmVsPlxcbiAgICAgIDxMYWJlbFxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICAgICAgdGV4dD1cXFwie3sgdXNlcm5hbWVMYWJlbCB9fVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWhlYWRlci1icmFuZFxcXCJcXG4gICAgICA+PC9MYWJlbD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gICAgPFNjcm9sbFZpZXcgcm93PVxcXCIxXFxcIj5cXG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpZGVkcmF3ZXItY29udGVudFxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDE1O1xcXCIgY2xhc3M9XFxcImZhXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICBjb2w9XFxcIjFcXFwiXFxuICAgICAgICAgICAgdGV4dD1cXFwiSG9tZVxcXCJcXG4gICAgICAgICAgICAodGFwKT1cXFwidG9Ib21lU2NyZWVuKClcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcInAtci0xMFxcXCJcXG4gICAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDA3O1xcXCIgY2xhc3M9XFxcImZhXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICAodGFwKT1cXFwidG9Qcm9maWxlU2NyZWVuKClcXFwiXFxuICAgICAgICAgICAgY29sPVxcXCIxXFxcIlxcbiAgICAgICAgICAgIHRleHQ9XFxcIlByb2ZpbGVcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcInAtci0xMFxcXCJcXG4gICAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjAyMztcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPExhYmVsICh0YXApPVxcXCJsb2dPdXQoKVxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJMb2dvdXRcXFwiIGNsYXNzPVxcXCJwLXItMTBcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbiAgPC9HcmlkTGF5b3V0PlxcbiAgPHBhZ2Utcm91dGVyLW91dGxldCB0a01haW5Db250ZW50IGNsYXNzPVxcXCJwYWdlIHBhZ2UtY29udGVudFxcXCI+XFxuICA8L3BhZ2Utcm91dGVyLW91dGxldD5cXG48L1JhZFNpZGVEcmF3ZXI+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtcbiAgRHJhd2VyVHJhbnNpdGlvbkJhc2UsXG4gIFJhZFNpZGVEcmF3ZXIsXG4gIFNsaWRlSW5PblRvcFRyYW5zaXRpb25cbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvdGVjdGVkIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG4gIHByb3RlY3RlZCB1c2VybmFtZUxhYmVsOiBzdHJpbmcgPSBcIlwiO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKGFwcFNldHRpbmdzLmhhc0tleShcImxvY2FsVXNlcm5hbWVcIikpIHtcbiAgICAgIHRoaXMudXNlcm5hbWVMYWJlbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImxvY2FsVXNlcm5hbWVcIik7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2JvZHlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbiAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gIH1cblxuICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgfVxuICBsb2dPdXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIGFwcFNldHRpbmdzLmNsZWFyKCk7XG4gIH1cbiAgdG9Qcm9maWxlU2NyZWVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuICB0b0hvbWVTY3JlZW4oKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2JvZHlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG4gIGNsb3NlU2lkZURyYXdlcigpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICB9XG59XG4iLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmRhcmsuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmRhcmsuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmRhcmsuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmRhcmsuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIkZvbnRBd2Vzb21lXFxcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5hY3Rpb24tYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlLWNvbnRlbnQgLnBhZ2UtcGxhY2Vob2xkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNkN2Q3ZDdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlLWNvbnRlbnQgLnBhZ2UtaWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjcyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJ0b3BcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZDdkN2Q3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjIwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIi0xMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvblwiLFwiLnNpZGVkcmF3ZXItbGlzdC1pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDIyNzM0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIuc2lkZWRyYXdlci1sZWZ0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlci5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI2MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyLnNpZGVkcmF3ZXItbGVmdCAuZm9vdG5vdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWhlYWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJzbGF0ZWdyZXlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1oZWFkZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbSBsYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDIyNzM0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLmZhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0uc2VsZWN0ZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y4ZjhmOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLnNlbGVjdGVkIGxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7XG4gIE5nTW9kdWxlLFxuICBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsXG4gIE5PX0VSUk9SU19TQ0hFTUFcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCb2R5Q29tcG9uZW50IH0gZnJvbSBcIi4vYm9keS9ib2R5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgQm9keUNvbXBvbmVudCxcbiAgICBQcm9maWxlQ29tcG9uZW50XG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIucG9zdC1jYXJkLXZpZXcge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDQ7XFxyXFxuICBtYXJnaW4tdG9wOiAyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uaXRlbS1pbWFnZSB7XFxyXFxuICB3aWR0aDogODA7XFxyXFxuICBoZWlnaHQ6IDgwO1xcclxcbn1cXHJcXG4uaXRlbS1uYW1lIHtcXHJcXG4gIGNvbG9yOiAjMzAzYzQ3O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiT3BlblNhbnMtQm9sZFxcXCI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDI7XFxyXFxufVxcclxcbi5hZGQtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiA4NSU7XFxyXFxuICBtYXJnaW4tbGVmdDogNzUlO1xcclxcbn1cXHJcXG4uaXRlbS1kZXNjIHtcXHJcXG4gIGNvbG9yOiAjMzAzYzQ3O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiT3BlblNhbnMtUmVndWxhclxcXCI7XFxyXFxuICBwYWRkaW5nOiAyO1xcclxcbn1cXHJcXG4uaXRlbS1wcmljZSB7XFxyXFxuICBjb2xvcjogI2M0MDQwNDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIk9wZW5TYW5zLUJvbGRcXFwiO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiAyO1xcclxcbn1cXHJcXG4uYWRkLWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHdpZHRoOiA3MDtcXHJcXG4gIGhlaWdodDogNzA7XFxyXFxuICBmb250LXNpemU6IDUwO1xcclxcbiAgcGFkZGluZzogMCAwIDg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcXHJcXG59XFxyXFxuLmVkaXQtdmlldy1zdGFjay1sYXlvdXQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLmRlbGV0ZS12aWV3LXN0YWNrLWxheW91dCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcbi5kaWFsb2ctb3BlbiAuY29udGVudCB7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcbi5kaWFsb2ctb3BlbiAuZGlhbG9nLXdyYXBwZXIge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuLmRpYWxvZy13cmFwcGVyIHtcXHJcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG4uZGlhbG9nIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwO1xcclxcbn1cXHJcXG4udGV4dC1maWVsZCB7XFxyXFxuICBwYWRkaW5nOiAxNTtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1O1xcclxcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG4udGV4dC1lcnJvciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZGlhbG9nLWFkZC1idXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuLmRpYWxvZy1jYW5jZWwtYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuLmRpYWxvZy1sb2dvIHtcXHJcXG4gIG1hcmdpbjogMTA7XFxyXFxuICBoZWlnaHQ6IDkwO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uZGlhbG9nLWxhYmVsIHtcXHJcXG4gIHBhZGRpbmc6IDEwO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDE0O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJ3aGF0ZXZlcmFwcFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgPEFjdGlvbkl0ZW0+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICA8QnV0dG9uXFxuICAgICAgICBjbGFzcz1cXFwiZmFcXFwiXFxuICAgICAgICB0ZXh0PVxcXCImI3hmMGM5O1xcXCJcXG4gICAgICAgIGZvbnRTaXplPVxcXCIxOFxcXCJcXG4gICAgICAgICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgID48L0J1dHRvbj5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvQWN0aW9uSXRlbT5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dCBjbGFzcz1cXFwicGFnZVxcXCIgW2NsYXNzLmRpYWxvZy1vcGVuXT1cXFwiZGlhbG9nT3BlblxcXCI+XFxuICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwicGFnZSBwYWdlLWNvbnRlbnRcXFwiIHRrTWFpbkNvbnRlbnQ+XFxuICAgIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJjb250ZW50XFxcIiB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgICA8UmFkTGlzdFZpZXdcXG4gICAgICAgIFtpdGVtc109XFxcImRhdGFcXFwiXFxuICAgICAgICBpZD1cXFwicmFkbGlzdHZpZXdcXFwiXFxuICAgICAgICBzd2lwZUFjdGlvbnM9XFxcInRydWVcXFwiXFxuICAgICAgICAocHVsbFRvUmVmcmVzaEluaXRpYXRlZCk9XFxcIm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgKGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZCk9XFxcIm9uU3dpcGVDZWxsU3RhcnRlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCIjZTZlNmU2XFxcIlxcbiAgICAgICAgKGl0ZW1Mb2FkaW5nKT1cXFwib25JdGVtTG9hZGluZygkZXZlbnQpXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxMaXN0Vmlld1N0YWdnZXJlZExheW91dFxcbiAgICAgICAgICB0a0xpc3RWaWV3TGF5b3V0XFxuICAgICAgICAgIHNjcm9sbERpcmVjdGlvbj1cXFwiVmVydGljYWxcXFwiXFxuICAgICAgICAgIHNwYW5Db3VudD1cXFwiMVxcXCJcXG4gICAgICAgID5cXG4gICAgICAgIDwvTGlzdFZpZXdTdGFnZ2VyZWRMYXlvdXQ+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtUZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgIDxEb2NrTGF5b3V0IGNsYXNzPVxcXCJwb3N0LWNhcmQtdmlld1xcXCI+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwie3sgaXRlbS5pbWFnZVNyYyB9fVxcXCIgY2xhc3M9XFxcIml0ZW0taW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cXFwid2hpdGVcXFwiPlxcbiAgICAgICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IGl0ZW0ubmFtZSB9fVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcIml0ZW0tbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgICAgICAgIDxMYWJlbFxcbiAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBpdGVtLmRlc2MgfX1cXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpdGVtLWRlc2NcXFwiXFxuICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXRlbS5wcmljZSB9fVxcXCIgY2xhc3M9XFxcIml0ZW0tcHJpY2VcXFwiPiA8L0xhYmVsPlxcbiAgICAgICAgICAgICAgPExhYmVsIHZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgdGV4dD1cXFwie3sgaXRlbS5ieVVzZXJuYW1lIH19XFxcIj5cXG4gICAgICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICAgICAgICA8TGFiZWwgdmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiB0ZXh0PVxcXCJ7eyBpdGVtLnBvc3RJZCB9fVxcXCI+IDwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgPC9Eb2NrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxHcmlkTGF5b3V0XFxuICAgICAgICAgICp0a0xpc3RJdGVtU3dpcGVUZW1wbGF0ZVxcbiAgICAgICAgICBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwibGlzdEl0ZW1Td2lwZUdyaWRMYXlvdXRcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDxTdGFja0xheW91dFxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJlZGl0LXZpZXctc3RhY2stbGF5b3V0XFxcIlxcbiAgICAgICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgICAgICAodGFwKT1cXFwic2hvd0RpYWxvZygxKVxcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgIDxMYWJlbFxcbiAgICAgICAgICAgICAgdGV4dD1cXFwiRURJVFxcXCJcXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIlxcbiAgICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXRcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZGVsZXRlLXZpZXctc3RhY2stbGF5b3V0XFxcIlxcbiAgICAgICAgICAgIGNvbD1cXFwiMVxcXCJcXG4gICAgICAgICAgICAodGFwKT1cXFwib25EZWxldGUoKVxcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgIDxMYWJlbFxcbiAgICAgICAgICAgICAgdGV4dD1cXFwiREVMRVRFXFxcIlxcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIlxcbiAgICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvUmFkTGlzdFZpZXc+XFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJhZGQtYnV0dG9uLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJhZGQtYnV0dG9uXFxcIiB0ZXh0PVxcXCIrXFxcIiAodGFwKT1cXFwic2hvd0RpYWxvZygwKVxcXCI+IDwvQnV0dG9uPlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvR3JpZExheW91dD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICA8QWJzb2x1dGVMYXlvdXQgY2xhc3M9XFxcImRpYWxvZy13cmFwcGVyXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJkaWFsb2dcXFwiPlxcbiAgICAgIDxJbWFnZSBjbGFzcz1cXFwiZGlhbG9nLWxvZ29cXFwiIHNyYz1cXFwifi9pbWFnZXMvZGlhbG9nLWxvZ28ucG5nXFxcIj48L0ltYWdlPlxcbiAgICAgIDxsYWJlbFxcbiAgICAgICAgY2xhc3M9XFxcImRpYWxvZy1sYWJlbFxcXCJcXG4gICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgdGV4dD1cXFwie3sgYWRkTGFiZWxUZXh0IH19XFxcIlxcbiAgICAgID48L2xhYmVsPlxcbiAgICAgIDx0ZXh0LWZpZWxkXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwidGl0bGVcXFwiXFxuICAgICAgICBjbGFzcz1cXFwidGV4dC1maWVsZFxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIlRpdGxlXFxcIlxcbiAgICAgID48L3RleHQtZmllbGQ+XFxuICAgICAgPHRleHQtZmllbGRcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJkZXNjcmlwdGlvblxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIlxcbiAgICAgICAgaGludD1cXFwiRGVzY3JpcHRpb25cXFwiXFxuICAgICAgPjwvdGV4dC1maWVsZD5cXG4gICAgICA8dGV4dC1maWVsZFxcbiAgICAgICAgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiXFxuICAgICAgICBoaW50PVxcXCJQcmljZVxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJwcmljZVxcXCJcXG4gICAgICAgIGtleWJvYXJkdHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgID48L3RleHQtZmllbGQ+XFxuICAgICAgPGxhYmVsXFxuICAgICAgICB2aXNpYmlsaXR5PVxcXCJ7eyB0ZXh0RXJyb3JWYWx1ZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIlxcbiAgICAgICAgdGV4dD1cXFwie3sgdGV4dEVycm9yIH19XFxcIlxcbiAgICAgICAgY2xhc3M9XFxcInRleHQtZXJyb3JcXFwiXFxuICAgICAgPjwvbGFiZWw+XFxuICAgICAgPEZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8QnV0dG9uXFxuICAgICAgICAgIGNsYXNzPVxcXCJkaWFsb2ctYWRkLWJ1dHRvblxcXCJcXG4gICAgICAgICAgdGV4dD1cXFwie3sgYWRkQnV0dG9uVGV4dCB9fVxcXCJcXG4gICAgICAgICAgKHRhcCk9XFxcImFkZE9yVXBkYXRlUG9zdCgpXFxcIlxcbiAgICAgICAgPjwvQnV0dG9uPlxcbiAgICAgICAgPEJ1dHRvblxcbiAgICAgICAgICBjbGFzcz1cXFwiZGlhbG9nLWNhbmNlbC1idXR0b25cXFwiXFxuICAgICAgICAgIHRleHQ9XFxcIkNhbmNlbFxcXCJcXG4gICAgICAgICAgKHRhcCk9XFxcImNsb3NlRGlhbG9nKClcXFwiXFxuICAgICAgICA+PC9CdXR0b24+XFxuICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9BYnNvbHV0ZUxheW91dD5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcbmltcG9ydCAqIGFzIEZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkJvZHlcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9ib2R5LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9ib2R5LmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb3RlY3RlZCBzZWxlY3RlZDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgZGF0YSA9IFtdO1xuICBwcm90ZWN0ZWQgZGlhbG9nT3BlbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgdGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gIHByb3RlY3RlZCBkZXNjcmlwdGlvbjogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIHByaWNlOiBzdHJpbmcgPSBcIlwiO1xuICBwcm90ZWN0ZWQgc3VtUG9zdHM6IG51bWJlciA9IDA7XG4gIHByb3RlY3RlZCBhZGRMYWJlbFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gIHByb3RlY3RlZCBhZGRCdXR0b25UZXh0OiBzdHJpbmcgPSBcIlwiO1xuICBwcm90ZWN0ZWQgdGV4dEVycm9yOiBzdHJpbmcgPSBcIlwiO1xuICBwcm90ZWN0ZWQgdGV4dEVycm9yVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gIHByb3RlY3RlZCBhbHBoYTogbnVtYmVyID0gMDtcblxuICBzaG93RGlhbG9nKGF1eDogbnVtYmVyKSB7XG4gICAgaWYgKGF1eCA9PSAwKSB7XG4gICAgICB0aGlzLmFscGhhID0gMDtcbiAgICAgIHRoaXMuYWRkQnV0dG9uVGV4dCA9IFwiQWRkXCI7XG4gICAgICB0aGlzLmFkZExhYmVsVGV4dCA9IFwiSG93IGNhbiB5b3UgbWFrZSB0aGUgcG9zdCBhdHRyYWN0aXZlID9cIjtcblxuICAgICAgdGhpcy50aXRsZSA9IFwiXCI7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICAgIHRoaXMucHJpY2UgPSBcIlwiO1xuICAgICAgdGhpcy5kaWFsb2dPcGVuID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbHBoYSA9IDE7XG4gICAgICB0aGlzLmFkZEJ1dHRvblRleHQgPSBcIlVwZGF0ZVwiO1xuICAgICAgdGhpcy5hZGRMYWJlbFRleHQgPVxuICAgICAgICBcIkhvdyBjYW4geW91IG1ha2UgdGhlIHBvc3QgbW9yZSBhdHRyYWN0aXZlIGFmdGVyIHVwZGF0ZXMgP1wiO1xuICAgICAgbGV0IHJhZExpc3RWaWV3ID0gPFJhZExpc3RWaWV3PihcbiAgICAgICAgRnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKFwicmFkbGlzdHZpZXdcIilcbiAgICAgICk7XG4gICAgICB0aGlzLnRpdGxlID0gcmFkTGlzdFZpZXcuaXRlbXNbdGhpcy5zZWxlY3RlZF0ubmFtZTtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSByYWRMaXN0Vmlldy5pdGVtc1t0aGlzLnNlbGVjdGVkXS5kZXNjO1xuICAgICAgdGhpcy5wcmljZSA9IHJhZExpc3RWaWV3Lml0ZW1zW3RoaXMuc2VsZWN0ZWRdLnByaWNlO1xuICAgICAgdGhpcy5kaWFsb2dPcGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2dPcGVuID0gZmFsc2U7XG4gIH1cbiAgb25JdGVtTG9hZGluZyhhcmdzKSB7XG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICB2YXIgbmV3Y29sb3IgPSBuZXcgQ29sb3IoXCIjZTZlNmU2XCIpO1xuICAgICAgYXJncy5pb3MuYmFja2dyb3VuZFZpZXcuYmFja2dyb3VuZENvbG9yID0gbmV3Y29sb3IuaW9zO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZmV0Y2hQb3N0cygpO1xuICB9XG4gIG9uRGVsZXRlKCkge1xuICAgIGRpYWxvZ3NcbiAgICAgIC5jb25maXJtKHtcbiAgICAgICAgdGl0bGU6IFwiRGVsZXRlIHBvc3RcIixcbiAgICAgICAgbWVzc2FnZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcG9zdCA/XCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGxldCByYWRMaXN0VmlldyA9IDxSYWRMaXN0Vmlldz4oXG4gICAgICAgICAgICBGcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoXCJyYWRsaXN0dmlld1wiKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5kYXRhLnNwbGljZSh0aGlzLnNlbGVjdGVkLCAxKTtcbiAgICAgICAgICByYWRMaXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG4gICAgICAgICAgZmV0Y2goXG4gICAgICAgICAgICBcImh0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2hvdXNzZW1mYWRobGkvd2hhdGV2ZXJhcHAvcG9zdHMvXCIgK1xuICAgICAgICAgICAgICByYWRMaXN0Vmlldy5pdGVtcy5wb3N0SWQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIHB1YmxpYyBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoYXJnczogYW55KSB7XG4gICAgdmFyIHJhZExpc3RWaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRhdGEucHVzaCgpO1xuICAgICAgcmFkTGlzdFZpZXcubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuICBwdWJsaWMgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IDUwICogVXRpbHMubGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XG4gICAgc3dpcGVMaW1pdHMubGVmdCA9IDEwMCAqIFV0aWxzLmxheW91dC5nZXREaXNwbGF5RGVuc2l0eSgpO1xuICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gMTAwICogVXRpbHMubGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGFyZ3MuaW5kZXg7XG4gIH1cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG4gIGZldGNoUG9zdHMoKTogdm9pZCB7XG4gICAgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2hvdXNzZW1mYWRobGkvd2hhdGV2ZXJhcHAvcG9zdHMvXCJcbiAgICApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5kYXRhLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogcltpXS5uYW1lLFxuICAgICAgICAgICAgcG9zdElkOiByW2ldLmlkLFxuICAgICAgICAgICAgZGVzYzogcltpXS5kZXNjLFxuICAgICAgICAgICAgcHJpY2U6IHJbaV0ucHJpY2UgKyBcIiBEVFwiLFxuICAgICAgICAgICAgaW1hZ2VTcmM6IHJbaV0uaW1hZ2VTcmMsXG4gICAgICAgICAgICBieVVzZXJuYW1lOiBcIlwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdW1Qb3N0cyA9IHIubGVuZ3RoO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbiAgYWRkT3JVcGRhdGVQb3N0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoZWNrRXJyb3JzKCkpIHtcbiAgICAgIGlmICh0aGlzLmFscGhhID09IDApIHtcbiAgICAgICAgZmV0Y2goXG4gICAgICAgICAgXCJodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbS9ob3Vzc2VtZmFkaGxpL3doYXRldmVyYXBwL3Bvc3RzL1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIG5hbWU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgIGlkOiAodGhpcy5zdW1Qb3N0cyArIDEpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIGRlc2M6IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLFxuICAgICAgICAgICAgICBpbWFnZVNyYzogXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ2LzE0NjgxNy5zdmdcIixcbiAgICAgICAgICAgICAgYnlVc2VybmFtZTogYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibG9jYWxVc2VybmFtZVwiKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgIC50aGVuKGpzb24gPT4gY29uc29sZS5sb2coanNvbikpO1xuICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZXRjaChcbiAgICAgICAgICBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9cIiArIHRoaXMuc2VsZWN0ZWQgKyAxLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2UsXG4gICAgICAgICAgICAgIGRlc2M6IHRoaXMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbihqc29uID0+IGNvbnNvbGUubG9nKGpzb24pKTtcbiAgICAgICAgbGV0IHJhZExpc3RWaWV3ID0gPFJhZExpc3RWaWV3PihcbiAgICAgICAgICBGcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoXCJyYWRsaXN0dmlld1wiKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNoZWNrRXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHRoaXMudGl0bGUudHJpbSgpLmxlbmd0aCA9PSAwICYmXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uLnRyaW0oKS5sZW5ndGggPT0gMCAmJlxuICAgICAgdGhpcy5wcmljZS50cmltKCkubGVuZ3RoID09IDBcbiAgICApIHtcbiAgICAgIHRoaXMudGV4dEVycm9yVmFsdWUgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMudGV4dEVycm9yID0gXCJUaXRsZSwgZGVzY3JpcHRpb24gYW5kIHByaWNlIGNhbm5vdCBiZSBlbXB0eVwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy50aXRsZS50cmltKCkubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMudGV4dEVycm9yVmFsdWUgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMudGV4dEVycm9yID0gXCJUaXRsZSBjYW5ub3QgYmUgZW1wdHlcIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVzY3JpcHRpb24udHJpbSgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnRleHRFcnJvclZhbHVlID0gXCJ2aXNpYmxlXCI7XG4gICAgICB0aGlzLnRleHRFcnJvciA9IFwiRGVzY3JpcHRpb24gY2Fubm90IGJlIGVtcHR5XCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnByaWNlLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy50ZXh0RXJyb3JWYWx1ZSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy50ZXh0RXJyb3IgPSBcIlByaWNlIGNhbm5vdCBiZSBlbXB0eVwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnRleHRFcnJvclZhbHVlID0gXCJcIjtcbiAgICB0aGlzLnRleHRFcnJvciA9IFwiXCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnByb2ZpbGUtcGljIHtcXG4gIHdpZHRoOiAxMzA7XFxuICBoZWlnaHQ6IDEzMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDtcXG4gIG1hcmdpbjogMzIgMzIgMTYgMzI7XFxufVxcbi5wcm9maWxlLXRpdGxlIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zaXplOiAxOTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYWRkaXRpb25hbC1pbmZvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE1O1xcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcXG4gIHBhZGRpbmc6IDE4O1xcbiAgbGluZS1oZWlnaHQ6IDE4O1xcbiAgbWFyZ2luLXRvcDogMjA7XFxuICB3aWR0aDogODUlO1xcbn1cXG4uaWNvbi1hZGl0aW9uYWwtaW5mbyB7XFxuICBmb250LXNpemU6IDE2O1xcbiAgY29sb3I6ICM1NTdhYWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMjtcXG59XFxuLmRlc2NyaXB0aW9uLWFkaXRpb25hbC1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMTU7XFxuICBjb2xvcjogIzAwMDtcXG4gIG1hcmdpbi1sZWZ0OiA4O1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByb2ZpbGUtcG9zdHMtbnVtYmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxNTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zaXplOiAxOTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJ3aGF0ZXZlcmFwcFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgPEFjdGlvbkl0ZW0+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICA8QnV0dG9uXFxuICAgICAgICBjbGFzcz1cXFwiZmFcXFwiXFxuICAgICAgICB0ZXh0PVxcXCImI3hmMGM5O1xcXCJcXG4gICAgICAgIGZvbnRTaXplPVxcXCIyMFxcXCJcXG4gICAgICAgICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgID48L0J1dHRvbj5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvQWN0aW9uSXRlbT5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dCBjbGFzcz1cXFwiYW5pbWF0ZS1mYWRlSW5VcC1kZWxheS0wbXNcXFwiPlxcbiAgPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0bywgYXV0byxhdXRvXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG4gICAgICA8SW1hZ2VcXG4gICAgICAgIHJvdz1cXFwiMFxcXCJcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIHNyYz1cXFwifi9pbWFnZXMvZGVmYXVsdC1wcm9maWxlLXBpYy5wbmdcXFwiXFxuICAgICAgICBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcInByb2ZpbGUtcGljXFxcIlxcbiAgICAgID48L0ltYWdlPlxcbiAgICAgIDxMYWJlbFxcbiAgICAgICAgcm93PVxcXCIxXFxcIlxcbiAgICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgdGV4dD1cXFwie3sgdXNlcm5hbWVsYWJlbCB9fVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJwcm9maWxlLXRpdGxlXFxcIlxcbiAgICAgICAgdGV4dEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICAgID48L0xhYmVsPlxcbiAgICAgIDxHcmlkTGF5b3V0XFxuICAgICAgICByb3c9XFxcIjJcXFwiXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIlxcbiAgICAgICAgY29sdW1ucz1cXFwiYXV0bywgYXV0b1xcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJhZGRpdGlvbmFsLWluZm9cXFwiXFxuICAgICAgPlxcbiAgICAgICAgPExhYmVsXFxuICAgICAgICAgIHJvdz1cXFwiMFxcXCJcXG4gICAgICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgICB0ZXh0PVxcXCImI3hmMDQxO1xcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcImZhIGljb24tYWRpdGlvbmFsLWluZm9cXFwiXFxuICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbFxcbiAgICAgICAgICByb3c9XFxcIjBcXFwiXFxuICAgICAgICAgIGNvbD1cXFwiMVxcXCJcXG4gICAgICAgICAgdGV4dD1cXFwie3sgJycgKyB1c2VybmFtZUFkZHJlc3MgfX1cXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJmYSBkZXNjcmlwdGlvbi1hZGl0aW9uYWwtaW5mb1xcXCJcXG4gICAgICAgID48L0xhYmVsPlxcbiAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8TGFiZWxcXG4gICAgICAgIHJvdz1cXFwiM1xcXCJcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIHRleHQ9XFxcInt7IHVzZXJuYW1lUG9zdHNOdW1iZXIgfX1cXFwiXFxuICAgICAgICBjbGFzcz1cXFwicHJvZmlsZS1wb3N0cy1udW1iZXJcXFwiXFxuICAgICAgICB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgPjwvTGFiZWw+XFxuICAgICAgPExhYmVsXFxuICAgICAgICByb3c9XFxcIjRcXFwiXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICBmb250LXNpemU9XFxcIjEzXFxcIlxcbiAgICAgICAgdGV4dD1cXFwiUG9zdHNcXFwiXFxuICAgICAgICB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgPjwvTGFiZWw+XFxuICAgIDwvR3JpZExheW91dD5cXG4gIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJQcm9maWxlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcHJvZmlsZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcHJvZmlsZS5jb21wb25lbnQuY3NzXCJdLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm90ZWN0ZWQgdXNlcm5hbWVBZGRyZXNzID0gXCJcIjtcbiAgcHJvdGVjdGVkIHVzZXJuYW1lbGFiZWw6IHN0cmluZyA9IFwiXCI7XG4gIHByb3RlY3RlZCB1c2VybmFtZVBvc3RzTnVtYmVyOiBzdHJpbmcgPSBcIjBcIjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGdldExvY2F0aW9uKCk6IHZvaWQge1xuICAgIGdlb2xvY2F0aW9uXG4gICAgICAuZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxuICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxuICAgICAgICB0aW1lb3V0OiAyMDAwMFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vIGdldCB0aGUgYWRkcmVzcyAoUkVRVUlSRVMgWU9VUiBPV04gR09PR0xFIE1BUCBBUEkgS0VZISlcbiAgICAgICAgZmV0Y2goXG4gICAgICAgICAgXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2xhdGxuZz1cIiArXG4gICAgICAgICAgICByZXMubGF0aXR1ZGUgK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgcmVzLmxvbmdpdHVkZSArXG4gICAgICAgICAgICBcIiZrZXk9QUl6YVN5REE4Nnk3M3pDOUZvMDRWb0xmOXlfYU14NU9IRVp2VG1ZXCJcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbihyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgICAgICAgICAgdGhpcy51c2VybmFtZUFkZHJlc3MgPSBcIlNlYXJjaGluZyBmb3IgbG9jYXRpb24uLi5cIjtcbiAgICAgICAgICAgIGlmIChyLnJlc3VsdHNbMF0pIHtcbiAgICAgICAgICAgICAgdGhpcy51c2VybmFtZUFkZHJlc3MgPSByLnJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmV0Y2hQb3N0c051bWJlcigpO1xuICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcbiAgICB0aGlzLnVzZXJuYW1lbGFiZWwgPSBhcHBTZXR0aW5nc1xuICAgICAgLmdldFN0cmluZyhcImxvY2FsVXNlcm5hbWVcIilcbiAgICAgIC50b0xvY2FsZVVwcGVyQ2FzZSgpO1xuICB9XG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuICBmZXRjaFBvc3RzTnVtYmVyKCk6IHZvaWQge1xuICAgIGZldGNoKFxuICAgICAgXCJodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbS9ob3Vzc2VtZmFkaGxpL3doYXRldmVyYXBwL3Bvc3RzL1wiXG4gICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgIHZhciBrOiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAocltpXS5ieVVzZXJuYW1lID09IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImxvY2FsVXNlcm5hbWVcIikpIHtcbiAgICAgICAgICAgIGsrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51c2VybmFtZVBvc3RzTnVtYmVyID0gay50b1N0cmluZygpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIG1hcmdpbjogMTU7XFxufVxcbi5yZWdpc3Rlci1sb2dvIHtcXG4gIG1hcmdpbjogMTU7XFxuICBoZWlnaHQ6IDkwO1xcbn1cXG4udGV4dC1maWVsZCB7XFxuICBwYWRkaW5nOiAxNTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjU7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcbn1cXG4uc2lnbi11cC1idXR0b24ge1xcbiAgcGFkZGluZzogMTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2O1xcbiAgYm9yZGVyLXdpZHRoOiAwLjU7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbn1cXG4udG8tc2lnbi1pbi1zY3JlZW4ge1xcbiAgcGFkZGluZzogMTU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuLnRleHQtZXJyb3Ige1xcbiAgY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFNjcm9sbFZpZXc+XFxuICA8U3RhY2tMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgIDxJbWFnZSBjbGFzcz1cXFwicmVnaXN0ZXItbG9nb1xcXCIgc3JjPVxcXCJ+L2ltYWdlcy9yZWdpc3Rlci1sb2dvLnBuZ1xcXCI+PC9JbWFnZT5cXG4gICAgPFRleHRGaWVsZFxcbiAgICAgIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIlxcbiAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VybmFtZVxcXCJcXG4gICAgICBoaW50PVxcXCJVc2VybmFtZVxcXCJcXG4gICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQodHJ1ZSlcXFwiXFxuICAgID5cXG4gICAgPC9UZXh0RmllbGQ+XFxuICAgIDxUZXh0RmllbGRcXG4gICAgICAjcGFzc3dvcmRJZFxcbiAgICAgIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIlxcbiAgICAgIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICBoaW50PVxcXCJQYXNzd29yZFxcXCJcXG4gICAgICBzZWN1cmU9XFxcInRydWVcXFwiXFxuICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXG4gICAgICAocmV0dXJuUHJlc3MpPVxcXCJmb2N1c1Bhc3N3b3JkKGZhbHNlKVxcXCJcXG4gICAgPlxcbiAgICA8L1RleHRGaWVsZD5cXG4gICAgPFRleHRGaWVsZFxcbiAgICAgICNzZWNvbmRQYXNzd29yZElkXFxuICAgICAgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInNlY29uZHBhc3N3b3JkXFxcIlxcbiAgICAgIGhpbnQ9XFxcIkNvbmZpcm0gcGFzc3dvcmRcXFwiXFxuICAgICAgc2VjdXJlPVxcXCJ0cnVlXFxcIlxcbiAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxuICAgID5cXG4gICAgPC9UZXh0RmllbGQ+XFxuICAgIDxsYWJlbFxcbiAgICAgIHZpc2liaWxpdHk9XFxcInt7IHRleHRFcnJvclZhbHVlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCcgfX1cXFwiXFxuICAgICAgdGV4dD1cXFwie3sgdGV4dEVycm9yIH19XFxcIlxcbiAgICAgIGNsYXNzPVxcXCJ0ZXh0LWVycm9yXFxcIlxcbiAgICA+PC9sYWJlbD5cXG4gICAgPEJ1dHRvbiBjbGFzcz1cXFwic2lnbi11cC1idXR0b25cXFwiIHRleHQ9XFxcIlNpZ24gdXBcXFwiICh0YXApPVxcXCJvblNpZ25VcCgpXFxcIj4gPC9CdXR0b24+XFxuICAgIDxsYWJlbFxcbiAgICAgIGNsYXNzPVxcXCJ0by1zaWduLWluLXNjcmVlblxcXCJcXG4gICAgICB0ZXh0PVxcXCJBbHJlYWR5IHNpZ24gdXAgPyBzaWduIGluLlxcXCJcXG4gICAgICAodGFwKT1cXFwidG9TaWduSW5TY3JlZW4oKVxcXCJcXG4gICAgPlxcbiAgICA8L2xhYmVsPlxcbiAgPC9TdGFja0xheW91dD5cXG48L1Njcm9sbFZpZXc+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIlJlZ2lzdGVyXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwicGFzc3dvcmRJZFwiLCB7IHN0YXRpYzogZmFsc2UgfSkgcGFzc3dvcmRJZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInNlY29uZFBhc3N3b3JkSWRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHNlY29uZFBhc3N3b3JkSWQ6IEVsZW1lbnRSZWY7XG4gIHByb3RlY3RlZCB1c2VybmFtZTogc3RyaW5nID0gXCJcIjtcbiAgcHJvdGVjdGVkIHBhc3N3b3JkOiBzdHJpbmcgPSBcIlwiO1xuICBwcm90ZWN0ZWQgc2Vjb25kcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XG4gIHByb3RlY3RlZCB0ZXh0RXJyb3I6IHN0cmluZyA9IFwiXCI7XG4gIHByb3RlY3RlZCB0ZXh0RXJyb3JWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgb25TaWduVXAoKTogdm9pZCB7XG4gICAgdGhpcy5mZXRjaFVzZXJzKCk7XG4gIH1cbiAgY2hlY2tFcnJvcnMoYXV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoYXV4ID4gMCkge1xuICAgICAgdGhpcy50ZXh0RXJyb3JWYWx1ZSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy50ZXh0RXJyb3IgPSBcIlVzZXJuYW1lIGFscmVhZHkgdGFrZW5cIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy51c2VybmFtZS50cmltKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIHRoaXMucGFzc3dvcmQudHJpbSgpLmxlbmd0aCA9PSAwICYmXG4gICAgICB0aGlzLnNlY29uZHBhc3N3b3JkLnRyaW0oKS5sZW5ndGggPT0gMFxuICAgICkge1xuICAgICAgdGhpcy50ZXh0RXJyb3JWYWx1ZSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy50ZXh0RXJyb3IgPSBcIlVzZXJuYW1lLCBwYXNzd29yZCBhbmQgc2Vjb25kIHBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eVwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy51c2VybmFtZS50cmltKCkubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMudGV4dEVycm9yVmFsdWUgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMudGV4dEVycm9yID0gXCJVc2VybmFtZSBjYW5ub3QgYmUgZW1wdHlcIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFzc3dvcmQudHJpbSgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnRleHRFcnJvclZhbHVlID0gXCJ2aXNpYmxlXCI7XG4gICAgICB0aGlzLnRleHRFcnJvciA9IFwiUGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5XCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlY29uZHBhc3N3b3JkLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy50ZXh0RXJyb3JWYWx1ZSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy50ZXh0RXJyb3IgPSBcIlNlY29uZCBwYXNzd29yZCBjYW5ub3QgYmUgZW1wdHlcIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFzc3dvcmQudHJpbSgpICE9IHRoaXMuc2Vjb25kcGFzc3dvcmQudHJpbSgpKSB7XG4gICAgICB0aGlzLnRleHRFcnJvclZhbHVlID0gXCJ2aXNpYmxlXCI7XG4gICAgICB0aGlzLnRleHRFcnJvciA9IFwiUGFzc3dvcmQgZG9lcyBub3QgbWF0Y2hcIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy50ZXh0RXJyb3JWYWx1ZSA9IFwiXCI7XG4gICAgdGhpcy50ZXh0RXJyb3IgPSBcIlwiO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRvU2lnbkluU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cbiAgZm9jdXNQYXNzd29yZChidHc6IGJvb2xlYW4pIHtcbiAgICBpZiAoYnR3KSB7XG4gICAgICB0aGlzLnBhc3N3b3JkSWQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlY29uZFBhc3N3b3JkSWQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgYWRkVXNlcigpOiB2b2lkIHtcbiAgICBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vaG91c3NlbWZhZGhsaS93aGF0ZXZlcmFwcC91c2Vycy9cIixcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4gY29uc29sZS5sb2coanNvbikpO1xuICB9XG4gIGZldGNoVXNlcnMoKTogdm9pZCB7XG4gICAgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2hvdXNzZW1mYWRobGkvd2hhdGV2ZXJhcHAvdXNlcnMvXCJcbiAgICApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyID0+IHtcbiAgICAgICAgdmFyIGs6IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnVzZXJuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09IHJbaV0pIHtcbiAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVc2Vyc0RldGFpbHMoayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tVc2Vyc0RldGFpbHMoayk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuICBjaGVja1VzZXJzRGV0YWlscyhhdXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoZWNrRXJyb3JzKGF1eCkpIHtcbiAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcbiAgICAgICAgXCJsb2NhbFVzZXJuYW1lXCIsXG4gICAgICAgIHRoaXMudXNlcm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXG4gICAgICAgIFwibG9jYWxQYXNzd29yZFwiLFxuICAgICAgICB0aGlzLnBhc3N3b3JkLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ib2R5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==