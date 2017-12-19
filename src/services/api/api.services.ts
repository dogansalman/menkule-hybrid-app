import { Observable} from "rxjs/Observable";
import { HTTP } from "@ionic-native/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { subscribeOn } from "rxjs/operator/subscribeOn";
import { Injectable } from "@angular/core";
import { LoaderServices } from "../loader/loader.services";
import { ToastServices } from "../toast/toast.services";

@Injectable()
export class ApiServices {

  private apiUrl = 'https://webapi.menkule.com.tr';

  constructor(private http: HTTP, private loader : LoaderServices ) { }

  post(url: string, data: any, header: any): any {
    this.loader.showLoading();
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/' + url, data, header).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      }).then(() =>  this.loader.dismissLoading());
    })
  }
}
