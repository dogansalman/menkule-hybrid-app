import { NgModule } from "@angular/core";
import { TimerComponent } from "./timer";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    IonicPageModule.forChild(TimerComponent)
  ],
  exports: [
    TimerComponent
  ]
})
export class TimerModule {}
