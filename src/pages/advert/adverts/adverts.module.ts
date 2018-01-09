import { NgModule } from "@angular/core";
import { Adverts } from "./adverts";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [
    Adverts
  ],
  imports: [
    IonicPageModule.forChild(Adverts)
  ],
  exports: [
    Adverts
  ]
})

export class  AdvertsModule { }
