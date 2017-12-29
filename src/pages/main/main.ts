import { AfterViewInit, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Register } from '../register/register';
import { Forgot } from '../forgot/forgot';
import { Login } from '../login/login';
import { Search } from '../search/search';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform } from 'ionic-angular';
import { User } from "../../interfaces/user/iuser";

@Component({
  selector: 'main',
  templateUrl: 'main.html'
})
export class Main implements  AfterViewInit{

  constructor(public navCtrl: NavController, public SplashScreen: SplashScreen, public platform: Platform) {  }


  ngAfterViewInit(){

    // TODO Interfaces

    /* Interfaces Kullanımı */
    /*
    Direkt obje merge edilebiliyor.
    function yazamadık !
    devam edilecek.

    * */
    const user: User = {name: 'dogan', lastname: 'salman', photo: 'uu'};
    console.log(user);

    this.platform.ready().then(() => {
      this.SplashScreen.hide();
    });
  }
  onLogin(): void {
    this.navCtrl.push(Login, {}, {animate:true, animation:'md-transition', direction: 'none', duration:500});
  }
  onRegister(): void {
    this.navCtrl.push(Register, {},{animate:true, animation:'md-transition', direction: 'none', duration:500});
  }
  onSwipeRight(e) {
    if (e.direction == 2) {
      this.navCtrl.push(Search, {},{animate:true, direction: 'forward', duration:500});
    }
  }
  onForgot(): void {
    this.navCtrl.push(Forgot, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500});
  }
}
