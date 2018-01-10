import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { Location } from "./location";
import { IonicPageModule } from "ionic-angular";
import { MapModule } from "../../../components/map/map.module";

@NgModule({
  declarations: [
    Location
  ],
  imports: [
    IonicPageModule.forChild(Location),
    MapModule
  ],
  exports: [
    Location
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LocationModule { }
