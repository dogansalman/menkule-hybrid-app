import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Pages
import { MyApp } from './app.component';
import { Main } from '../pages/main/main';
import { Register } from '../pages/register/register';
import { Forgot } from '../pages/forgot/forgot';
import { Search } from '../pages/search/search';
import { Login } from '../pages/login/login';
// Custom components
import { Map} from '../components/map/map';
import { Places } from '../components/places/places';
// Directives
import { fillHeightDirective } from '../directives/fillHeight/fillHeight.directive';
import { IonicSwipeAllModule } from 'ionic-swipe-all';


import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    Main,
    Register,
    Forgot,
    Search,
    Login,
    Map,
    Places,
    fillHeightDirective,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      scrollAssist: true,
      autoFocusAssist: true,
      inputBlurring: false,
    }),
    IonicSwipeAllModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Main,
    Register,
    Forgot,
    Search,
    Login,
    Map
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network

  ]
})
export class AppModule {}
