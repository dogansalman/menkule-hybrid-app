import { Injectable } from "@angular/core";
import { File } from "@ionic-native/file";

@Injectable()
export class AuthServices {

  public token: any = null;
  public user: any = null;

  constructor(private file: File) { }

  setToken(token): any {
  return this.file.writeFile(this.file.dataDirectory,'token.tkn',token, { append: false, replace: true });
  }

  getToken(): any {
    return this.readFile(this.file.dataDirectory, 'token.tkn');
  }

  deleteToken(): any {
    return this.file.removeFile(this.file.dataDirectory,'token.tkn');
  }

  setUser(user): any {
    return this.file.writeFile(this.file.dataDirectory, 'profile.prf', user, {append: false, replace: true});
  }

  getUser(force = false): any {
    if(!force) return this.readFile(this.file.dataDirectory,'profile.prf');
    alert('get api');
  }

  deleteUser(): void {
    this.file.removeFile(this.file.dataDirectory,'profile.prf');
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


