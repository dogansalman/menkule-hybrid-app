import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: 'search.html'
})

export class Search implements OnInit {
    /*
    Swipe state for maps
     */
    public swipeDown = true;

    constructor() { }

    ngOnInit(): void { }
    onInput(e): void { }
    onCancel(e): void { }

    onChangeMapHeight(): void {
      this.swipeDown = (this.swipeDown ? false : true);
      window.dispatchEvent(new Event('resize'));
    }
}
