import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { Register } from './register';
import { RegexModule } from "../../directives/regex/regex.module";
import { RangeModule } from "../../directives/range/range.module";

@NgModule({
  declarations: [
    Register
  ],
  imports: [
    RegexModule,
    RangeModule,
    IonicPageModule.forChild(Register)
  ],
  exports: [
    Register
  ]
})
export class RegisterModule {}
