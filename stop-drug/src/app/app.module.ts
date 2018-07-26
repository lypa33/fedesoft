import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StopDrugPage } from '../pages/stop-drug/stop-drug';
import { StopDrugMainPage } from '../pages/stop-drug-main/stop-drug-main';
import { WikiPage } from '../pages/wiki/wiki';
import { NombreDeDrogaPage } from '../pages/nombre-de-droga/nombre-de-droga';
import { ComoAfectaPage } from '../pages/como-afecta/como-afecta';
import { ComoPrevenirPage } from '../pages/como-prevenir/como-prevenir';
import { ReportarUnLugarPage } from '../pages/reportar-un-lugar/reportar-un-lugar';
import { Starting } from '../pages/starting/starting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    StopDrugPage,
    StopDrugMainPage,
    WikiPage,
    NombreDeDrogaPage,
    ComoAfectaPage,
    ComoPrevenirPage,
    ReportarUnLugarPage,
    Starting
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StopDrugPage,
    StopDrugMainPage,
    WikiPage,
    NombreDeDrogaPage,
    ComoAfectaPage,
    ComoPrevenirPage,
    ReportarUnLugarPage,
    Starting
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}