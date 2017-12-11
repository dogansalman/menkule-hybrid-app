import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Main } from '../pages/main/main';
import { Register } from '../pages/register/register';
import { Forgot } from '../pages/forgot/forgot';
import { Search } from '../pages/search/search';
import { Login } from '../pages/login/login';
import { Map} from '../components/map/map';
import { IonicSwipeAllModule } from 'ionic-swipe-all';
import { Places } from '../components/places/places';
import { fillHeightDirective } from '../directives/fillHeight/fillHeight.directive';


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
    fillHeightDirective
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
