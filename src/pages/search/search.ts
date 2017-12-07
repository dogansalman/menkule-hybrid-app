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
    public onSwipedMap = false;

    constructor(public navCtrl: NavController) { }

    ngOnInit(): void { }

    onInput(e): void { }
    onCancel(e): void { }

    onSwipeMap(event: any, swipe): any {
      this.onSwipedMap = swipe;
      alert(swipe);
    }
}
