import { Directive, Output, EventEmitter } from "@angular/core";
import { ApiServices } from "../../services/api/api.services";

@Directive({
  selector: '[appTypes]'
})

export class TypesDirective {

  @Output('types') types : EventEmitter<object> = new EventEmitter<object>();

  constructor(private api: ApiServices) {
    this.api.get('advert/types', {}).then((t) => this.types.emit(t));
  }


}
