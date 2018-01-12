import {Directive, Output, Input, EventEmitter, OnInit, OnChanges} from '@angular/core';
import cities from '../../environment/cities';
import {Observable} from 'rxjs/Rx';

@Directive({
  selector: '[appTowns]'
})

export class TownsDirective implements OnInit, OnChanges {

  @Input('selectedCity') selectedCity: string;
  @Output('towns') towns: EventEmitter<object> = new EventEmitter<object>();

  constructor() {  }

  ngOnChanges() {
    //  Emitted Output Town
    if (this.selectedCity.length > 0 && this.selectedCity[0] != 'Seçiniz' && this.selectedCity) {
      /*
      Production moda geçene kadar timeout kullanılacak.
       */
      setTimeout(() => this.towns.emit(cities.filter(t => t.city.name === this.selectedCity)[0].towns), 1500)
    }
  }

  ngOnInit() {
  }

}
