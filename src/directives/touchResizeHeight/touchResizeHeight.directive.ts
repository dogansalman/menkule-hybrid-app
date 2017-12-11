import { Directive, ElementRef, Input, HostListener, Renderer2, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Directive({
  selector: '[appTouchHeight]'
})

export class TouchResizeHeightDirective implements OnInit{
  public el: any;
  private touchStart: number;
  private currentHeight: number;
  @Input() maxHeight: number;
  @Input() minHeight: number;
  @Input() lenUnit: string;

  constructor(private _ElementRef: ElementRef, private _renderer: Renderer2) {
    this.el = _ElementRef.nativeElement
    this._renderer.setStyle(this.el,'-moz-transition','height .5s');
    this._renderer.setStyle(this.el,'-ms-transition','height .5s');
    this._renderer.setStyle(this.el,'-o-transition','height .5s');
    this._renderer.setStyle(this.el,'-webkit-transition','height .5s');
    this._renderer.setStyle(this.el,'transition','height .5s');
  }


  ngOnInit(): void {

    Observable.fromEvent(this.el, 'touchstart')
      .subscribe( TouchEvent => {
        console.log(TouchEvent);
      })

      Observable.fromEvent(this.el, 'touchmove')
      .debounceTime(100)
      .subscribe( TouchMoveEvent => {
        this._renderer.setStyle(this.el, 'height', this.minHeight + this.lenUnit );
      })


  }

  @HostListener('touchstart', ['$event']) Start(e) {
    this.touchStart = e.changedTouches[0].pageX;
    this.currentHeight = this.el.scrollHeight;
  }



  /*
    @HostListener('touchmove', ['$event']) Move(e) {
    const touchDown = e.changedTouches[0].pageX <= this.touchStart ? true : false;

   // let _he = parseInt(this.minHeight);
   // console.log(this.currentHeight, _he);
    if(touchDown && this.currentHeight > this.minHeight) {
      console.log('donw');
      this.Down();
    }
  }

  */

  Down(): void {
    this.currentHeight = this.currentHeight - 7;
    this._renderer.setStyle(this.el, 'height', this.currentHeight + 'px' );
  }
  Up(): void {
    this.currentHeight = this.currentHeight + 7;
    this._renderer.setStyle(this.el, 'height', this.currentHeight + 'px' );
  }
}
