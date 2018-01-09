import environment from '../../environment/environment';
import { City } from "../city/city";
import { Town } from "../town/town";
import { Types } from "../types/types";

export  class Advert {
  public id?: number;
  public adress?: string;
  public user_id?: number;
  public entry_time?: string;
  public exit_time?: string;
  public state?: boolean;
  public views?: number;
  public score?: number;
  public price?: any;
  public min_layover?: number;
  public cancel_time?: number;
  public zoom?: number;
  public latitude?: any;
  public longitude?: any;
  public title?: string;
  public created_date?: Date;
  public updated_date?: Date;
  public city?: City;
  public town?: Town;
  public advert_type?: Types;
  public image?: string;

  public getFullPhoto() {
    return this.image ? environment.imageBaseUrl + 'w_150,h_150,c_fill/' +  this.image : environment.defaultPhoto;
  }
  constructor(advert) {
    this.id;
    this.adress;
    this.user_id;
    this.entry_time;
    this.exit_time;
    this.state;
    this.views;
    this.score;
    this.price;
    this.min_layover;
    this.cancel_time;
    this.zoom;
    this.latitude;
    this.longitude;
    this.title;
    this.created_date;
    this.updated_date;
    this.city;
    this.town;
    this.advert_type;
    this.image;
    Object.assign(this, advert);
    this.image = this.getFullPhoto();
  }
}
