import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";

@Injectable()
export class ToastServices {
  constructor(private toastr: ToastController) { }

  showToast(message, duration, position): void {
    let toastr =  this.toastr.create({
      message: message,
      duration: duration,
      position: position
    });
    toastr.present();
  }
}
