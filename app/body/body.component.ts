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
import {
  DrawerTransitionBase,
  SlideInOnTopTransition
} from "nativescript-ui-sidedrawer";
import { Frame } from "ui/frame";
@Component({
  selector: "Body",
  moduleId: module.id,
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {
  protected _sideDrawerTran: DrawerTransitionBase;
  protected selected: number;
  protected data = [];
  protected dialogOpen = false;
  protected title: string = "";
  protected description: string = "";
  protected price: string = "";
  protected sumPosts: number = 0;
  protected addLabelText: string = "";
  protected addButtonText: string = "";
  protected textError: string = "";
  protected textErrorValue: string = "";
  protected alpha: number = 0;
  protected setSwipeAction: boolean = true;
  protected setAddButtonVisibility: string = "visible";

  hideSwipeAndAddButton(): void {
    if (appSettings.hasKey("localUsername")) {
      this.setSwipeAction = true;
      this.setAddButtonVisibility = "visible";
    } else {
      this.setSwipeAction = false;
      this.setAddButtonVisibility = "collapsed";
    }
  }
  showDialog(aux: number) {
    if (aux == 0) {
      this.alpha = 0;
      this.addButtonText = "Add";
      this.addLabelText = "How can you make the post attractive ?";

      this.title = "";
      this.description = "";
      this.price = "";
      this.textErrorValue = "";
      this.textError = "";
      this.dialogOpen = true;
    } else {
      this.alpha = 1;
      this.addButtonText = "Update";
      this.addLabelText =
        "How can you make the post more attractive after updates ?";
      let radListView = <RadListView>(
        FrameModule.Frame.topmost().currentPage.getViewById("radlistview")
      );
      this.title = radListView.items[this.selected].name;
      this.description = radListView.items[this.selected].desc;
      this.price = radListView.items[this.selected].price;
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
  constructor() {}
  ngOnInit(): void {
    this.hideSwipeAndAddButton();
    this.fetchPosts();
    this._sideDrawerTran = new SlideInOnTopTransition();
  }
  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTran;
  }
  openDrawer(): void {
    let X = <RadSideDrawer>Frame.topmost().getViewById("bottomDrawerId");
    X.showDrawer();
  }

  closeSideDrawer(): void {
    let X = <RadSideDrawer>Frame.topmost().getViewById("bottomDrawerId");
    X.closeDrawer();
  }
  onDelete() {
    let radListView = <RadListView>(
      FrameModule.Frame.topmost().currentPage.getViewById("radlistview")
    );
    this.data.splice(this.selected, 1);
    radListView.notifySwipeToExecuteFinished();
    fetch(
      "https://my-json-server.typicode.com/houssemfadhli/whateverapp/posts/" +
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
  fetchPosts(): void {
    fetch(
      "https://my-json-server.typicode.com/houssemfadhli/whateverapp/posts/"
    )
      .then(response => response.json())
      .then(r => {
        for (let i = 0; i < r.length; i++) {
          this.data.push({
            name: r[i].name,
            postId: r[i].id,
            desc: r[i].desc,
            price: r[i].price + " DT",
            imageSrc: r[i].imageSrc,
            byUsername: ""
          });
        }
        this.sumPosts = r.length;
      })
      .catch(err => {
        console.log(err);
      });
  }
  addOrUpdatePost(): void {
    if (this.checkErrors()) {
      if (this.alpha == 0) {
        fetch(
          "https://my-json-server.typicode.com/houssemfadhli/whateverapp/posts/",
          {
            method: "POST",
            body: JSON.stringify({
              name: this.title,
              id: (this.sumPosts + 1).toString(),
              desc: this.description,
              price: this.price,
              imageSrc: "https://image.flaticon.com/icons/svg/146/146817.svg",
              byUsername: appSettings.getString("localUsername")
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
          this.data.push({
            name: this.title,
            postId: this.sumPosts+1,
            desc: this.description,
            price: this.price + " DT",
            imageSrc: "https://image.flaticon.com/icons/svg/146/146817.svg",
            byUsername: appSettings.getString("localUsername")
          });
          radListView.notifyPullToRefreshFinished();
        this.closeDialog();
      } else {
        fetch(
          "https://jsonplaceholder.typicode.com/posts/" + this.selected + 1,
          {
            method: "PUT",
            body: JSON.stringify({
              name: this.title,
              price: this.price,
              desc: this.description
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
        this.data[this.selected].name = this.title;
        this.data[this.selected].desc = this.description;
        this.data[this.selected].price = this.price;
        this.closeDialog();
      }
    }
  }
  checkErrors(): boolean {
    if (
      this.title.trim().length == 0 &&
      this.description.trim().length == 0 &&
      this.price.trim().length == 0
    ) {
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
  }
}
