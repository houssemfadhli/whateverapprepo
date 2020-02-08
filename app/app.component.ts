import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
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
  public usernameLabel: string = "";
  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    if (appSettings.hasKey("localUsername")) {
      this.usernameLabel = appSettings.getString("localUsername").toUpperCase();
      this.routerExtensions.navigate(["/body"], { clearHistory: true });
    } else {
      appSettings.clear();
    }
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }
  logOut(): void {
    if (appSettings.hasKey("localUsername")) {

    dialogs
    .confirm({
      title: "",
      message: "Do you really want to logout ?",
      okButtonText: "Yes",
      cancelButtonText: "No"
    })
    .then(result => {
      if (result) {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
        this.usernameLabel = "";
        appSettings.clear();
      }
    });
  }
  else {

  this.routerExtensions.navigate(["/home"], { clearHistory: true });
  this.usernameLabel = "";
  appSettings.clear();
  }
  }
  toProfileScreen(): void {
    if (appSettings.hasKey("localUsername")) {
      const sideDrawer = <RadSideDrawer>app.getRootView();
      sideDrawer.closeDrawer();
      this.routerExtensions.navigate(["/profile"], { clearHistory: true });
    } else {
      dialogs
        .confirm({
          title: "",
          message: "Try to sign in to view your profile ?",
          okButtonText: "Yes",
          cancelButtonText: "No"
        })
        .then(result => {
          if (result) {
            this.usernameLabel = "";
            appSettings.clear();
            this.routerExtensions.navigate(["/home"], { clearHistory: true });
          }
        });
    }
  }
  toHomeScreen(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
    this.routerExtensions.navigate(["/body"], { clearHistory: true });
  }
  toUsersScreen(): void {
    if (appSettings.hasKey("localUsername")) {
      const sideDrawer = <RadSideDrawer>app.getRootView();
      sideDrawer.closeDrawer();
      this.routerExtensions.navigate(["/users"], { clearHistory: true });
    } else {
      dialogs
        .confirm({
          title: "",
          message: "Try to sign in to view all users ?",
          okButtonText: "Yes",
          cancelButtonText: "No"
        })
        .then(result => {
          if (result) {
            this.usernameLabel = "";
            appSettings.clear();
            this.routerExtensions.navigate(["/home"], { clearHistory: true });
          }
        });
    }
  }
  closeSideDrawer(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }
}
