import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { YoutubePage } from '../pages/youtube/youtube';
import { MasinfoPage } from '../pages/masinfo/masinfo';
import { MytestPage } from '../pages/mytest/mytest';
import { ResinfoPage } from '../pages/resinfo/resinfo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Proveedor1Provider } from '../providers/proveedor1/proveedor1';
import { HttpClientModule } from '@angular/common/http';
import { Proveedor2Provider } from '../providers/proveedor2/proveedor2';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    YoutubePage,
    MasinfoPage,
    MytestPage,
    ResinfoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    //Tabs on top = IonicModule.forRoot(MyApp, {tabsPlacement: 'top', })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    YoutubePage,
    MasinfoPage,
    MytestPage,
    ResinfoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Proveedor1Provider,
    Proveedor2Provider
  ]
})
export class AppModule {}
