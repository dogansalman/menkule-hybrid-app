import {Directive, Output, Input, EventEmitter, OnChanges, HostListener} from '@angular/core';
import { ApiServices } from "../../services/api/api.services";
import { HTTP } from "@ionic-native/http";

@Directive({
  selector: '[appTowns]'
})

export class TownsDirective implements  OnChanges {

  @Input('selectedCity') selectedCity: string;
  @Output('towns') towns: EventEmitter<object> = new EventEmitter<object>();
  @Output('townPosition') townPosition: EventEmitter<object> = new EventEmitter<object>();
  private townList: any;

  constructor(private api: ApiServices, private http: HTTP) {  }

  ngOnChanges() {
    //  Emitted Output Town
    if (this.selectedCity.length > 0 && this.selectedCity != 'Seçiniz' && this.selectedCity) {
      this.api.get('cities/' + this.selectedCity, {}).then((t) => {
        this.towns.emit(t);
        this.townList = t;
      });
    } else {
      this.towns.emit([]);
    }
  }
  @HostListener('ionChange', ['$event'])
  ionChange(town_id: number) {
    const t = this.townList.find(t => t.id === Number(town_id));
    if(!t) return;
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + t.name, {}, {}).then((result) => {
      const viewportData = JSON.parse(result.data).results;
      this.townPosition.emit({'lat': viewportData[0].geometry.location.lat, 'lng': viewportData[0].geometry.location.lng })
    })
  }
}
