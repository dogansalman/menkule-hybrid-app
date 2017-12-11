import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'search',
    templateUrl: 'search.html'
})

export class Search implements OnInit {
    /*
    Swipe state for maps
     */
    public swipeDown = true;

    constructor(public navCtrl: NavController) { }

    ngOnInit(): void { }
    onInput(e): void { }
    onCancel(e): void { }

    onChangeMapHeight(): void {
      this.swipeDown = (this.swipeDown ? false : true);
    }
}
