import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { ContentPage } from '../pages/content/content';


import { RXDBConsejoComponent } from '../pages/rxdbconsejo/rxdbconsejo.component';
import { RXDBPublicadorSampleComponent } from './../pages/rxdbpublicadorsample/rxdbpublicadorsample.component';
import { RXDBSemanaComponent } from './../pages/rxdbsemana/rxdbsemana.component';
import { ScaffoldingPage } from '../pages/scaffolding/scaffolding';
declare var require: any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Publicadores', component: RXDBPublicadorSampleComponent },
      { title: 'Consejos', component: RXDBConsejoComponent },
      { title: 'Semanas', component: RXDBSemanaComponent },
      { title: 'Content', component: ContentPage },
      { title: 'ScaffoldingPage', component: ScaffoldingPage },


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
  ngAfterContentInit() {
    const Elm = require('../elm/main.js');
    Elm.Main.embed(document.getElementById('elm'));
  }
}
