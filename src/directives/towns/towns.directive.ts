import {Directive, Output, Input, EventEmitter, OnChanges} from '@angular/core';
import { ApiServices } from "../../services/api/api.services";


@Directive({
  selector: '[appTowns]'
})

export class TownsDirective implements  OnChanges {

  @Input('selectedCity') selectedCity: string;
  @Output('towns') towns: EventEmitter<object> = new EventEmitter<object>();

  constructor(private api: ApiServices) {  }

  ngOnChanges() {
    //  Emitted Output Town
    if (this.selectedCity.length > 0 && this.selectedCity != 'Seçiniz' && this.selectedCity) {
      this.api.get('cities/' + this.selectedCity, {}).then((t) => this.towns.emit(t));
    } else {
      this.towns.emit([]);
    }
  }
}
