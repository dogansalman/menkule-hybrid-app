import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Pages Modules
import { MyApp } from './app.component';
import { MainModule } from '../pages/main/main.module';
import { RegisterModule } from '../pages/register/register.module';
import { ForgotModule } from "../pages/forgot/forgot.module";
import { SearchModule } from '../pages/search/search.module';
import { LoginModule } from '../pages/login/login.module';

// Directives
import { fillHeightDirective } from '../directives/fillHeight/fillHeight.directive';
import { IonicSwipeAllModule } from 'ionic-swipe-all';


import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
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
    IonicSwipeAllModule,
    ForgotModule,
    LoginModule,
    MainModule,
    RegisterModule,
    SearchModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network

  ]
})
export class AppModule {}
