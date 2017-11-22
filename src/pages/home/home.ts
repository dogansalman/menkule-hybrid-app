import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Register } from '../register/register';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

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
    this.navCtrl.push(Register, {},{animate:true, animation:'md-transition', direction: 'none', duration:1000});
  }

  swipeEvent(e) {
    if (e.direction == 2) {
      alert('tested');
    }
  }

}
