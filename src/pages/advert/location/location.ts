import { Component } from "@angular/core";
import { ToastServices } from "../../../services/toast/toast.services";
import { ViewController } from "ionic-angular";


@Component({
  selector: 'location',
  templateUrl: 'location.html'
})

export class Location {

  constructor(private toast: ToastServices, private view: ViewController) {}

  dismiss(): void {
    this.view.dismiss();
  }
}
