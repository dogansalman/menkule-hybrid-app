import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { Search } from "./search";
import { MapModule } from "../../components/map/map.module";
import { PlacesModule } from "../../components/places/places.module";


@NgModule({
  declarations: [
    Search
  ],
  imports: [
    IonicPageModule.forChild(Search),
    MapModule,
    PlacesModule
  ],
  exports: [
    Search
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SearchModule {}
