import { HTTP } from "@ionic-native/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from "@angular/core";
import { LoaderServices } from "../loader/loader.services";
import { AuthServices } from "../auth/auth.services";
import { ToastServices } from "../toast/toast.services";
import { Network } from "@ionic-native/network";


@Injectable()
export class ApiServices {

  private apiUrl = 'https://webapi.menkule.com.tr';

  constructor(private http: HTTP, private loader : LoaderServices, private auth: AuthServices, private network: Network, private toast: ToastServices) { }

  post(url: string, data: any, header: any): any {

    this.loader.showLoading();
    return new Promise((resolve, reject) => {
      this.auth.getToken().then((token) => new Promise((resolve) => resolve( token ? Object.assign({ Authorization: 'Bearer ' + token.access_token }) : header)))
        .then((header) => this.http.post(this.apiUrl + '/' + url, data, header) )
        .then((result) => {
          const _data = () => { try { return JSON.parse(result.data)} catch(e) { return null }};
          resolve(_data());
        })
        .catch((err) => {
          console.log(err);
          this.network.type === 'none' ? reject(this.handleError({status: 1})) : reject(this.handleError(err));
        })
        .then(() =>  this.loader.dismissLoading());
    })
  }
  get(url: string, header: any): any {
    if(this.network.type === 'none') return this.toast.showToast('İnternet bağlantısı bekleniyor...', 2000, 'bottom');
    this.loader.showLoading();
    return new Promise((resolve, reject) => {
       this.auth.getToken().then((token) => new Promise((resolve) => resolve( token ? Object.assign({ Authorization: 'Bearer ' + token.access_token }) : header)))
        .then((_header) => this.http.get(this.apiUrl + '/' + url, {}, _header))
        .then((result) => {
          const _data = () => { try { return JSON.parse(result.data)} catch(e) { return null }};
          resolve(_data());
        })
        .catch((err) => {
          console.log(err);

          if(this.handleError(err)) this.toast.showToast(this.handleError(err),3000, 'bottom');
          reject(err);
        })
        .then(() =>  this.loader.dismissLoading())
    })
  }
  handleError(error): any {
   return this.errors[error.status] ? this.errors[error.status] : this.getErrorMessage(error);
  }
  getErrorMessage(err): any {
    if(err.hasOwnProperty('error')) {
      const errMsg = () => { try { return JSON.parse(err.error).Message } catch(e) { return null }};
      return errMsg();
    }
    return null;
  }

  private errors = {
    401: 'Bu işlem için yetki bulunamadı.',
    500: 'Lütfen daha sonra tekrar deneyin.',
    0:  'Üzgünüz. Servis yanıt vermedi veya istek hatalı daha sonra tekar deneyin.',
    1:  'İnternet bağlantısı bekleniyor...'
  }
}
