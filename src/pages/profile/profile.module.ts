import { NgModule } from "@angular/core";
import { Profile } from "./profile";
import { IonicPageModule } from "ionic-angular";
import { RegexModule } from "../../directives/regex/regex.module";
import { RangeModule } from "../../directives/range/range.module";
import { CommonModule } from '@angular/common';
import { CapitalizeModule } from "../../pipes/capitalize/capitalize.module";


@NgModule({
  declarations: [
    Profile
  ],
  imports: [
    IonicPageModule.forChild(Profile),
    RangeModule,
    RegexModule,
    CommonModule,
    CapitalizeModule
  ],
  exports: [
    Profile
  ]
})

export  class ProfileModule {}
