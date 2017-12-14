import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import { PlacesModule } from "../../../components/places/places.module";
import {Filter} from "./filter";

@NgModule({
  declarations: [
    Filter
  ],
  imports:[
    IonicPageModule.forChild(Filter),
    PlacesModule
  ],
  exports:[
    Filter
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FilterModule { }
