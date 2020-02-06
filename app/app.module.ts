import {
  NgModule,
  NgModuleFactoryLoader,
  NO_ERRORS_SCHEMA
} from "@angular/core";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { BodyComponent } from "./body/body.component";
import { ProfileComponent } from "./profile/profile.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule,
    NativeScriptUISideDrawerModule
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    BodyComponent,
    ProfileComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
