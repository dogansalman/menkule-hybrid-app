import { NgModule } from "@angular/core";
import { Adverts } from "./adverts";
import { IonicPageModule } from "ionic-angular";
import { AdvertModule } from "../advert/advert.module";

@NgModule({
  declarations: [
    Adverts
  ],
  imports: [
    IonicPageModule.forChild(Adverts),
    AdvertModule,
  ],
  exports: [
    Adverts
  ]
})

export class  AdvertsModule { }
