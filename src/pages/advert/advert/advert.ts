import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastServices } from "../../../services/toast/toast.services";
import { ApiServices } from "../../../services/api/api.services";
import { ViewController } from "ionic-angular";
import { ModalController } from "ionic-angular";
import { Renderer2 } from "@angular/core";
import { Location } from "../location/location";

@Component({
  selector: 'advert',
  templateUrl: 'advert.html'
})

export class Advert {
  public advertForm: FormGroup;

  constructor(private api: ApiServices, private toast: ToastServices, private fb: FormBuilder, private view: ViewController, private modalController: ModalController, private ren: Renderer2) {}

  dismiss(): void {
    this.view.dismiss();
  }
  onAddLocation(): void {
    // fix ionic native maps displaying
    this.ren.setStyle(document.getElementsByTagName("ion-modal")[0],'opacity','0');
    let modal = this.modalController.create(Location);
    modal.onDidDismiss(() => {
      this.ren.setStyle(document.getElementsByTagName("ion-modal")[0],'opacity','1');
    });
    modal.present();
  }
}
