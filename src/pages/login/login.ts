import { Component, OnInit, ViewChildren } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Forgot } from '../forgot/forgot';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class Login implements OnInit {
    shouldHeight = document.body.clientHeight + 'px' ;
    @ViewChildren('mail') mailInput;
    constructor(public navCtrl: NavController) { }

    ngAfterViewInit() {    
        // auto focus input        
       // this.mailInput.first.nativeElement.focus();
    }
    
    ngOnInit(): void { 
       
    }

    onForgot(): void {
        this.navCtrl.push(Forgot, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500});
    }

}