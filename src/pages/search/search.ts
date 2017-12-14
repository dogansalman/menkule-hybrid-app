import { Component, OnInit } from '@angular/core';
import { ModalController } from "ionic-angular";
import { Filter } from "./filter/filter";

@Component({
    selector: 'search',
    templateUrl: 'search.html'
})

export class Search implements OnInit {

    constructor(public modalController: ModalController) { }

    ngOnInit(): void { }

    onOpenModal() {
      let modal = this.modalController.create(Filter);
      modal.present();
    }
}
