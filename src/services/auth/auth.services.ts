import { Injectable } from "@angular/core";
import { NativeStorage } from "@ionic-native/native-storage";
import {File} from "@ionic-native/file";

@Injectable()
export class AuthServices {

  public token: any = null;
  public user: any = null;

  constructor(private nativeStorage: NativeStorage, private file: File) { }

  setToken(token): any {
  return this.file.writeFile(this.file.dataDirectory,'token6.tkn',token, { append: false, replace: true });
  }

  getToken(): any {
    return this.readFile(this.file.dataDirectory, 'token6.tkn');
  }

  deleteToken(): void {
    this.nativeStorage.remove('token');
  }

  setUser(user): any {
    return this.nativeStorage.setItem('user', user);
  }
  getUser(force = false): any {
    if(!force) return this.nativeStorage.getItem('user').then( data => data, error => error)
    alert('get api');
  }
  deleteUser(): void {
    this.nativeStorage.remove('user');
  }

  readFile(directoryPath: any, filename: string): any {
    return  new Promise((resolve,reject) => {
      this.file.resolveDirectoryUrl(directoryPath).then((de) => {
        this.file.getFile(de,filename, { create: false}).then((fe) => {
          const reader = new FileReader();
          fe.file((file) => {
            reader.onloadend = function() {
             resolve(this.result);
            };
            reader.readAsText(file)
          })
        }).catch((err) => reject(err))
      }).catch((err) => reject(err))
    });
  }
}
