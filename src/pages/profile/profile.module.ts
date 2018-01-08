import { NgModule } from "@angular/core";
import { Profile } from "./profile";
import { IonicPageModule } from "ionic-angular";
import { RegexModule } from "../../directives/regex/regex.module";
import { RangeModule } from "../../directives/range/range.module";
import { PasswordModule } from "../password/password.module";

@NgModule({
  declarations: [
    Profile
  ],
  imports: [
    IonicPageModule.forChild(Profile),
    RangeModule,
    RegexModule,
    PasswordModule
  ],
  exports: [
    Profile
  ]
})

export  class ProfileModule {}
