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
    public swipeDown = false;

    constructor(public navCtrl: NavController) { }

    ngOnInit(): void { }

    onInput(e): void { }
    onCancel(e): void { }

    onSwipeSearch(event: any, isDown: boolean): any {
      this.swipeDown = isDown;
    }
}
