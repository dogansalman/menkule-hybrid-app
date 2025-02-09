import { Injectable } from "@angular/core";
import { File } from "@ionic-native/file";
import { HTTP } from "@ionic-native/http";
import { UserModel } from "../../models/user/user";
import { INotification } from '../../interface/notifications/notification'
import  environment from '../../environment/environment';

@Injectable()
export class AuthServices {

  public token: any = null;
  public user: UserModel;
  public notify: INotification = { notification: 0, message: 0 };

  constructor(private file: File, private http: HTTP) { }

  setToken(token): any {
    return new Promise((resolve, reject) => {
     this.file.writeFile(this.file.cacheDirectory,'token.men',token, { append: false, replace: true }).then((e) => resolve(e)).catch((err) => reject('Üzgünüz. Token kayıt edilemedi. Daha sonra tekrar deneyin.'))
    });
  }

  getToken(): any {
    return new Promise((resolve, reject) => {
      this.readFile(this.file.cacheDirectory, 'token.men').then((t) => resolve(t)).catch((err) => reject(err))
    });
  }

  deleteToken(): any {
    return new Promise((resolve, reject) => {
      this.file.checkFile(this.file.cacheDirectory, 'token.men')
        .then(() => this.file.removeFile(this.file.cacheDirectory,'token.men'))
        .then(() => resolve())
        .catch((err) => reject(err));
    })
  }

  setUser(user): any {
    return new Promise((resolve,reject) => {
      this.file.writeFile(this.file.cacheDirectory, 'profile.men', user, {append: false, replace: true})
        .then(() => {
          this.user = new UserModel(user);
          this.notify.message = this.user.message_size;
          this.notify.notification = this.user.notification_size;
          resolve(user);
        })
        .catch((err) => reject('Profil bilgisi kayıt edilemedi. Daha sonra tekrar deneyin.'))
    });
  }

  getUser(force = false): any {
    if(!force) {
      return new Promise((resolve, reject) => this.readFile(this.file.cacheDirectory,'profile.men').then((u) => resolve(u)).catch((err) => reject(err)));
    }
    return this.getForceUser();
  }

  deleteUser(): any {
    return new Promise((resolve, reject) => {
      this.file.checkFile(this.file.cacheDirectory, 'profile.men')
        .then(() => this.file.removeFile(this.file.cacheDirectory,'profile.men'))
        .then(() => resolve())
        .catch((err) => reject(err));
    })
  }

  readFile(directoryPath: any, filename: string): any {
    return new Promise((resolve,reject) => {
      this.file.checkFile(this.file.cacheDirectory, filename)
        .then(() => {
          this.file.resolveDirectoryUrl(directoryPath).then((de) => {
            this.file.getFile(de,filename, { create: false}).then((fe) => {

              this.read(fe).then((s) =>  resolve(s));
            }).catch((err) => reject(err))
          }).catch((err) => reject(err))
        })
        .catch(() => resolve(null));
    });
  }

  read(fileEntity: any): any {
    return new Promise((resolve) => {
    const reader = new FileReader();
     fileEntity.file((file) => {
       reader.onloadend = function() {
         const _data = () => { try { return JSON.parse(this.result)} catch(e) { return null }};
         resolve(_data());
       };
       reader.readAsText(file);
     }, null);
    });
  }

  getForceUser(): any {
    return new Promise((resolve, reject) => {
      this.getToken()
        .then((token) => this.http.get(environment.apiUrl + '/users', {}, { Authorization: 'Bearer ' + token.access_token }))
        .then((result) => this.tryToParse(result.data))
        .then((user) => this.setUser(user))
        .then((user) => {resolve(user)})
        .catch((err) => reject(err))
    })
  }
  tryToParse(str): any {
    return new Promise((resolve) => {
      const _data = () => { try { return JSON.parse(str)} catch(e) { return null }};
      resolve(_data());
    })
  }

}


