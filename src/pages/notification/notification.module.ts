import { NgModule } from "@angular/core";
import { Notification } from "./notification";
import { IonicPageModule } from "ionic-angular";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    Notification
  ],
  imports: [
    IonicPageModule.forChild(Notification),
    CommonModule
  ],
  exports: [
    Notification
  ]
})

export class NotificationModule { }
