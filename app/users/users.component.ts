import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { isIOS, isAndroid } from "tns-core-modules/platform";
import { Color } from "color";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as Utils from "utils/utils";
import * as FrameModule from "ui/frame";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";

import {
  DrawerTransitionBase,
  SlideInOnTopTransition
} from "nativescript-ui-sidedrawer";
import { Frame } from "ui/frame";
@Component({
  selector: "Users",
  moduleId: module.id,
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  protected _sideDrawerTran: DrawerTransitionBase;
  protected selected: number;
  protected data = [];
  protected dialogOpen = false;
  protected username: string = "";
  protected password: string = "";
  protected secondpassword: string = "";
  protected joinedAt: string = "";
  protected sumUsers: number = 0;
  protected addLabelText: string = "";
  protected addButtonText: string = "";
  protected textError: string = "";
  protected textErrorValue: string = "";
  protected alpha: number = 0;
  protected k: number = 0;
  protected ifCurrentUser = "";

  showDialog(aux: number) {
    if (aux == 0) {
      this.alpha = 0;
      this.addButtonText = "Add";
      this.addLabelText = "Add users individually !";

      this.username = "";
      this.password = "";
      this.secondpassword = "";
      this.textErrorValue = "";
      this.textError = "";
      this.dialogOpen = true;
    } else {
      this.alpha = 1;
      this.addButtonText = "Update";
      this.addLabelText = "Do you have some updates ?";
      let radListView = <RadListView>(
        FrameModule.Frame.topmost().currentPage.getViewById("radlistview")
      );
      this.username = radListView.items[this.selected].username.toLowerCase();
      this.password = "";
      this.secondpassword = "";
      this.textErrorValue = "";
      this.textError = "";
      this.dialogOpen = true;
    }
  }
  closeDialog() {
    this.dialogOpen = false;
  }
  onItemLoading(args) {
    if (isIOS) {
      var newcolor = new Color("#e6e6e6");
      args.ios.backgroundView.backgroundColor = newcolor.ios;
    }
  }
  constructor(private routerExtensions: RouterExtensions) {}
  ngOnInit(): void {
    this.fetchUsers();
    this._sideDrawerTran = new SlideInOnTopTransition();
  }
  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTran;
  }
  openDrawer(): void {
    let radListView = <RadListView>(
      FrameModule.Frame.topmost().currentPage.getViewById("radlistview")
    );
    if (
      appSettings.getString("localUsername") ==
      radListView.items[this.selected].username.toLowerCase()
    ) {
      this.ifCurrentUser =
        "You're going to delete your current account ! after pressing delete your session will expire";
      let X = <RadSideDrawer>Frame.topmost().getViewById("bottomDrawerId");
      X.showDrawer();
    } else {
      this.ifCurrentUser = "Are you sure you want to delete this account ?";
      let X = <RadSideDrawer>Frame.topmost().getViewById("bottomDrawerId");
      X.showDrawer();
    }
  }

  closeSideDrawer(): void {
    let X = <RadSideDrawer>Frame.topmost().getViewById("bottomDrawerId");
    X.closeDrawer();
  }
  onDelete() {
    let radListView = <RadListView>(
      FrameModule.Frame.topmost().currentPage.getViewById("radlistview")
    );

    if (
      appSettings.getString("localUsername") ==
      radListView.items[this.selected].username.toLowerCase()
    ) {
      this.routerExtensions.navigate(["/home"], { clearHistory: true });
      appSettings.clear();
    }
    this.data.splice(this.selected, 1);
    radListView.notifySwipeToExecuteFinished();
    fetch(
      "https://my-json-server.typicode.com/houssemfadhli/whateverapp/users/" +
        this.selected +
        1,
      {
        method: "DELETE"
      }
    );
    this.closeDialog();
  }
  public onPullToRefreshInitiated(args: any) {
    var radListView = args.object;
    setTimeout(() => {
      this.data.push();
      radListView.notifyPullToRefreshFinished();
    }, 500);
  }
  public onSwipeCellStarted(args: ListViewEventData) {
    var swipeLimits = args.data.swipeLimits;
    swipeLimits.threshold = 50 * Utils.layout.getDisplayDensity();
    swipeLimits.left = 100 * Utils.layout.getDisplayDensity();
    swipeLimits.right = 100 * Utils.layout.getDisplayDensity();
    this.selected = args.index;
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
  fetchUsers(): void {
    fetch(
      "https://my-json-server.typicode.com/houssemfadhli/whateverapp/users/"
    )
      .then(response => response.json())
      .then(r => {
        for (let i = 0; i < r.length; i++) {
          this.data.push({
            username: r[i].username.toUpperCase(),
            password: r[i].password,
            joinedAt: r[i].joinedAt
          });
        }
        this.sumUsers = r.length;
      })
      .catch(err => {
        console.log(err);
      });
  }
  getAllhUsers(): number {
    this.k=0;
    for (let i = 0; i < this.data.length; i++) {
      if (
        this.username.trim().toLowerCase() == this.data[i].username.trim().toLowerCase()
      ) {
        this.k++;
      }
    }
    return this.k;
  }
  getFullDate(): string {
    let now = new Date();
    return (
      now.getHours() +
      ":" +
      now.getMinutes() +
      " " +
      now.getDay() +
      "/" +
      now.getMonth() +
      "/" +
      now.getFullYear()
    ).toString();
  }
  addOrUpdateUser(): void {
    if (this.checkErrors()) {
      if (this.alpha == 0) {
        fetch(
          "https://my-json-server.typicode.com/houssemfadhli/whateverapp/users/",
          {
            method: "POST",
            body: JSON.stringify({
              username: this.username.trim().toLowerCase(),
              id: (this.sumUsers + 1).toString(),
              password: this.password.trim().toLowerCase(),
              joinedAt: this.getFullDate()
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }
        )
          .then(response => response.json())
          .then(json => console.log(json));
        this.closeDialog();
      } else {
        fetch(
          "https://jsonplaceholder.typicode.com/users/" + this.selected + 1,
          {
            method: "PUT",
            body: JSON.stringify({
              username: this.username.trim().toLowerCase(),
              password: this.password.trim().toLowerCase(),
              joinedAt: this.getFullDate()
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }
        )
          .then(response => response.json())
          .then(json => console.log(json));
        let radListView = <RadListView>(
          FrameModule.Frame.topmost().currentPage.getViewById("radlistview")
        );
        this.data[this.selected].username = this.username.trim().toUpperCase();
        this.closeDialog();
      }
    }
  }
  checkErrors(): boolean {
    if (
      this.username.trim().length == 0 &&
      this.password.trim().length == 0 &&
      this.secondpassword.trim().length == 0
    ) {
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
    if (
      this.password.trim().toLowerCase() ==
      this.data[this.selected].password.trim().toLowerCase()
    ) {
      this.textErrorValue = "visible";
      this.textError = "Try another new password";
      return false;
    }
    if (this.getAllhUsers() > 0) {
      this.textErrorValue = "visible";
      this.textError = "Try another new username";
      return false;
    }
    this.textErrorValue = "";
    this.textError = "";
    return true;
  }
}
