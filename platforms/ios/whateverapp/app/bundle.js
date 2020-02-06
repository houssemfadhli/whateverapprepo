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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/register.component.ts");
/* harmony import */ var _home_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/body.component.ts");
/* harmony import */ var _home_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/profile.component.ts");





var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "register", component: _home_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: "body", component: _home_body_component__WEBPACK_IMPORTED_MODULE_3__["BodyComponent"] },
    { path: "profile", component: _home_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: "home", loadChildren: function () { return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "./home/home.module.ts")).then(function (m) { return m.HomeModule; }); } }
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

module.exports = "<!--\nRadSideDrawer is a UI component part of the Progress NativeScript UI set of components.\nLearn more about the RadSideDrawer UI component and how it can be customized in this documentation article:\nhttp://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/getting-started\n-->\n<RadSideDrawer [drawerTransition]=\"sideDrawerTransition\">\n    <GridLayout tkDrawerContent rows=\"auto, *\"\n        class=\"sidedrawer sidedrawer-left\">\n        <StackLayout row=\"0\" class=\"sidedrawer-header\">\n            <Label horizontalAlignment=\"center\"\n                class=\"sidedrawer-header-image fa\" text=\"&#xf2bd;\"></Label>\n            <Label horizontalAlignment=\"center\" text=\"{{ usernamelabel }}\"\n                class=\"sidedrawer-header-brand\"></Label>\n        </StackLayout>\n\n        <ScrollView row=\"1\">\n            <StackLayout class=\"sidedrawer-content\">\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n                    <Label col=\"0\" text=\"&#xf015;\" class=\"fa\"></Label>\n                    <Label col=\"1\" text=\"Home\" (tap)=\"toHome()\" class=\"p-r-10\"></Label>\n                </GridLayout>\n\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n                    <Label col=\"0\" text=\"&#xf007;\" class=\"fa\"></Label>\n                    <Label (tap)=\"toProfile()\" col=\"1\" text=\"Profile\"\n                        class=\"p-r-10\"></Label>\n                </GridLayout>\n\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n                    <Label col=\"0\" text=\"&#xf005;\" class=\"fa\"></Label>\n                    <Label col=\"1\" text=\"Featured\" class=\"p-r-10\"></Label>\n                </GridLayout>\n\n                <StackLayout class=\"hr-light\"></StackLayout>\n\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n                    <Label col=\"0\" text=\"&#xf023;\" class=\"fa\"></Label>\n                    <Label (tap)=\"toLogOut()\" col=\"1\" text=\"Logout\"\n                        class=\"p-r-10\"></Label>\n                </GridLayout>\n            </StackLayout>\n        </ScrollView>\n    </GridLayout>\n    <page-router-outlet tkMainContent class=\"page page-content\">\n    </page-router-outlet>\n</RadSideDrawer>"

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-ui-sidedrawer");
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(application_settings__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        if (application_settings__WEBPACK_IMPORTED_MODULE_4__["hasKey"]("lusername2")) {
            this.routerExtensions.navigate(["/body"], { clearHistory: true });
            this.usernamelabel = application_settings__WEBPACK_IMPORTED_MODULE_4__["getString"]("lusername2");
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
    AppComponent.prototype.toLogOut = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
        application_settings__WEBPACK_IMPORTED_MODULE_4__["remove"]("lusername2");
        application_settings__WEBPACK_IMPORTED_MODULE_4__["remove"]("lpassword2");
    };
    AppComponent.prototype.toProfile = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
        this.routerExtensions.navigate(["/profile"], { clearHistory: true });
    };
    AppComponent.prototype.toHome = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
        this.routerExtensions.navigate(["/body"], { clearHistory: true });
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
global.registerModule("nativescript-theme-core/css/core.dark.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.dark.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"import","import":"\"~nativescript-theme-core/css/core.dark.css\""},{"type":"rule","selectors":[".fa"],"declarations":[{"type":"declaration","property":"font-family","value":"\"FontAwesome\""}]},{"type":"rule","selectors":[".action-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".page-content .page-placeholder"],"declarations":[{"type":"declaration","property":"color","value":"#d7d7d7"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"horizontal-align","value":"center"}]},{"type":"rule","selectors":[".page-content .page-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"72"},{"type":"declaration","property":"vertical-align","value":"top"},{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"color","value":"#d7d7d7"},{"type":"declaration","property":"margin-top","value":"20%"}]},{"type":"rule","selectors":[".sidedrawer"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"-100"}]},{"type":"rule","selectors":[".sidedrawer-list-item-icon",".sidedrawer-list-item"],"declarations":[{"type":"declaration","property":"color","value":"#022734"}]},{"type":"rule","selectors":[".sidedrawer.sidedrawer-left"],"declarations":[{"type":"declaration","property":"background-color","value":"#3a53ff"}]},{"type":"rule","selectors":[".sidedrawer.sidedrawer-left .sidedrawer-header-image"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"height","value":"60"},{"type":"declaration","property":"width","value":"60"},{"type":"declaration","property":"font-size","value":"60"},{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-top","value":"20"}]},{"type":"rule","selectors":[".sidedrawer.sidedrawer-left .footnote"],"declarations":[{"type":"declaration","property":"color","value":"rgba(255, 255, 255, 0.5)"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-header"],"declarations":[{"type":"declaration","property":"background-color","value":"slategrey"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-header .sidedrawer-header-brand"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item"],"declarations":[{"type":"declaration","property":"padding-left","value":"15"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item label"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"color","value":"#022734"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item .fa"],"declarations":[{"type":"declaration","property":"width","value":"20"},{"type":"declaration","property":"margin-right","value":"10"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item.selected"],"declarations":[{"type":"declaration","property":"background-color","value":"#f8f8f8"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item.selected label"],"declarations":[{"type":"declaration","property":"color","value":"#3a53ff"}]}],"parsingErrors":[]}};;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-ui-sidedrawer/angular");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _home_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./home/register.component.ts");
/* harmony import */ var _home_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./home/body.component.ts");
/* harmony import */ var _home_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./home/profile.component.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nativescript-ui-listview/angular");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__);











var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIListViewModule"],
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptUISideDrawerModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _home_body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"],
                _home_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ],
            providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./home/body.component.css":
/***/ (function(module, exports) {

module.exports = ".item-name {\r\n  color: #303c47;\r\n  font-family: \"Open Sans\", \"OpenSans-Bold\";\r\n  font-weight: bold;\r\n  padding: 2;\r\n}\r\n.add-button-container {\r\n  margin-top: 85%;\r\n  margin-left: 75%;\r\n}\r\n.item-desc {\r\n  color: #303c47;\r\n  font-family: \"Open Sans\", \"OpenSans-Regular\";\r\n  padding: 2;\r\n}\r\n\r\n.item-price {\r\n  color: #c40404;\r\n  font-family: \"Open Sans\", \"OpenSans-Bold\";\r\n  font-weight: bold;\r\n  padding: 2;\r\n}\r\n.add-button {\r\n  background-color: black;\r\n  width: 70;\r\n  height: 70;\r\n  font-size: 50;\r\n  padding: 0 0 8;\r\n  border-radius: 50%;\r\n  color: white;\r\n  margin-right: 15;\r\n}\r\n.sideStackLayout {\r\n  color: #ffffff;\r\n}\r\n\r\n.sideTitleStackLayout {\r\n  padding: 16;\r\n  font-weight: bold;\r\n}\r\n\r\n.sideLabel {\r\n  padding: 16;\r\n}\r\n\r\n.listItemStackLayout {\r\n  padding: 16;\r\n}\r\n.editViewStackLayout {\r\n  padding: 16;\r\n  width: 50%;\r\n  color: #ffffff;\r\n}\r\n.deleteViewStackLayout {\r\n  padding: 16;\r\n  width: 50%;\r\n  color: #ffffff;\r\n}\r\n"

/***/ }),

/***/ "./home/body.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"WhateverApp\" class=\"action-bar\">\n  <ActionItem>\n    <StackLayout>\n      <Button\n        class=\"fa\"\n        text=\"&#xf0c9;\"\n        fontSize=\"20\"\n        (tap)=\"onDrawerButtonTap()\"\n      ></Button>\n    </StackLayout>\n  </ActionItem>\n</ActionBar>\n<StackLayout orientation=\"vertical\" class=\"page page-content\" tkMainContent>\n  <GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView\n      [items]=\"data\"\n      id=\"radlistview\"\n      itemSwipe=\"true\"\n      (pullToRefreshInitiated)=\"onPullToRefreshInitiated($event)\"\n      (itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\"\n      backgroundColor=\"#e6e6e6\"\n      (itemLoading)=\"onItemLoading($event)\"\n    >\n      <ListViewStaggeredLayout\n        tkListViewLayout\n        scrollDirection=\"Vertical\"\n        spanCount=\"1\"\n      >\n      </ListViewStaggeredLayout>\n      <ng-template tkListItemTemplate let-item=\"item\">\n        <DockLayout borderRadius=\"2\">\n          <Image\n            src=\"{{ item.imageSrc }}\"\n            width=\"200\"\n            height=\"120\"\n            stretch=\"aspectFill\"\n          ></Image>\n          <StackLayout backgroundColor=\"white\">\n            <Label\n              text=\"{{ item.name }}\"\n              class=\"item-name\"\n              textWrap=\"true\"\n            ></Label>\n            <Label\n              text=\"{{ item.desc }}\"\n              class=\"item-desc\"\n              textWrap=\"true\"\n            ></Label>\n            <Label text=\"{{ item.price }}\" class=\"item-price\"> </Label>\n          </StackLayout>\n        </DockLayout>\n      </ng-template>\n      <GridLayout\n        *tkListItemSwipeTemplate\n        columns=\"auto, *, auto\"\n        class=\"listItemSwipeGridLayout\"\n      >\n        <StackLayout class=\"editViewStackLayout\" col=\"0\" (tap)=\"onEdit()\">\n          <Label\n            text=\"EDIT\"\n            verticalAlignment=\"center\"\n            horizontalAlignment=\"left\"\n          ></Label>\n        </StackLayout>\n        <StackLayout class=\"deleteViewStackLayout\" col=\"2\" (tap)=\"onDelete()\">\n          <Label\n            text=\"DELETE\"\n            verticalAlignment=\"center\"\n            horizontalAlignment=\"center\"\n          ></Label>\n        </StackLayout>\n      </GridLayout>\n    </RadListView>\n    <StackLayout class=\"add-button-container\">\n      <Button class=\"add-button\" text=\"+\" (tap)=\"addPost()\"> </Button>\n    </StackLayout>\n  </GridLayout>\n</StackLayout>\n"

/***/ }),

/***/ "./home/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/platform");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/color/color.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(utils_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ui_frame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
/* harmony import */ var ui_frame__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ui_frame__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__);







var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
        this.dialogOpen = false;
        this.data = [];
        // Use the component constructor to inject providers.
    }
    BodyComponent.prototype.onItemLoading = function (args) {
        // hack to get around issue with RadListView ios background colors: https://github.com/telerik/nativescript-ui-feedback/issues/196
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__["isIOS"]) {
            var newcolor = new color__WEBPACK_IMPORTED_MODULE_3__["Color"]("#e6e6e6");
            args.ios.backgroundView.backgroundColor = newcolor.ios;
        }
    };
    BodyComponent.prototype.ngOnInit = function () {
        this.displayPosts();
        // Init your component properties here.
    };
    BodyComponent.prototype.onEdit = function () {
    };
    BodyComponent.prototype.onDelete = function () {
        var _this = this;
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["confirm"]("Do you really want to delete this post ?").then(function (result) {
            if (result) {
                var radListView = ui_frame__WEBPACK_IMPORTED_MODULE_5__["topmost"]().currentPage.getViewById("radlistview");
                _this.data.splice(_this.selected, 1);
                radListView.notifySwipeToExecuteFinished();
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
        swipeLimits.threshold = 60 * utils_utils__WEBPACK_IMPORTED_MODULE_4__["layout"].getDisplayDensity();
        swipeLimits.left = 120 * utils_utils__WEBPACK_IMPORTED_MODULE_4__["layout"].getDisplayDensity();
        swipeLimits.right = 120 * utils_utils__WEBPACK_IMPORTED_MODULE_4__["layout"].getDisplayDensity();
        this.selected = args.index;
    };
    BodyComponent.prototype.addPost = function () {
        this.dialogOpen = true;
    };
    BodyComponent.prototype.closeDialog = function () {
        this.dialogOpen = false;
    };
    BodyComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    BodyComponent.prototype.displayPosts = function () {
        var _this = this;
        fetch("https://my-json-server.typicode.com/houssemfadhli/whateverApp/posts/")
            .then(function (response) { return response.json(); })
            .then(function (r) {
            for (var i = 0; i < Number(r[0].size); i++) {
                _this.data.push({ name: r[i].name, desc: r[i].desc, price: r[i].price, imageSrc: r[i].imageSrc });
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Body",
            template: __importDefault(__webpack_require__("./home/body.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/body.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./home/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".profile-pic {\n    width: 150;\n    height: 150;\n    border-radius: 100;\n    margin: 32 32 16 32;\n}\n.title-profile {\n    color: #000;\n    font-size: 19;\n    font-weight: bold;\n}\n.listImage {\n    border-width: 1;\n    border-color: #fff;\n}\n\n.additional-info {\n    border-radius: 15;\n    background: #eeeeee;\n    padding: 18;\n    line-height: 18;\n    margin-top: 20;\n    width: 85%;\n}\n\n.icon-aditional-info {\n    font-size: 17;\n    color: #557AAD;\n    text-align: center;\n    padding-top: 2;\n}\n\n.description-aditional-info {\n    font-size: 17;\n    color:#000;\n    margin-left: 8;\n    border-width: 1;\n    border-color: transparent;\n}\n\n.content-followers {\n    padding: 8 0;\n}\n\n.content-photos {\n    background-color: #eeeeee;\n    margin-top: 10;\n}\n\n.followersTxt {\n    text-align: center;\n    font-size: 14;\n    height: 20;\n}\n\n.followersTxtValue {\n    text-align: center;\n    margin-top: 10;\n    height: 25;\n    font-size: 22;\n    font-weight: bold;\n    color: #000;\n}"

/***/ }),

/***/ "./home/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"WhateverApp\" class=\"action-bar\">\n  <ActionItem>\n    <StackLayout>\n      <Button\n        class=\"fa\"\n        text=\"&#xf0c9;\"\n        fontSize=\"20\"\n        (tap)=\"onDrawerButtonTap()\"\n      ></Button>\n    </StackLayout>\n  </ActionItem>\n</ActionBar>\n<GridLayout class=\"animate-fadeInUp-delay-0ms\">\n  <ScrollView orientation=\"vertical\">\n    <GridLayout rows=\"auto, auto, auto, auto,auto\" columns=\"*\">\n      <Image\n        row=\"0\"\n        col=\"0\"\n        src=\"~/images/default-profile-pic.png\"\n        stretch=\"aspectFill\"\n        class=\"profile-pic\"\n      ></Image>\n      <Label\n        row=\"1\"\n        col=\"0\"\n        text=\"{{ usernamelabel }}\"\n        class=\"title-profile\"\n        textAlignment=\"center\"\n      ></Label>\n\n      <GridLayout\n        row=\"2\"\n        col=\"0\"\n        rows=\"auto, auto\"\n        columns=\"auto, auto\"\n        class=\"additional-info\"\n      >\n        <Label\n          row=\"0\"\n          col=\"0\"\n          text=\"&#xf041;\"\n          class=\"fa icon-aditional-info\"\n        ></Label>\n        <Label\n          row=\"0\"\n          col=\"1\"\n          text=\"{{ '' + addr }}\"\n          class=\"fa description-aditional-info\"\n        ></Label>\n      </GridLayout>\n\n      <GridLayout\n        row=\"3\"\n        col=\"0\"\n        rows=\"auto,auto\"\n        columns=\"*,*,*\"\n        class=\"content-followers\"\n      >\n        <Label row=\"0\" col=\"0\" text=\"6\" class=\"followersTxtValue\"> </Label>\n        <Label row=\"1\" col=\"0\" text=\"Posts\" class=\"followersTxt\"> </Label>\n\n        <Label row=\"0\" col=\"1\" text=\"2300\" class=\"followersTxtValue\"> </Label>\n        <Label row=\"1\" col=\"1\" text=\"Followers\" class=\"followersTxt\"> </Label>\n\n        <Label row=\"0\" col=\"2\" text=\"400\" class=\"followersTxtValue\"> </Label>\n        <Label row=\"1\" col=\"2\" text=\"Following\" class=\"followersTxt\"> </Label>\n      </GridLayout>\n\n      <WrapLayout row=\"4\" col=\"0\" alignItems=\"left\" class=\"content-photos\">\n        <Image\n          src=\"~/images/New-York.jpg\"\n          stretch=\"aspectFill\"\n          class=\"listImage\"\n          width=\"33.3%\"\n          decodeHeight=\"120\"\n          height=\"120\"\n          loadMode=\"async\"\n        ></Image>\n        <Image\n          src=\"~/images/ny2.jpg\"\n          stretch=\"aspectFill\"\n          class=\"listImage\"\n          width=\"33.3%\"\n          decodeHeight=\"120\"\n          height=\"120\"\n          loadMode=\"async\"\n        ></Image>\n        <Image\n          src=\"~/images/food.jpg\"\n          stretch=\"aspectFill\"\n          class=\"listImage\"\n          width=\"33.3%\"\n          decodeHeight=\"120\"\n          height=\"120\"\n          loadMode=\"async\"\n        ></Image>\n        <Image\n          src=\"~/images/wedding.jpg\"\n          stretch=\"aspectFill\"\n          class=\"listImage\"\n          width=\"33.3%\"\n          decodeHeight=\"120\"\n          height=\"120\"\n          loadMode=\"async\"\n        ></Image>\n        <Image\n          src=\"~/images/Selfie.jpg\"\n          stretch=\"aspectFill\"\n          class=\"listImage\"\n          width=\"33.3%\"\n          decodeHeight=\"120\"\n          height=\"120\"\n          loadMode=\"async\"\n        ></Image>\n        <Image\n          src=\"~/images/nature.jpg\"\n          stretch=\"aspectFill\"\n          class=\"listImage\"\n          width=\"33.3%\"\n          decodeHeight=\"120\"\n          height=\"120\"\n          loadMode=\"async\"\n        ></Image>\n      </WrapLayout>\n    </GridLayout>\n  </ScrollView>\n</GridLayout>\n"

/***/ }),

/***/ "./home/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_EYE", function() { return ICON_EYE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/utils/utils");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-geolocation");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(application__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(application_settings__WEBPACK_IMPORTED_MODULE_5__);




var ICON_EYE = String.fromCharCode(0xf06e);


var Photo = /** @class */ (function () {
    function Photo(image, title, description) {
        this.image = image;
        this.title = title;
        this.description = description;
    }
    return Photo;
}());
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.photos = [];
        this.iconEye = ICON_EYE;
        this.addr = "";
        this.photos = [
            new Photo("~/images/images.jpg", "Here in Pucalá, Chiclayo Perú", "Hi my friends..."),
            new Photo("~/images/large.jpg", "Here in Chiclayo", 'Hi ....'),
            new Photo("~/images/download_(1).jpg", "Here in Lambayeque", ''),
        ];
    }
    ProfileComponent.prototype.getLocation = function () {
        var _this = this;
        nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__["getCurrentLocation"]({ desiredAccuracy: ui_enums__WEBPACK_IMPORTED_MODULE_3__["Accuracy"].high, maximumAge: 5000, timeout: 20000 })
            .then(function (res) {
            // get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
            fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.latitude + "," + res.longitude + "&key=AIzaSyDA86y73zC9Fo04VoLf9y_aMx5OHEZvTmY")
                .then(function (response) { return response.json(); }).then(function (r) {
                console.log(r);
                if (r.results[0]) {
                    _this.addr = r.results[0].formatted_address;
                }
            });
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getLocation();
        this.usernamelabel = application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("lusername2");
    };
    ProfileComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_4__["getRootView"]();
        sideDrawer.showDrawer();
    };
    ProfileComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index......: " + args.index);
    };
    ProfileComponent.prototype.openUrl = function (url) {
        tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_1__["openUrl"](url);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Profile',
            template: __importDefault(__webpack_require__("./home/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/profile.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./home/register.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n\tvertical-align: center;\n\tfont-size: 20;\n\tmargin: 15;\n}\n.register-logo {\n  margin: 15;\n  height: 90;\n}\n.text-field {\n  padding: 15;\n  background: white;\n  color: black;\n  border-width: 0.5;\n  border-radius: 5;\n  border-color: gray;\n}\n.sign-up-button {\n  padding: 15;\n  background: brown;\n  color: white;\n  font-size: 16;\n  border-width: 0.5;\n  border-radius: 5;\t\n}"

/***/ }),

/***/ "./home/register.component.html":
/***/ (function(module, exports) {

module.exports = "<ScrollView>\n    <StackLayout verticalAlignment=\"center\" padding=\"5\">\n        <Image class=\"register-logo\" src=\"~/images/register-logo.png\"></Image>\n        <TextField class=\"text-field\" [(ngModel)]=\"username\" hint=\"Username\"\n            returnKeyType=\"next\" (returnPress)=\"focusPassword(true)\">\n        </TextField>\n        <TextField #password2 class=\"text-field\" [(ngModel)]=\"password\"\n            hint=\"Password\" secure=\"true\" returnKeyType=\"next\"\n            (returnPress)=\"focusPassword(false)\">\n        </TextField>\n        <TextField #secondpassword2 class=\"text-field\"\n            [(ngModel)]=\"secondpassword\" hint=\"Confirm password\" secure=\"true\"\n            returnKeyType=\"done\">\n        </TextField>\n        <Button class=\"sign-up-button\" text=\"Sign up\" (tap)=\"onSignUp()\">\n        </Button>\n        <Button color=\"gray\" text=\"Already sign up ? sign in.\"\n            (tap)=\"toSignIn()\">\n        </Button>\n    </StackLayout>\n</ScrollView>"

/***/ }),

/***/ "./home/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(application_settings__WEBPACK_IMPORTED_MODULE_2__);



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    RegisterComponent.prototype.onSignUp = function () {
        if (this.username.length > 3 && this.password.length > 3 && this.secondpassword.length > 3) {
            if (this.password == this.secondpassword) {
                application_settings__WEBPACK_IMPORTED_MODULE_2__["setString"]("lusername2", this.username);
                application_settings__WEBPACK_IMPORTED_MODULE_2__["setString"]("lpassword2", this.password);
                this.pushToDB(this.username, this.password);
                this.routerExtensions.navigate(["/body"], { clearHistory: true });
            }
        }
    };
    RegisterComponent.prototype.toSignIn = function () {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    };
    RegisterComponent.prototype.focusPassword = function (message) {
        if (message) {
            this.password2.nativeElement.focus();
        }
        else {
            this.secondpassword2.nativeElement.focus();
        }
    };
    RegisterComponent.prototype.pushToDB = function (a, b) {
        // >> fetch-post-ts
        fetch("http://my-json-server.typicode.com/houssemfadhli/whateverApp/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: a,
                password: b
            })
        }).then(function (r) { return r.json(); })
            .then(function (response) {
            var result = response.json;
            // >> (hide)
            // << (hide)
        }).catch(function (e) {
            // >> (hide)
            console.log("Error: ");
            console.log(e);
            // << (hide)
        });
        // << fetch-post-ts
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("password2", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "password2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("secondpassword2", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "secondpassword2", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Register",
            template: __importDefault(__webpack_require__("./home/register.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/register.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

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
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        


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

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "nativescript-angular/common":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/common");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "nativescript-geolocation":
/***/ (function(module, exports) {

module.exports = require("nativescript-geolocation");

/***/ }),

/***/ "nativescript-ui-autocomplete/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-autocomplete/angular");

/***/ }),

/***/ "nativescript-ui-calendar/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-calendar/angular");

/***/ }),

/***/ "nativescript-ui-chart/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-chart/angular");

/***/ }),

/***/ "nativescript-ui-dataform/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-dataform/angular");

/***/ }),

/***/ "nativescript-ui-gauge/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-gauge/angular");

/***/ }),

/***/ "nativescript-ui-listview/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview/angular");

/***/ }),

/***/ "nativescript-ui-sidedrawer":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer");

/***/ }),

/***/ "nativescript-ui-sidedrawer/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer/angular");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/ui/dialogs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/dialogs");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/utils/utils":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/utils");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2hvbWUvYm9keS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2hvbWUvYm9keS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ob21lL2JvZHkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2hvbWUvcHJvZmlsZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb2ZpbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2hvbWUvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFDVDtBQUVSO0FBQ007QUFFNUQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDBFQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0VBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLHdFQUFnQixFQUFFO0lBQ2hELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsY0FBTSw0R0FBNEIsQ0FBQyxJQUFJLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxVQUFVLEVBQVosQ0FBWSxDQUFDLEVBQXBELENBQW9ELEVBQUU7Q0FDN0YsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDcEI3Qix3cEJBQXdwQix3RUFBd0UsaUJBQWlCLHVUQUF1VCxpU0FBaVMsZ1VB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Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLHFEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSwrRDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEJvZHlDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9wcm9maWxlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gWyBcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJyZWdpc3RlclwiLCBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImJvZHlcIiwgY29tcG9uZW50OiBCb2R5Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInByb2ZpbGVcIiwgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoXCIuL2hvbWUvaG9tZS5tb2R1bGVcIikudGhlbihtID0+IG0uSG9tZU1vZHVsZSkgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tXFxuUmFkU2lkZURyYXdlciBpcyBhIFVJIGNvbXBvbmVudCBwYXJ0IG9mIHRoZSBQcm9ncmVzcyBOYXRpdmVTY3JpcHQgVUkgc2V0IG9mIGNvbXBvbmVudHMuXFxuTGVhcm4gbW9yZSBhYm91dCB0aGUgUmFkU2lkZURyYXdlciBVSSBjb21wb25lbnQgYW5kIGhvdyBpdCBjYW4gYmUgY3VzdG9taXplZCBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXJ0aWNsZTpcXG5odHRwOi8vZG9jcy50ZWxlcmlrLmNvbS9kZXZ0b29scy9uYXRpdmVzY3JpcHQtdWkvQ29udHJvbHMvTmF0aXZlU2NyaXB0L1NpZGVEcmF3ZXIvZ2V0dGluZy1zdGFydGVkXFxuLS0+XFxuPFJhZFNpZGVEcmF3ZXIgW2RyYXdlclRyYW5zaXRpb25dPVxcXCJzaWRlRHJhd2VyVHJhbnNpdGlvblxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHRrRHJhd2VyQ29udGVudCByb3dzPVxcXCJhdXRvLCAqXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcInNpZGVkcmF3ZXIgc2lkZWRyYXdlci1sZWZ0XFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIGZhXFxcIiB0ZXh0PVxcXCImI3hmMmJkO1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8TGFiZWwgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB0ZXh0PVxcXCJ7eyB1c2VybmFtZWxhYmVsIH19XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2lkZWRyYXdlci1oZWFkZXItYnJhbmRcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPFNjcm9sbFZpZXcgcm93PVxcXCIxXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpZGVkcmF3ZXItY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDE1O1xcXCIgY2xhc3M9XFxcImZhXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiSG9tZVxcXCIgKHRhcCk9XFxcInRvSG9tZSgpXFxcIiBjbGFzcz1cXFwicC1yLTEwXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDA3O1xcXCIgY2xhc3M9XFxcImZhXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsICh0YXApPVxcXCJ0b1Byb2ZpbGUoKVxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJQcm9maWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJwLXItMTBcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwMDU7XFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJGZWF0dXJlZFxcXCIgY2xhc3M9XFxcInAtci0xMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjAyMztcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCAodGFwKT1cXFwidG9Mb2dPdXQoKVxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJMb2dvdXRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInAtci0xMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1Njcm9sbFZpZXc+XFxuICAgIDwvR3JpZExheW91dD5cXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldCB0a01haW5Db250ZW50IGNsYXNzPVxcXCJwYWdlIHBhZ2UtY29udGVudFxcXCI+XFxuICAgIDwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbjwvUmFkU2lkZURyYXdlcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBSYWRTaWRlRHJhd2VyLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuICAgIHByaXZhdGUgdXNlcm5hbWVsYWJlbDogU3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXG4gICAgfSAgXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGFwcFNldHRpbmdzLmhhc0tleShcImx1c2VybmFtZTJcIikpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYm9keVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lbGFiZWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJsdXNlcm5hbWUyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuICAgIHRvTG9nT3V0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgYXBwU2V0dGluZ3MucmVtb3ZlKFwibHVzZXJuYW1lMlwiKTtcbiAgICAgICAgYXBwU2V0dGluZ3MucmVtb3ZlKFwibHBhc3N3b3JkMlwiKTtcbiAgICB9XG4gICAgdG9Qcm9maWxlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICB0b0hvbWUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2JvZHlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbn1cbiIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5kYXJrLmNzc1xcXCJcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udEF3ZXNvbWVcXFwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFjdGlvbi1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlLWNvbnRlbnQgLnBhZ2UtcGxhY2Vob2xkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNkN2Q3ZDdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlLWNvbnRlbnQgLnBhZ2UtaWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjcyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJ0b3BcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZDdkN2Q3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjIwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIi0xMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvblwiLFwiLnNpZGVkcmF3ZXItbGlzdC1pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDIyNzM0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIuc2lkZWRyYXdlci1sZWZ0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlci5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI2MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyLnNpZGVkcmF3ZXItbGVmdCAuZm9vdG5vdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWhlYWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJzbGF0ZWdyZXlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1oZWFkZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbSBsYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDIyNzM0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLmZhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0uc2VsZWN0ZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y4ZjhmOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLnNlbGVjdGVkIGxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQm9keUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvYm9keS5jb21wb25lbnRcIjsgXG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9wcm9maWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgIEJvZHlDb21wb25lbnQsXG4gICAgICAgIFByb2ZpbGVDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5pdGVtLW5hbWUge1xcclxcbiAgY29sb3I6ICMzMDNjNDc7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJPcGVuU2Fucy1Cb2xkXFxcIjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogMjtcXHJcXG59XFxyXFxuLmFkZC1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDg1JTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XFxyXFxufVxcclxcbi5pdGVtLWRlc2Mge1xcclxcbiAgY29sb3I6ICMzMDNjNDc7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJPcGVuU2Fucy1SZWd1bGFyXFxcIjtcXHJcXG4gIHBhZGRpbmc6IDI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXByaWNlIHtcXHJcXG4gIGNvbG9yOiAjYzQwNDA0O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiT3BlblNhbnMtQm9sZFxcXCI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDI7XFxyXFxufVxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgd2lkdGg6IDcwO1xcclxcbiAgaGVpZ2h0OiA3MDtcXHJcXG4gIGZvbnQtc2l6ZTogNTA7XFxyXFxuICBwYWRkaW5nOiAwIDAgODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTU7XFxyXFxufVxcclxcbi5zaWRlU3RhY2tMYXlvdXQge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWRlVGl0bGVTdGFja0xheW91dCB7XFxyXFxuICBwYWRkaW5nOiAxNjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZUxhYmVsIHtcXHJcXG4gIHBhZGRpbmc6IDE2O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEl0ZW1TdGFja0xheW91dCB7XFxyXFxuICBwYWRkaW5nOiAxNjtcXHJcXG59XFxyXFxuLmVkaXRWaWV3U3RhY2tMYXlvdXQge1xcclxcbiAgcGFkZGluZzogMTY7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcbi5kZWxldGVWaWV3U3RhY2tMYXlvdXQge1xcclxcbiAgcGFkZGluZzogMTY7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIldoYXRldmVyQXBwXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICA8QWN0aW9uSXRlbT5cXG4gICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgIDxCdXR0b25cXG4gICAgICAgIGNsYXNzPVxcXCJmYVxcXCJcXG4gICAgICAgIHRleHQ9XFxcIiYjeGYwYzk7XFxcIlxcbiAgICAgICAgZm9udFNpemU9XFxcIjIwXFxcIlxcbiAgICAgICAgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgICAgPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9BY3Rpb25JdGVtPlxcbjwvQWN0aW9uQmFyPlxcbjxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJwYWdlIHBhZ2UtY29udGVudFxcXCIgdGtNYWluQ29udGVudD5cXG4gIDxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICA8UmFkTGlzdFZpZXdcXG4gICAgICBbaXRlbXNdPVxcXCJkYXRhXFxcIlxcbiAgICAgIGlkPVxcXCJyYWRsaXN0dmlld1xcXCJcXG4gICAgICBpdGVtU3dpcGU9XFxcInRydWVcXFwiXFxuICAgICAgKHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQpPVxcXCJvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoJGV2ZW50KVxcXCJcXG4gICAgICAoaXRlbVN3aXBlUHJvZ3Jlc3NTdGFydGVkKT1cXFwib25Td2lwZUNlbGxTdGFydGVkKCRldmVudClcXFwiXFxuICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCIjZTZlNmU2XFxcIlxcbiAgICAgIChpdGVtTG9hZGluZyk9XFxcIm9uSXRlbUxvYWRpbmcoJGV2ZW50KVxcXCJcXG4gICAgPlxcbiAgICAgIDxMaXN0Vmlld1N0YWdnZXJlZExheW91dFxcbiAgICAgICAgdGtMaXN0Vmlld0xheW91dFxcbiAgICAgICAgc2Nyb2xsRGlyZWN0aW9uPVxcXCJWZXJ0aWNhbFxcXCJcXG4gICAgICAgIHNwYW5Db3VudD1cXFwiMVxcXCJcXG4gICAgICA+XFxuICAgICAgPC9MaXN0Vmlld1N0YWdnZXJlZExheW91dD5cXG4gICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgIDxEb2NrTGF5b3V0IGJvcmRlclJhZGl1cz1cXFwiMlxcXCI+XFxuICAgICAgICAgIDxJbWFnZVxcbiAgICAgICAgICAgIHNyYz1cXFwie3sgaXRlbS5pbWFnZVNyYyB9fVxcXCJcXG4gICAgICAgICAgICB3aWR0aD1cXFwiMjAwXFxcIlxcbiAgICAgICAgICAgIGhlaWdodD1cXFwiMTIwXFxcIlxcbiAgICAgICAgICAgIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiXFxuICAgICAgICAgID48L0ltYWdlPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVxcXCJ3aGl0ZVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBpdGVtLm5hbWUgfX1cXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwiaXRlbS1uYW1lXFxcIlxcbiAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBpdGVtLmRlc2MgfX1cXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwiaXRlbS1kZXNjXFxcIlxcbiAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGl0ZW0ucHJpY2UgfX1cXFwiIGNsYXNzPVxcXCJpdGVtLXByaWNlXFxcIj4gPC9MYWJlbD5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvRG9ja0xheW91dD5cXG4gICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgIDxHcmlkTGF5b3V0XFxuICAgICAgICAqdGtMaXN0SXRlbVN3aXBlVGVtcGxhdGVcXG4gICAgICAgIGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiXFxuICAgICAgICBjbGFzcz1cXFwibGlzdEl0ZW1Td2lwZUdyaWRMYXlvdXRcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJlZGl0Vmlld1N0YWNrTGF5b3V0XFxcIiBjb2w9XFxcIjBcXFwiICh0YXApPVxcXCJvbkVkaXQoKVxcXCI+XFxuICAgICAgICAgIDxMYWJlbFxcbiAgICAgICAgICAgIHRleHQ9XFxcIkVESVRcXFwiXFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIlxcbiAgICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImRlbGV0ZVZpZXdTdGFja0xheW91dFxcXCIgY29sPVxcXCIyXFxcIiAodGFwKT1cXFwib25EZWxldGUoKVxcXCI+XFxuICAgICAgICAgIDxMYWJlbFxcbiAgICAgICAgICAgIHRleHQ9XFxcIkRFTEVURVxcXCJcXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJhZGQtYnV0dG9uLWNvbnRhaW5lclxcXCI+XFxuICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYWRkLWJ1dHRvblxcXCIgdGV4dD1cXFwiK1xcXCIgKHRhcCk9XFxcImFkZFBvc3QoKVxcXCI+IDwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9HcmlkTGF5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkJvZHlcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9ib2R5LmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL2JvZHkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHB1YmxpYyBzZWxlY3RlZDogbnVtYmVyO1xuXHRwdWJsaWMgZGlhbG9nT3BlbiA9IGZhbHNlO1xuXHRkYXRhID0gW107XG5cblx0b25JdGVtTG9hZGluZyhhcmdzKSB7XG5cdFx0Ly8gaGFjayB0byBnZXQgYXJvdW5kIGlzc3VlIHdpdGggUmFkTGlzdFZpZXcgaW9zIGJhY2tncm91bmQgY29sb3JzOiBodHRwczovL2dpdGh1Yi5jb20vdGVsZXJpay9uYXRpdmVzY3JpcHQtdWktZmVlZGJhY2svaXNzdWVzLzE5NlxuXHRcdGlmIChpc0lPUykge1xuXHRcdFx0dmFyIG5ld2NvbG9yID0gbmV3IENvbG9yKFwiI2U2ZTZlNlwiKTtcblx0XHRcdGFyZ3MuaW9zLmJhY2tncm91bmRWaWV3LmJhY2tncm91bmRDb2xvciA9IG5ld2NvbG9yLmlvcztcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuZGlzcGxheVBvc3RzKCk7XG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cdH1cblx0cHVibGljIG9uRWRpdCgpIHtcblxuXHR9XG5cdHB1YmxpYyBvbkRlbGV0ZSgpIHtcblx0XHRkaWFsb2dzLmNvbmZpcm0oXCJEbyB5b3UgcmVhbGx5IHdhbnQgdG8gZGVsZXRlIHRoaXMgcG9zdCA/XCIpLnRoZW4ocmVzdWx0ID0+IHtcblx0XHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdFx0bGV0IHJhZExpc3RWaWV3ID0gPFJhZExpc3RWaWV3PkZyYW1lTW9kdWxlLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZChcInJhZGxpc3R2aWV3XCIpO1xuXHRcdFx0XHR0aGlzLmRhdGEuc3BsaWNlKHRoaXMuc2VsZWN0ZWQsIDEpO1xuXHRcdFx0XHRyYWRMaXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0cHVibGljIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZChhcmdzOiBhbnkpIHtcblx0XHR2YXIgcmFkTGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuZGF0YS5wdXNoKCk7XG5cdFx0XHRyYWRMaXN0Vmlldy5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcblx0XHR9LCA1MDApO1xuXHR9XG5cdHB1YmxpYyBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcblx0XHR2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG5cdFx0c3dpcGVMaW1pdHMudGhyZXNob2xkID0gNjAgKiBVdGlscy5sYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcblx0XHRzd2lwZUxpbWl0cy5sZWZ0ID0gMTIwICogVXRpbHMubGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XG5cdFx0c3dpcGVMaW1pdHMucmlnaHQgPSAxMjAgKiBVdGlscy5sYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcblx0XHR0aGlzLnNlbGVjdGVkID0gYXJncy5pbmRleDtcblx0fVxuXHRhZGRQb3N0KCk6IHZvaWQge1xuXHRcdHRoaXMuZGlhbG9nT3BlbiA9IHRydWU7XG5cdH1cblx0Y2xvc2VEaWFsb2coKSB7XG5cdFx0dGhpcy5kaWFsb2dPcGVuID0gZmFsc2U7XG5cdH1cblxuXHRvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcblx0XHRjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG5cdFx0c2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG5cdH1cblx0ZGlzcGxheVBvc3RzKCk6IHZvaWQge1xuXHRcdGZldGNoKFwiaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vaG91c3NlbWZhZGhsaS93aGF0ZXZlckFwcC9wb3N0cy9cIilcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdFx0LnRoZW4oKHIpID0+IHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIoclswXS5zaXplKTsgaSsrKSB7XG5cdFx0XHRcdFx0dGhpcy5kYXRhLnB1c2goeyBuYW1lOiByW2ldLm5hbWUsIGRlc2M6IHJbaV0uZGVzYywgcHJpY2U6IHJbaV0ucHJpY2UsIGltYWdlU3JjOiByW2ldLmltYWdlU3JjIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KS5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wcm9maWxlLXBpYyB7XFxuICAgIHdpZHRoOiAxNTA7XFxuICAgIGhlaWdodDogMTUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDA7XFxuICAgIG1hcmdpbjogMzIgMzIgMTYgMzI7XFxufVxcbi50aXRsZS1wcm9maWxlIHtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMTk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubGlzdEltYWdlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxufVxcblxcbi5hZGRpdGlvbmFsLWluZm8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTtcXG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTtcXG4gICAgcGFkZGluZzogMTg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxODtcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcbi5pY29uLWFkaXRpb25hbC1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAxNztcXG4gICAgY29sb3I6ICM1NTdBQUQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDI7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1hZGl0aW9uYWwtaW5mbyB7XFxuICAgIGZvbnQtc2l6ZTogMTc7XFxuICAgIGNvbG9yOiMwMDA7XFxuICAgIG1hcmdpbi1sZWZ0OiA4O1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jb250ZW50LWZvbGxvd2VycyB7XFxuICAgIHBhZGRpbmc6IDggMDtcXG59XFxuXFxuLmNvbnRlbnQtcGhvdG9zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG4gICAgbWFyZ2luLXRvcDogMTA7XFxufVxcblxcbi5mb2xsb3dlcnNUeHQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGhlaWdodDogMjA7XFxufVxcblxcbi5mb2xsb3dlcnNUeHRWYWx1ZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTA7XFxuICAgIGhlaWdodDogMjU7XFxuICAgIGZvbnQtc2l6ZTogMjI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiV2hhdGV2ZXJBcHBcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gIDxBY3Rpb25JdGVtPlxcbiAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgPEJ1dHRvblxcbiAgICAgICAgY2xhc3M9XFxcImZhXFxcIlxcbiAgICAgICAgdGV4dD1cXFwiJiN4ZjBjOTtcXFwiXFxuICAgICAgICBmb250U2l6ZT1cXFwiMjBcXFwiXFxuICAgICAgICAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXG4gICAgICA+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L0FjdGlvbkl0ZW0+XFxuPC9BY3Rpb25CYXI+XFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcImFuaW1hdGUtZmFkZUluVXAtZGVsYXktMG1zXFxcIj5cXG4gIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG8sIGF1dG8sYXV0b1xcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICAgICAgPEltYWdlXFxuICAgICAgICByb3c9XFxcIjBcXFwiXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICBzcmM9XFxcIn4vaW1hZ2VzL2RlZmF1bHQtcHJvZmlsZS1waWMucG5nXFxcIlxcbiAgICAgICAgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJwcm9maWxlLXBpY1xcXCJcXG4gICAgICA+PC9JbWFnZT5cXG4gICAgICA8TGFiZWxcXG4gICAgICAgIHJvdz1cXFwiMVxcXCJcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIHRleHQ9XFxcInt7IHVzZXJuYW1lbGFiZWwgfX1cXFwiXFxuICAgICAgICBjbGFzcz1cXFwidGl0bGUtcHJvZmlsZVxcXCJcXG4gICAgICAgIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICA+PC9MYWJlbD5cXG5cXG4gICAgICA8R3JpZExheW91dFxcbiAgICAgICAgcm93PVxcXCIyXFxcIlxcbiAgICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgcm93cz1cXFwiYXV0bywgYXV0b1xcXCJcXG4gICAgICAgIGNvbHVtbnM9XFxcImF1dG8sIGF1dG9cXFwiXFxuICAgICAgICBjbGFzcz1cXFwiYWRkaXRpb25hbC1pbmZvXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxMYWJlbFxcbiAgICAgICAgICByb3c9XFxcIjBcXFwiXFxuICAgICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgICAgdGV4dD1cXFwiJiN4ZjA0MTtcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJmYSBpY29uLWFkaXRpb25hbC1pbmZvXFxcIlxcbiAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgcm93PVxcXCIwXFxcIlxcbiAgICAgICAgICBjb2w9XFxcIjFcXFwiXFxuICAgICAgICAgIHRleHQ9XFxcInt7ICcnICsgYWRkciB9fVxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcImZhIGRlc2NyaXB0aW9uLWFkaXRpb25hbC1pbmZvXFxcIlxcbiAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgIDxHcmlkTGF5b3V0XFxuICAgICAgICByb3c9XFxcIjNcXFwiXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICByb3dzPVxcXCJhdXRvLGF1dG9cXFwiXFxuICAgICAgICBjb2x1bW5zPVxcXCIqLCosKlxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJjb250ZW50LWZvbGxvd2Vyc1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjZcXFwiIGNsYXNzPVxcXCJmb2xsb3dlcnNUeHRWYWx1ZVxcXCI+IDwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIlBvc3RzXFxcIiBjbGFzcz1cXFwiZm9sbG93ZXJzVHh0XFxcIj4gPC9MYWJlbD5cXG5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiMjMwMFxcXCIgY2xhc3M9XFxcImZvbGxvd2Vyc1R4dFZhbHVlXFxcIj4gPC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiRm9sbG93ZXJzXFxcIiBjbGFzcz1cXFwiZm9sbG93ZXJzVHh0XFxcIj4gPC9MYWJlbD5cXG5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwiNDAwXFxcIiBjbGFzcz1cXFwiZm9sbG93ZXJzVHh0VmFsdWVcXFwiPiA8L0xhYmVsPlxcbiAgICAgICAgPExhYmVsIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJGb2xsb3dpbmdcXFwiIGNsYXNzPVxcXCJmb2xsb3dlcnNUeHRcXFwiPiA8L0xhYmVsPlxcbiAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICA8V3JhcExheW91dCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMFxcXCIgYWxpZ25JdGVtcz1cXFwibGVmdFxcXCIgY2xhc3M9XFxcImNvbnRlbnQtcGhvdG9zXFxcIj5cXG4gICAgICAgIDxJbWFnZVxcbiAgICAgICAgICBzcmM9XFxcIn4vaW1hZ2VzL05ldy1Zb3JrLmpwZ1xcXCJcXG4gICAgICAgICAgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcImxpc3RJbWFnZVxcXCJcXG4gICAgICAgICAgd2lkdGg9XFxcIjMzLjMlXFxcIlxcbiAgICAgICAgICBkZWNvZGVIZWlnaHQ9XFxcIjEyMFxcXCJcXG4gICAgICAgICAgaGVpZ2h0PVxcXCIxMjBcXFwiXFxuICAgICAgICAgIGxvYWRNb2RlPVxcXCJhc3luY1xcXCJcXG4gICAgICAgID48L0ltYWdlPlxcbiAgICAgICAgPEltYWdlXFxuICAgICAgICAgIHNyYz1cXFwifi9pbWFnZXMvbnkyLmpwZ1xcXCJcXG4gICAgICAgICAgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcImxpc3RJbWFnZVxcXCJcXG4gICAgICAgICAgd2lkdGg9XFxcIjMzLjMlXFxcIlxcbiAgICAgICAgICBkZWNvZGVIZWlnaHQ9XFxcIjEyMFxcXCJcXG4gICAgICAgICAgaGVpZ2h0PVxcXCIxMjBcXFwiXFxuICAgICAgICAgIGxvYWRNb2RlPVxcXCJhc3luY1xcXCJcXG4gICAgICAgID48L0ltYWdlPlxcbiAgICAgICAgPEltYWdlXFxuICAgICAgICAgIHNyYz1cXFwifi9pbWFnZXMvZm9vZC5qcGdcXFwiXFxuICAgICAgICAgIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJsaXN0SW1hZ2VcXFwiXFxuICAgICAgICAgIHdpZHRoPVxcXCIzMy4zJVxcXCJcXG4gICAgICAgICAgZGVjb2RlSGVpZ2h0PVxcXCIxMjBcXFwiXFxuICAgICAgICAgIGhlaWdodD1cXFwiMTIwXFxcIlxcbiAgICAgICAgICBsb2FkTW9kZT1cXFwiYXN5bmNcXFwiXFxuICAgICAgICA+PC9JbWFnZT5cXG4gICAgICAgIDxJbWFnZVxcbiAgICAgICAgICBzcmM9XFxcIn4vaW1hZ2VzL3dlZGRpbmcuanBnXFxcIlxcbiAgICAgICAgICBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwibGlzdEltYWdlXFxcIlxcbiAgICAgICAgICB3aWR0aD1cXFwiMzMuMyVcXFwiXFxuICAgICAgICAgIGRlY29kZUhlaWdodD1cXFwiMTIwXFxcIlxcbiAgICAgICAgICBoZWlnaHQ9XFxcIjEyMFxcXCJcXG4gICAgICAgICAgbG9hZE1vZGU9XFxcImFzeW5jXFxcIlxcbiAgICAgICAgPjwvSW1hZ2U+XFxuICAgICAgICA8SW1hZ2VcXG4gICAgICAgICAgc3JjPVxcXCJ+L2ltYWdlcy9TZWxmaWUuanBnXFxcIlxcbiAgICAgICAgICBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwibGlzdEltYWdlXFxcIlxcbiAgICAgICAgICB3aWR0aD1cXFwiMzMuMyVcXFwiXFxuICAgICAgICAgIGRlY29kZUhlaWdodD1cXFwiMTIwXFxcIlxcbiAgICAgICAgICBoZWlnaHQ9XFxcIjEyMFxcXCJcXG4gICAgICAgICAgbG9hZE1vZGU9XFxcImFzeW5jXFxcIlxcbiAgICAgICAgPjwvSW1hZ2U+XFxuICAgICAgICA8SW1hZ2VcXG4gICAgICAgICAgc3JjPVxcXCJ+L2ltYWdlcy9uYXR1cmUuanBnXFxcIlxcbiAgICAgICAgICBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwibGlzdEltYWdlXFxcIlxcbiAgICAgICAgICB3aWR0aD1cXFwiMzMuMyVcXFwiXFxuICAgICAgICAgIGRlY29kZUhlaWdodD1cXFwiMTIwXFxcIlxcbiAgICAgICAgICBoZWlnaHQ9XFxcIjEyMFxcXCJcXG4gICAgICAgICAgbG9hZE1vZGU9XFxcImFzeW5jXFxcIlxcbiAgICAgICAgPjwvSW1hZ2U+XFxuICAgICAgPC9XcmFwTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICA8L1Njcm9sbFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuZXhwb3J0IGNvbnN0IElDT05fRVlFOiBzdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA2ZSk7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAnYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbmNsYXNzIFBob3RvIHtcblx0Y29uc3RydWN0b3IocHVibGljIGltYWdlOiBzdHJpbmcsXG5cdFx0cHVibGljIHRpdGxlOiBzdHJpbmcsXG5cdFx0cHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcblx0fVxufVxuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1Byb2ZpbGUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3Byb2ZpbGUuY29tcG9uZW50LmNzcyddLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0cHVibGljIHBob3RvczogQXJyYXk8UGhvdG8+ID0gW107XG5cdHB1YmxpYyBpY29uRXllOiBzdHJpbmcgPSBJQ09OX0VZRTtcblx0cHVibGljIGFkZHIgPSBcIlwiO1xuXHRwdWJsaWMgdXNlcm5hbWVsYWJlbDogU3RyaW5nO1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnBob3RvcyA9IFtcblx0XHRcdG5ldyBQaG90byhcIn4vaW1hZ2VzL2ltYWdlcy5qcGdcIiwgXCJIZXJlIGluIFB1Y2Fsw6EsIENoaWNsYXlvIFBlcsO6XCIsIFwiSGkgbXkgZnJpZW5kcy4uLlwiKSxcblx0XHRcdG5ldyBQaG90byhcIn4vaW1hZ2VzL2xhcmdlLmpwZ1wiLCBcIkhlcmUgaW4gQ2hpY2xheW9cIiwgJ0hpIC4uLi4nKSxcblx0XHRcdG5ldyBQaG90byhcIn4vaW1hZ2VzL2Rvd25sb2FkXygxKS5qcGdcIiwgXCJIZXJlIGluIExhbWJheWVxdWVcIiwgJycpLFxuXHRcdF07XG5cdH1cblx0Z2V0TG9jYXRpb24oKTogdm9pZCB7XG5cdFx0Z2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHsgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLCBtYXhpbXVtQWdlOiA1MDAwLCB0aW1lb3V0OiAyMDAwMCB9KVxuXHRcdFx0LnRoZW4ocmVzID0+IHtcblx0XHRcdFx0Ly8gZ2V0IHRoZSBhZGRyZXNzIChSRVFVSVJFUyBZT1VSIE9XTiBHT09HTEUgTUFQIEFQSSBLRVkhKVxuXHRcdFx0XHRmZXRjaChcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/bGF0bG5nPVwiICsgcmVzLmxhdGl0dWRlICsgXCIsXCIgKyByZXMubG9uZ2l0dWRlICsgXCIma2V5PUFJemFTeURBODZ5NzN6QzlGbzA0Vm9MZjl5X2FNeDVPSEVadlRtWVwiKVxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyKTtcblx0XHRcdFx0XHRcdGlmIChyLnJlc3VsdHNbMF0pIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5hZGRyID0gci5yZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmdldExvY2F0aW9uKCk7XG5cdFx0dGhpcy51c2VybmFtZWxhYmVsID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibHVzZXJuYW1lMlwiKTtcblx0fVxuXHRvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcblx0XHRjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG5cdFx0c2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG5cdH1cblxuXHRvbkl0ZW1UYXAoYXJncykge1xuXHRcdGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleC4uLi4uLjogXCIgKyBhcmdzLmluZGV4KTtcblx0fVxuXG5cdG9wZW5VcmwodXJsOiBzdHJpbmcpIHtcblx0XHR1dGlscy5vcGVuVXJsKHVybCk7XG5cdH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcblxcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMDtcXG5cXHRtYXJnaW46IDE1O1xcbn1cXG4ucmVnaXN0ZXItbG9nbyB7XFxuICBtYXJnaW46IDE1O1xcbiAgaGVpZ2h0OiA5MDtcXG59XFxuLnRleHQtZmllbGQge1xcbiAgcGFkZGluZzogMTU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMC41O1xcbiAgYm9yZGVyLXJhZGl1czogNTtcXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcXG59XFxuLnNpZ24tdXAtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDE1O1xcbiAgYmFja2dyb3VuZDogYnJvd247XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2O1xcbiAgYm9yZGVyLXdpZHRoOiAwLjU7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcdFxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U2Nyb2xsVmlldz5cXG4gICAgPFN0YWNrTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHBhZGRpbmc9XFxcIjVcXFwiPlxcbiAgICAgICAgPEltYWdlIGNsYXNzPVxcXCJyZWdpc3Rlci1sb2dvXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL3JlZ2lzdGVyLWxvZ28ucG5nXFxcIj48L0ltYWdlPlxcbiAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwidGV4dC1maWVsZFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJuYW1lXFxcIiBoaW50PVxcXCJVc2VybmFtZVxcXCJcXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiAocmV0dXJuUHJlc3MpPVxcXCJmb2N1c1Bhc3N3b3JkKHRydWUpXFxcIj5cXG4gICAgICAgIDwvVGV4dEZpZWxkPlxcbiAgICAgICAgPFRleHRGaWVsZCAjcGFzc3dvcmQyIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgaGludD1cXFwiUGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXG4gICAgICAgICAgICAocmV0dXJuUHJlc3MpPVxcXCJmb2N1c1Bhc3N3b3JkKGZhbHNlKVxcXCI+XFxuICAgICAgICA8L1RleHRGaWVsZD5cXG4gICAgICAgIDxUZXh0RmllbGQgI3NlY29uZHBhc3N3b3JkMiBjbGFzcz1cXFwidGV4dC1maWVsZFxcXCJcXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwic2Vjb25kcGFzc3dvcmRcXFwiIGhpbnQ9XFxcIkNvbmZpcm0gcGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIj5cXG4gICAgICAgIDwvVGV4dEZpZWxkPlxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwic2lnbi11cC1idXR0b25cXFwiIHRleHQ9XFxcIlNpZ24gdXBcXFwiICh0YXApPVxcXCJvblNpZ25VcCgpXFxcIj5cXG4gICAgICAgIDwvQnV0dG9uPlxcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cXFwiZ3JheVxcXCIgdGV4dD1cXFwiQWxyZWFkeSBzaWduIHVwID8gc2lnbiBpbi5cXFwiXFxuICAgICAgICAgICAgKHRhcCk9XFxcInRvU2lnbkluKClcXFwiPlxcbiAgICAgICAgPC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgcmVxdWVzdCwgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcblxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiUmVnaXN0ZXJcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoXCJwYXNzd29yZDJcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIHBhc3N3b3JkMjogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcInNlY29uZHBhc3N3b3JkMlwiLCB7IHN0YXRpYzogZmFsc2UgfSkgc2Vjb25kcGFzc3dvcmQyOiBFbGVtZW50UmVmO1xuXHRwcm90ZWN0ZWQgdXNlcm5hbWU6IHN0cmluZztcblx0cHJvdGVjdGVkIHBhc3N3b3JkOiBzdHJpbmc7XG5cdHByb3RlY3RlZCBzZWNvbmRwYXNzd29yZDogU3RyaW5nO1xuXHRvblNpZ25VcCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy51c2VybmFtZS5sZW5ndGggPiAzICYmIHRoaXMucGFzc3dvcmQubGVuZ3RoID4gMyAmJiB0aGlzLnNlY29uZHBhc3N3b3JkLmxlbmd0aCA+IDMpIHtcblx0XHRcdGlmICh0aGlzLnBhc3N3b3JkID09IHRoaXMuc2Vjb25kcGFzc3dvcmQpIHtcblx0XHRcdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwibHVzZXJuYW1lMlwiLCB0aGlzLnVzZXJuYW1lKTtcblx0XHRcdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwibHBhc3N3b3JkMlwiLCB0aGlzLnBhc3N3b3JkKTtcblx0XHRcdFx0dGhpcy5wdXNoVG9EQih0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKTtcblx0XHRcdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ib2R5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXHR0b1NpZ25JbigpOiB2b2lkIHtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuXHR9XG5cdGZvY3VzUGFzc3dvcmQobWVzc2FnZTogYm9vbGVhbikge1xuXHRcdGlmIChtZXNzYWdlKSB7IHRoaXMucGFzc3dvcmQyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTsgfVxuXHRcdGVsc2UgeyB0aGlzLnNlY29uZHBhc3N3b3JkMi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7IH1cblx0fVxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblx0fVxuXHRwdXNoVG9EQihhOiBzdHJpbmcsIGI6IHN0cmluZyk6IHZvaWQge1xuXHRcdC8vID4+IGZldGNoLXBvc3QtdHNcblx0XHRmZXRjaChcImh0dHA6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vaG91c3NlbWZhZGhsaS93aGF0ZXZlckFwcC9wcm9maWxlXCIsIHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdHVzZXJuYW1lOiBhLFxuXHRcdFx0XHRwYXNzd29yZDogYlxuXHRcdFx0fSlcblx0XHR9KS50aGVuKChyKSA9PiByLmpzb24oKSlcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSByZXNwb25zZS5qc29uO1xuXHRcdFx0XHQvLyA+PiAoaGlkZSlcblx0XHRcdFx0Ly8gPDwgKGhpZGUpXG5cdFx0XHR9KS5jYXRjaCgoZSkgPT4ge1xuXHRcdFx0XHQvLyA+PiAoaGlkZSlcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRcdFx0Ly8gPDwgKGhpZGUpXG5cdFx0XHR9KTtcblx0XHQvLyA8PCBmZXRjaC1wb3N0LXRzXG5cdH1cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdH1cbn0iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuZW5hYmxlUHJvZE1vZGUoKTtcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==