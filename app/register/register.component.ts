import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import * as appSettings from "application-settings";
@Component({
  selector: "Register",
  moduleId: module.id,
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @ViewChild("passwordId", { static: false }) passwordId: ElementRef;
  @ViewChild("secondPasswordId", { static: false })
  secondPasswordId: ElementRef;
  protected username: string = "";
  protected password: string = "";
  protected secondpassword: string = "";
  protected textError: string = "";
  protected textErrorValue: string = "";
  protected k : number = 0;
  onSignUp(): void {
    this.k=0;
    this.fetchUsers();
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
  checkErrors(aux: number): boolean {
    if (aux > 0) {
      this.textErrorValue = "visible";
      this.textError = "Username already taken";
      return false;
    }
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
    this.textErrorValue = "";
    this.textError = "";
    return true;
  }
  toSignInScreen(): void {
    this.routerExtensions.navigate(["/home"], { clearHistory: true });
  }
  focusPassword(btw: boolean) {
    if (btw) {
      this.passwordId.nativeElement.focus();
    } else {
      this.secondPasswordId.nativeElement.focus();
    }
  }
  constructor(private routerExtensions: RouterExtensions) {}

  addUser(): void {
    fetch(
      "https://my-json-server.typicode.com/houssemfadhli/whateverapp/users/",
      {
        method: "POST",
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
      .then(response => response.text())
      .then(text => console.log(text));
  }
  fetchUsers(): void {
    fetch(
      "https://my-json-server.typicode.com/houssemfadhli/whateverapp/users/"
    )
      .then(response => response.json())
      .then(r => {
        for (let i = 0; i < r.length; i++) {
          if (this.username.trim().toLowerCase() == r[i].username) {
            this.k++;
          }
        }
        this.checkUsersDetails(this.k);
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
