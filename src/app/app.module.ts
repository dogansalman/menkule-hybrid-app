// Ionic Angular
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
//Native Modules
import { HTTP } from "@ionic-native/http";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Diagnostic } from "@ionic-native/diagnostic";
import { Network } from '@ionic-native/network';
import { NativeStorage } from '@ionic-native/native-storage';
import { File } from "@ionic-native/file";
// Pages Modules
import { MyApp } from './app.component';
import { MainModule } from '../pages/main/main.module';
import { RegisterModule } from '../pages/register/register.module';
import { ForgotModule } from "../pages/forgot/forgot.module";
import { SearchModule } from '../pages/search/search.module';
import { LoginModule } from '../pages/login/login.module';
import { TabsModule } from "../pages/tabs/tabs.module";
import { ActivationModule } from "../pages/activation/activation.module";
import { ProfileModule } from "../pages/profile/profile.module";
import { NotificationModule } from "../pages/notification/notification.module";
// Services
import { ApiServices } from "../services/api/api.services";
import { ToastServices } from "../services/toast/toast.services";
import { LoaderServices } from "../services/loader/loader.services";
import { AuthServices } from "../services/auth/auth.services";
import { AlertServices } from "../services/alert/alert.services";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      scrollAssist: true,
      autoFocusAssist: true,
      inputBlurring: false
    }),
    ForgotModule,
    LoginModule,
    MainModule,
    RegisterModule,
    SearchModule,
    TabsModule,
    ActivationModule,
    ProfileModule,
    NotificationModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    Diagnostic,
    ApiServices,
    LoaderServices,
    ToastServices,
    AuthServices,
    AlertServices,
    HTTP,
    NativeStorage,
    File
  ]
})
export class AppModule {}
