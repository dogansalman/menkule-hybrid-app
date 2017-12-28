import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";

@Injectable()
export class ToastServices {
  constructor(private toastr: ToastController) { }

  showToast(message, duration, position, error = true): void {
    let toastr =  this.toastr.create({
      message: message,
      duration: duration,
      position: position,
      cssClass: error ? 'toast_err': 'toast_success'

    });
    toastr.present();
  }
}
