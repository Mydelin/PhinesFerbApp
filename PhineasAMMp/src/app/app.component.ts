import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { RegistroPage } from '../pages/registro/registro';
import { NoticiasPage } from '../pages/noticias/noticias';
import { PrecioSpotPage } from '../pages/precio-spot/precio-spot';
import { GeneracionPage } from '../pages/generacion/generacion';
import { EmbalsesPage } from '../pages/embalses/embalses';
import { CalendarioPage } from '../pages/calendario/calendario';
import { ContactoPage } from '../pages/contacto/contacto';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ContactoPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Noticias', component: NoticiasPage },
      { title: 'PrecioSpot', component: PrecioSpotPage },
      { title: 'Generacion', component: GeneracionPage },
      { title: 'Embalses', component: EmbalsesPage },
      { title: 'Calendario', component: CalendarioPage },
      { title: 'Contacto', component: ContactoPage },
      { title: 'Salir', component: RegistroPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
