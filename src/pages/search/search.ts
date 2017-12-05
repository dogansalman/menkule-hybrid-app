import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'search',
    templateUrl: 'search.html'
})

export class Search implements OnInit {

    constructor(public navCtrl: NavController) { }

    ngOnInit(): void { }

    onInput(e): void { }
    onCancel(e): void { }

}
