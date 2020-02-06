import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition
} from "nativescript-ui-sidedrawer";
import * as appSettings from "application-settings";
@Component({
  selector: "ns-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  protected _sideDrawerTransition: DrawerTransitionBase;
  protected usernameLabel: string = "";
  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    if (appSettings.hasKey("localUsername")) {
      this.usernameLabel = appSettings.getString("localUsername");
      this.routerExtensions.navigate(["/body"], { clearHistory: true });
    }
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }
  logOut(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
    this.routerExtensions.navigate(["/home"], { clearHistory: true });
    appSettings.clear();
  }
  toProfileScreen(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
    this.routerExtensions.navigate(["/profile"], { clearHistory: true });
  }
  toHomeScreen(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
    this.routerExtensions.navigate(["/body"], { clearHistory: true });
  }
  closeSideDrawer(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }
}
