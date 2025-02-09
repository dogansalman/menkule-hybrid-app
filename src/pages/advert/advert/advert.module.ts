import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { Advert } from "./advert";
import { IonicPageModule } from "ionic-angular";
import { LocationModule } from "../location/location.module";
import { CitiesModule } from "../../../directives/cities/cities.module";
import { TownsModule } from "../../../directives/towns/towns.module";
import { TypesModule } from "../../../directives/types/types.module";

@NgModule({
  declarations: [
    Advert
  ],
  imports: [
    IonicPageModule.forChild(Advert),
    LocationModule,
    CitiesModule,
    TownsModule,
    TypesModule
  ],
  exports: [
    Advert
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdvertModule { }
