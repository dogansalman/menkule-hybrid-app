import {Injectable} from "@angular/core";
import { LoadingController } from "ionic-angular";

@Injectable()

export  class LoaderServices {
public loading;

constructor(private _load: LoadingController) { }

  showLoading() {
    if(!this.loading){
      this.loading = this._load.create({
        content: 'Lütfen bekleyin...'
      });
      this.loading.present();
    }
  }

  dismissLoading(){
    if(this.loading){
      this.loading.dismiss();
      this.loading = null;
    }
  }

}
