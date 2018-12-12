import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { RegistroPage } from '../pages/registro/registro';
import { NoticiasPage } from '../pages/noticias/noticias';
import { PrecioSpotPage } from '../pages/precio-spot/precio-spot';
import { GeneracionPage } from '../pages/generacion/generacion';
import { EmbalsesPage } from '../pages/embalses/embalses';
import { CalendarioPage } from '../pages/calendario/calendario';
import { ContactoPage } from '../pages/contacto/contacto';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ChartsModule } from 'ng2-charts';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CallNumber } from '@ionic-native/call-number';

@NgModule({
  declarations: [
    MyApp,
    RegistroPage,
    HomePage,
    ListPage,
    NoticiasPage,
    PrecioSpotPage,
    GeneracionPage,
    EmbalsesPage,
    CalendarioPage,
    ContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistroPage,
    HomePage,
    ListPage,
    NoticiasPage,
    PrecioSpotPage,
    GeneracionPage,
    EmbalsesPage,
    CalendarioPage,
    ContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    LaunchNavigator,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
