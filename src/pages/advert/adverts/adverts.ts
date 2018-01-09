import {Component, OnInit} from "@angular/core";
import { ApiServices } from "../../../services/api/api.services";
import { Advert } from "../../../class/advert/advert";

@Component({
  selector: 'adverts',
  templateUrl: 'adverts.html'
})

export class Adverts implements OnInit{
  public adverts: any[] = [];
  public no_adverts: boolean = false;
  constructor(private api: ApiServices) {
    this.api.get('adverts', {}).then((_adverts) => {
      _adverts.forEach(a => { this.adverts.push(new Advert(a))});
      this.no_adverts = _adverts.length === 0;
    }).catch(() => this.no_adverts = true)
  }
  ngOnInit(): void { }
}
