import { Injectable} from "@angular/core";
import {AlertController} from "ionic-angular";

@Injectable()
export class AlertServices {

  constructor(private alert: AlertController) { }

  confirm(message: string, title: string): any {
    return new Promise((resolve) => {
      let a = this.alert.create({
        title: title,
        message: message,
        buttons: [
          {text: 'İptal', role: 'cancel', handler: () => {}},
          {text: 'Tamam', handler: () => {resolve(true)}}
        ]
      });
      a.present();
    })
  }
}
