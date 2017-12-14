import {Component} from "@angular/core";
import { ViewController } from "ionic-angular";

@Component({
  selector: 'filter',
  templateUrl: 'filter.html'
})
export class Filter {
  constructor(public viewCtrl: ViewController) {}
  dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
