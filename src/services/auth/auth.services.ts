import { Injectable } from "@angular/core";
import {DirectoryEntry, File} from "@ionic-native/file";

@Injectable()
export class AuthServices {

  public token: any = null;
  public user: any = null;

  constructor(private file: File) { }

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
      this.file.writeFile(this.file.cacheDirectory, 'profile.men', user, {append: false, replace: true}).then(() => resolve(user)).catch((err) => reject('Profil bilgisi kayıt edilemedi. Daha sonra tekrar deneyin.'))
    });
  }

  getUser(force = false): any {
    if(!force) return new Promise((resolve, reject) => this.readFile(this.file.cacheDirectory,'profile.men').then((u) => resolve(u)).catch((err) => reject(err)));
    //todo force get user info from api
  }

  deleteUser(): any {
    return new Promise((resolve, reject) => {this.file.checkFile(this.file.cacheDirectory, 'profile.men').then(() => this.file.removeFile(this.file.cacheDirectory,'profile.men')).then(() => resolve(true)).catch((err) => reject(err))});
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
}
