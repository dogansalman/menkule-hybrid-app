import environment from '../../environment/environment';

export class UserModel {
  public id?: number;
  public name?: string;
  public lastname?: string;
  public email?: string;
  public gsm?: string;
  public gender: string;
  public photo: string;
  public ownershiping: boolean;
  public advert_size: number;
  public notification_size: number;
  public message_size: number;
  public state: boolean;
  public email_state: boolean;
  public gsm_state: boolean;
  public created_date: Date;
  public full_photo: string;
  public full_name: string;
  public getFullName() {
    return this.name + " " + this.lastname;
  }
  public getFullPhoto() {
    return this.photo ? environment.imageBaseUrl + 'w_150,h_150,c_fill/' +  this.photo : environment.defaultPhoto;
  }

  constructor(user: any) {
    this.id;
    this.name;
    this.lastname;
    this.email;
    this.gsm;
    this.gender;
    this.photo;
    this.ownershiping;
    this.advert_size;
    this.notification_size = 0;
    this.message_size = 0;
    this.state;
    this.email_state;
    this.gsm_state;
    this.created_date;
    Object.assign(this, user);


    this.full_photo = this.getFullPhoto();
    this.full_name = this.getFullName();
  }
}

