import { NgModule } from "@angular/core";
import { Activation } from "./activation";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [
    Activation
  ],
  imports: [
    IonicPageModule.forChild(Activation)
  ],
  exports: [
    Activation
  ]
})

export class ActivationModule { }
