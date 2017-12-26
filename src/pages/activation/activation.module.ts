import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { Activation } from "./activation";
import { IonicPageModule } from "ionic-angular";
import { TimerModule } from "../../components/timer/timer.module";

@NgModule({
  declarations: [
    Activation
  ],
  imports: [
    IonicPageModule.forChild(Activation),
    TimerModule
  ],
  exports: [
    Activation
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class ActivationModule { }
