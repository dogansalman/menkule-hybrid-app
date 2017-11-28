import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Register } from '../register/register';
import { Forgot } from '../forgot/forgot';
import { Search } from '../search/search';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class Login implements OnInit{

  constructor(public navCtrl: NavController, public SplashScreen: SplashScreen, public platform: Platform) {
  }
  ngOnInit() {
  }

  ngAfterViewInit(){
    this.platform.ready().then(() => {
      this.SplashScreen.hide();
    });
  }

  onRegister(): void {
    this.navCtrl.push(Register, {},{animate:true, animation:'md-transition', direction: 'none', duration:500});
  }

  onSwipeRight(e) {
    if (e.direction == 2) {
    //  this.navCtrl.push(Search, {},{animate:true, direction: 'forward', duration:500});
    }
  }
  onSearch() {
    this.navCtrl.push(Search, {}, {animate: true, direction: 'forward', duration: 500});
  }
  onForgot(): void {
    this.navCtrl.push(Forgot, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500});
  }
}
