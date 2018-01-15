import { NgModule } from "@angular/core";
import { TypesDirective } from "./types.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TypesDirective
  ],
  exports: [
    TypesDirective
  ]
})
export class TypesModule { }
