import { Observable} from "rxjs/Observable";
import { HTTP } from "@ionic-native/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { subscribeOn } from "rxjs/operator/subscribeOn";
import { Injectable } from "@angular/core";
import { LoaderServices } from "../loader/loader.services";
import { AuthServices } from "../auth/auth.services";

@Injectable()
export class ApiServices {

  private apiUrl = 'https://webapi.menkule.com.tr';

  constructor(private http: HTTP, private loader : LoaderServices, private auth: AuthServices ) { }

  post(url: string, data: any, header: any): any {
    this.loader.showLoading();
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/' + url, data, header).then((result) => {
        resolve( JSON.parse(result.data));
      }).catch((err) => {
        reject(err);
      }).then(() =>  this.loader.dismissLoading());
    })
  }


  get(url: string, header: any): any {
    return new Promise((resolve, reject) => {
      this.auth.getToken().then((token) => new Promise((resolve) => resolve( token ? Object.assign({ Authorization: 'Bearer ' + token.access_token }) : header)))
        .then((_header) => this.http.get(this.apiUrl + '/' + url, {}, _header))
        .then((result) => resolve( JSON.parse(result.data)))
        .catch((err) => reject(err))
    })
  }
}
