import { Injectable } from "@angular/core";
import { File } from "@ionic-native/file";

@Injectable()
export class AuthServices {

  public token: any = null;
  public user: any = null;

  constructor(private file: File) { }

  setToken(token): any {
  return this.file.writeFile(this.file.dataDirectory,'token.mkl',token, { append: false, replace: true });
  }

  getToken(): any {
    return this.readFile(this.file.dataDirectory, 'token.mkl');
  }

  deleteToken(): any {
    return new Promise((resolve, reject) => {
      this.file.checkFile(this.file.dataDirectory, 'token.mkl')
        .then(() => this.file.removeFile(this.file.dataDirectory,'token.mkl'))
        .then(() => resolve())
        .catch((err) => reject(err));
    })

  }

  setUser(user): any {
    return this.file.writeFile(this.file.dataDirectory, 'profile.mkl', user, {append: false, replace: true});
  }

  getUser(force = false): any {
    if(!force) return this.readFile(this.file.dataDirectory,'profile.mkl');
    //todo force get user info from api
  }

  deleteUser(): any {
    return this.file.checkFile(this.file.dataDirectory, 'profile.mkl').then(() => this.file.removeFile(this.file.dataDirectory,'profile.mkl'));
  }

  readFile(directoryPath: any, filename: string): any {

    return  new Promise((resolve,reject) => {
      this.file.checkFile(this.file.dataDirectory, filename)
        .then(() => {
          this.file.resolveDirectoryUrl(directoryPath).then((de) => {
            this.file.getFile(de,filename, { create: false}).then((fe) => {
              const reader = new FileReader();
              fe.file((file) => {
                reader.onloadend = function() {
                  const _data = () => { try { return JSON.parse(this.result)} catch(e) { return null }};
                  resolve(_data());
                };
                reader.readAsText(file)
              })
            }).catch((err) => reject(err))
          }).catch((err) => reject(err))
        })
        .catch(() => resolve(null));
    });
  }

}


