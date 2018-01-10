import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { Advert } from "./advert";
import { IonicPageModule } from "ionic-angular";
import { MapModule } from "../../../components/map/map.module";
import { LocationModule } from "../location/location.module";

@NgModule({
  declarations: [
    Advert
  ],
  imports: [
    IonicPageModule.forChild(Advert),
    MapModule,
    LocationModule
  ],
  exports: [
    Advert
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdvertModule { }
