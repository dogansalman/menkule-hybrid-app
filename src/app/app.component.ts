import { Component, ViewChild } from '@angular/core';
import { Platform, ToastController, MenuController, Nav  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { Main } from '../pages/main/main';
import { Login } from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = Main;
  private pages = [
    { title: 'home', component: Login, active: false, icon: 'home' },
    { title: 'seasonal', component: Login, active: false, icon: 'mz-spoon-knife' },
    { title: 'quick and easy', component: Login, active: false, icon: 'mz-cart' },
    { title: 'healthy meals', component: Login, active: false, icon: 'heart' }
  ];
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private network: Network, private toastController: ToastController, private menu: MenuController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      /*
      Enable side menu
       */
      this.menu.enable(true, 'menu1');
      /*
      Watch connection
       */
      this.network.onDisconnect().subscribe(() => {
         let toastr =  this.toastController.create({
          message: 'İnternet bağlantısı bekleniyor...',
          duration: 5000,
          position: 'bottom'
        });
         toastr.present();
       });
    });



  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component)
    // this.nav.push(page, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500});
  }
}

