import {Directive, Output, EventEmitter, OnInit, HostListener} from '@angular/core';
import cities from '../../environment/cities';
@Directive({
  selector: '[appCities]'
})

export class CitiesDirective implements OnInit {
  @Output('cities') cities: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  @HostListener('change', ['$event'])
  change($event: any) {
    $event.preventDefault();
  }

  ngOnInit() {
    this.cities.emit(cities);
  }
}
