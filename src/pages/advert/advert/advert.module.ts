import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { Advert } from "./advert";
import { IonicPageModule } from "ionic-angular";
import { MapModule } from "../../../components/map/map.module";
import { LocationModule } from "../location/location.module";
import { CitiesModule } from "../../../directives/cities/cities.module";
import { TownsModule } from "../../../directives/towns/towns.module";

@NgModule({
  declarations: [
    Advert
  ],
  imports: [
    IonicPageModule.forChild(Advert),
    MapModule,
    LocationModule,
    CitiesModule,
    TownsModule
  ],
  exports: [
    Advert
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdvertModule { }
