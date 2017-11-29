import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { Main } from '../pages/main/main';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Main;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, keyboard: Keyboard) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      keyboard.disableScroll(true);
    });
  }

}

