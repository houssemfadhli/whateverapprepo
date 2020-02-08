import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { RegisterComponent } from "./register/register.component";
import { BodyComponent } from "./body/body.component";
import { ProfileComponent } from "./profile/profile.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "body", component: BodyComponent },
  { path: "profile", component: ProfileComponent },
  { path: "users", component: UsersComponent },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
