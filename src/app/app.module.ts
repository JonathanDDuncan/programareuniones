import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { ScaffoldingPage } from '../pages/scaffolding/scaffolding';

import { RXDBPublicadorSampleComponent } from '../pages/rxdbpublicadorsample/rxdbpublicadorsample.component';
import { RXDBConsejoComponent } from '../pages/rxdbconsejo/rxdbconsejo.component';
import { PublicadorNewEditComponent } from '../pages/publicadoredit/publicadoredit.component';
import { PublicadorNewInsertComponent } from '../pages/publicadorinsert/publicadorinsert.component';
import { ConsejoInsertComponent } from '../pages/consejoinsert/consejoinsert.component';
import { ContentPage } from '../pages/content/content';
import { ProgramaDatabaseService } from '../services/programadatabase.service';

import { ValuesPipe } from '../components/pipes/pipes'
import { PublicadoresListComponent } from '../components/publicadores-list/publicadores-list.component';
import { ConsejosListComponent } from '../components/consejos-list/consejos-list.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

export function HttpLoaderFactory(http: Http) {

}

export function provideSettings(storage: Storage) {

}

@NgModule({
  declarations: [
    MyApp,
    ContentPage,
    HomePage,
    ListPage,
    // PublicadoresPage,
    ScaffoldingPage,
    RXDBPublicadorSampleComponent,
    PublicadoresListComponent,
    PublicadorNewEditComponent,
    PublicadorNewInsertComponent,
    RXDBConsejoComponent,
    ConsejosListComponent,
    ConsejoInsertComponent,
    ValuesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    MaterialModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContentPage,
    // PublicadoresPage,
    ScaffoldingPage,
    RXDBPublicadorSampleComponent,
    PublicadorNewEditComponent,
    PublicadorNewInsertComponent,
    RXDBConsejoComponent,
    ConsejoInsertComponent
  ],
  providers: [
    SplashScreen,
    StatusBar,
    ProgramaDatabaseService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
