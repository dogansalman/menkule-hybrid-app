import {Directive, Output, EventEmitter, OnInit, HostListener} from '@angular/core';
import { ApiServices } from "../../services/api/api.services";

@Directive({
  selector: '[appCities]'
})

export class CitiesDirective implements OnInit {
  @Output('cities') cities: EventEmitter<object> = new EventEmitter<object>();

  constructor(private api: ApiServices) { }

  @HostListener('change', ['$event'])
  change($event: any) {
    $event.preventDefault();
  }

  ngOnInit() {
    this.api.get('cities', {}).then((c) => this.cities.emit(c));
  }
}
