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
import { Profile } from "../pages/profile/profile";
import { Notification } from "../pages/notification/notification";
import { AuthServices } from "../services/auth/auth.services";
import { ToastServices } from "../services/toast/toast.services";
import { AlertServices } from "../services/alert/alert.services";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage: any = Main;
  @ViewChild('content') content: Nav;

  /* Menu Side Pages */
  public pages = [
    { title: 'İlan', component: Login, is_event: false, icon: 'ios-home-outline', data: {}},
    { title: 'Rezervasyon', component: Login, is_event: false, icon: 'ios-bookmarks-outline', data: {}},
    { title: 'Mesaj', component: Login, is_event: false, icon: 'ios-mail-outline', data: {}, badge: 'flat_secondary' },
    { title: 'Bildirim', component: Notification, is_event: false, icon: 'ios-notifications-outline', data: {},  badge: 'flat_danger' }
  ];
  public under_pages = [
    { title: 'Hesabım', component: Profile, is_event: false, icon: 'ios-contact-outline' },
    { title: 'Oturumu Kapat', event: 'logOut', is_event: true, icon: 'ios-power-outline' }
  ];
  logOut(): void {
    this.auth.deleteToken()
      .then(() => this.auth.deleteUser())
      .then(() => this.content.setRoot(Main, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500}))
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    !page.is_event ? this.content.push(page.component, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500}) : this[page.event]();

  }

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
            if(token) this.auth.getUser(true).then((user) => { if(token && user ) this.evt.publish('user:login', user);})
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
      // User Logged
      this.evt.subscribe('user:login', (user) => {
        if(user) {
          this.pages.find(p => p.title === 'Bildirim').data = {count: user.notification_size};
          this.pages.find(p => p.title === 'Mesaj').data = {count: 0 };
          // check user state
          this.content.setRoot(user.state ? Tabs : Activation, {is_new: user.hasOwnProperty('is_new')}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500});
        }
      });
  }
}

