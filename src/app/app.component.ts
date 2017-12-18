import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, AlertController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Network } from '@ionic-native/network';
import { Main } from '../pages/main/main';
import { Login } from "../pages/login/login";
import { ToastServices } from "../services/toast/toast.services";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = Main;
  public pages = [
    { title: 'İlan', component: Login, active: false, icon: 'ios-home-outline' },
    { title: 'Rezervasyon', component: Login, active: false, icon: 'ios-bookmarks-outline' },
    { title: 'Mesaj', component: Login, active: false, icon: 'ios-mail-outline', data: { count: 0}, badge: 'flat_secondary' },
    { title: 'Bildirim', component: Login, active: false, icon: 'ios-notifications-outline', data: { count: 0},  badge: 'flat_danger' }
  ];
  public under_pages = [
    { title: 'Hesabım', component: Login, active: false, icon: 'ios-contact-outline' },
    { title: 'Oturumu Kapak', component: Login, active: false, icon: 'ios-power-outline' }
  ];

  @ViewChild('content') content: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private network: Network,
              private _toast: ToastServices, private menu: MenuController, private diagonistic: Diagnostic, private alertController: AlertController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      if(platform.is('cordova')) {
        /* Check location settings */
        this.diagonistic.isLocationAvailable().then((state) => {
          if(!state){
            this._toast.showToast('Lütfen konum hizmetini aktif edin.', 5000, 'bottom');
            this.openConfirmAlert('Uyarı', 'Konumunuzu hemen aktif etmek istiyor musunuz ?').then(() => this.diagonistic.switchToLocationSettings());
          }
        });
        /* Watch connection */
        this.network.onDisconnect().subscribe(() => this._toast.showToast('İnternet bağlantısı bekleniyor...', 5000, 'bottom'));
      }

      /* Enable side menu */
      this.menu.enable(true, 'menu1');

    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
     this.content.push(page.component, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500});
  }

  openConfirmAlert(title, message) {
     return new Promise((resolve, reject) => {
       let alert = this.alertController.create({
         title: title,
         message: message,
         buttons: [
           { text: 'Kapat', role: 'cancel', handler: () => { }},
           { text: 'Tamam', handler: () => { resolve() }},
         ]
       });
       alert.present();
     })


  }

}

