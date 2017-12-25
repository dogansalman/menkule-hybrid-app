import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, Events  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Network } from '@ionic-native/network';
import { Main } from '../pages/main/main';
import { Login } from "../pages/login/login";
import { Activation } from "../pages/activation/activation";
import { Tabs } from "../pages/tabs/tabs";
import { AuthServices } from "../services/auth/auth.services";
import { ToastServices } from "../services/toast/toast.services";
import { AlertServices } from "../services/alert/alert.services";


@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage: any = Activation;
  imageBaseUrl : string = "https://res.cloudinary.com/www-menkule-com-tr/image/upload/";

  /* User Info */
  public user: any = {
    "id": null,
    "name": null,
    "lastname": null,
    "email": null,
    "gsm": null,
    "gender": null,
    "photo": null,
    "ownershiping": false,
    "advert_size": 0,
    "notification_size": 0,
    "state": false,
    "email_state": false,
    "gsm_state": false,
    "created_date": null
  };

  /* Menu Side Pages */
  public pages = [
    { title: 'İlan', component: Login, is_event: false, icon: 'ios-home-outline' },
    { title: 'Rezervasyon', component: Login, is_event: false, icon: 'ios-bookmarks-outline' },
    { title: 'Mesaj', component: Login, is_event: false, icon: 'ios-mail-outline', data: { count: 0}, badge: 'flat_secondary' },
    { title: 'Bildirim', component: Login, is_event: false, icon: 'ios-notifications-outline', data: { count: this.user.notification_size},  badge: 'flat_danger' }
  ];
  public under_pages = [
    { title: 'Hesabım', component: Login, is_event: false, icon: 'ios-contact-outline' },
    { title: 'Oturumu Kapat', event: 'menuLogout', is_event: true, icon: 'ios-power-outline' }
  ];

  menuLogout(): void {
    this.auth.deleteToken();
    this.auth.deleteUser();
    this.content.setRoot(Main, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500});
  }

  @ViewChild('content') content: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private network: Network,
              private menu: MenuController,
              private diagonistic: Diagnostic,
              public  auth: AuthServices,
              private alert: AlertServices,
              private _toast: ToastServices,
              private evt: Events) {



    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      if(platform.is('cordova')) {

        /* Set root page with authentication */
        this.auth.getToken().then((token) => {
          this.auth.getUser().then((user) => {
            if(token && user) this.rootPage = Tabs && this.evt.publish('user:login', user);
          })
        }).catch((err) =>  this.rootPage =  Main);

        /* Check location settings */
        this.diagonistic.isLocationAvailable().then((state) => {
          if(!state){
            this._toast.showToast('Lütfen konum hizmetini aktif edin.', 10000, 'bottom');
            this.alert.confirm('Konumunuzu hemen aktif etmek istiyor musunuz ?', 'Uyarı').then(() => this.diagonistic.switchToLocationSettings());
          }
        });

        /* Check connection*/
        if( this.network.type === 'none') this._toast.showToast('İnternet bağlantısı bekleniyor...', 10000, 'bottom');
        /* Watch connection */
        this.network.onDisconnect().subscribe(() => this._toast.showToast('İnternet bağlantısı bekleniyor...', 10000, 'bottom'));
      }

      /* Enable side menu */
      this.menu.enable(true, 'menu1');

    });

    /* Event listeners */
    this.evt.subscribe('user:login', (user) => {
      if(user) {
        // set user
        Object.assign(this.user, user);
        // check user state
        this.content.setRoot(user.state ? Tabs : Activation, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500});
      }
    });

  }


  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    !page.is_event ? this.content.push(page.component, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500}) : this[page.event]();

  }

}

