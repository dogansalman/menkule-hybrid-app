import { Component } from "@angular/core";
import { ToastServices } from "../../../services/toast/toast.services";
import { ViewController, NavParams, Events } from "ionic-angular";


@Component({
  selector: 'location',
  templateUrl: 'location.html'
})

export class Location {

  public selectedPosition: any = null;
  public position: any;
  constructor(private toast: ToastServices, private view: ViewController, private param: NavParams, private evt: Events) {
    this.position = param.get('position');
  }

  dismiss(): void {
    this.view.dismiss();
  }
  onSelectLocation(): void {
    if(this.selectedPosition) this.evt.publish('map:marker', this.selectedPosition) && this.dismiss();
  }
}
