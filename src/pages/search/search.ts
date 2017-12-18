import { Component, OnInit } from '@angular/core';
import { ModalController } from "ionic-angular";
import { Filter } from "./filter/filter";
import { NavController } from 'ionic-angular';

@Component({
    selector: 'search',
    templateUrl: 'search.html'
})

export class Search implements OnInit {

    constructor(public modalController: ModalController, private Nav: NavController) { }

    ngOnInit(): void { }

    onOpenModal() {
      let modal = this.modalController.create(Filter);
      modal.present();
    }
}
