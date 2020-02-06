import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as appSettings from "application-settings";
import { ActionBar } from "tns-core-modules/ui/action-bar/action-bar";
@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @ViewChild("passwordId", { static: false }) passwordId: ElementRef;
  protected password: string = "";
  protected username: string = "";
  protected textError: string = "";
  protected textErrorValue: string = "";

  constructor(private routerExtensions: RouterExtensions) {}
  signIn(): void {
    this.fetchUsers();
  }
  checkErrors(aux: number): boolean {
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
  }
  toSignUpScreen(): void {
    this.routerExtensions.navigate(["/register"], { clearHistory: true });
  }
  focusPassword() {
    this.passwordId.nativeElement.focus();
  }
  fetchUsers(): void {
    fetch(
      "https://my-json-server.typicode.com/houssemfadhli/whateverapp/users/"
    )
      .then(response => response.json())
      .then(r => {
        var k: number = 0;
        for (let i = 0; i < r.length; i++) {
          if (
            this.username.trim().toLowerCase() == r[i].username &&
            this.password.trim().toLowerCase() == r[i].password
          ) {
            k++;
            this.checkUsersDetails(k);
          }
        }
        this.checkUsersDetails(k);
      })
      .catch(err => {
        console.log(err);
      });
  }
  checkUsersDetails(aux: number): void {
    if (this.checkErrors(aux)) {
      appSettings.setString(
        "localUsername",
        this.username.trim().toLowerCase()
      );
      appSettings.setString(
        "localPassword",
        this.password.trim().toLowerCase()
      );
      this.routerExtensions.navigate(["/body"], { clearHistory: true });
    }
  }
  ngOnInit(): void {}
}
