import {Component, OnInit} from "@angular/core";
import { ApiServices } from "../../../services/api/api.services";
import { AdvertModel } from "../../../models/advert/advert";
import { Advert } from "../advert/advert";
import { ModalController } from "ionic-angular";
import { Renderer2 } from "@angular/core";

@Component({
  selector: 'adverts',
  templateUrl: 'adverts.html'
})

export class Adverts implements OnInit{
  public adverts: any[] = [];
  public no_adverts: boolean = false;
  constructor(private api: ApiServices, private modalController: ModalController, private ren: Renderer2) {
    this.api.get('adverts', {}).then((_adverts) => {
      _adverts.forEach(a => { this.adverts.push(new AdvertModel(a))});
      this.no_adverts = _adverts.length === 0;
    }).catch(() => this.no_adverts = true)
  }
  ngOnInit(): void { }

  onAddAdvert(): void {
    // fix ionic native maps displaying
    this.ren.setStyle(document.getElementsByTagName("ng-component")[0],'opacity','0');
    let modal = this.modalController.create(Advert);
    modal.onDidDismiss(() => {
      this.ren.setStyle(document.getElementsByTagName("ng-component")[0],'opacity','1');
    });
    modal.present();
  }
}
