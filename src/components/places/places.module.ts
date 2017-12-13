import { NgModule} from "@angular/core";
import { Places } from "./places";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [
    Places
  ],
  imports: [
    IonicPageModule.forChild(Places)
  ],
  exports: [
    Places
  ]
})
export class PlacesModule {}
