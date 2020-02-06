import { Component, OnInit } from "@angular/core";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as appSettings from "application-settings";

@Component({
  selector: "Profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  moduleId: module.id
})
export class ProfileComponent implements OnInit {
  protected usernameAddress = "";
  protected usernamelabel: string = "";
  protected usernamePostsNumber: string = "0";

  constructor() {}
  getLocation(): void {
    geolocation
      .getCurrentLocation({
        desiredAccuracy: Accuracy.high,
        maximumAge: 5000,
        timeout: 20000
      })
      .then(res => {
        // get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
        fetch(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            res.latitude +
            "," +
            res.longitude +
            "&key=AIzaSyDA86y73zC9Fo04VoLf9y_aMx5OHEZvTmY"
        )
          .then(response => response.json())
          .then(r => {
            console.log(r);
            this.usernameAddress = "Searching for location...";
            if (r.results[0]) {
              this.usernameAddress = r.results[0].formatted_address;
            }
          });
      });
  }

  ngOnInit() {
    this.fetchPostsNumber();
    this.getLocation();
    this.usernamelabel = appSettings
      .getString("localUsername")
      .toLocaleUpperCase();
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
  fetchPostsNumber(): void {
    fetch(
      "https://my-json-server.typicode.com/houssemfadhli/whateverapp/posts/"
    )
      .then(response => response.json())
      .then(r => {
        var k: number = 0;
        for (let i = 0; i < r.length; i++) {
          if (r[i].byUsername == appSettings.getString("localUsername")) {
            k++;
          }
        }
        this.usernamePostsNumber = k.toString();
      })
      .catch(err => {
        console.log(err);
      });
  }
}
