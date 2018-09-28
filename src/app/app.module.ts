import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SeriesPage } from '../pages/series/series';
import { JugadoresPage } from '../pages/jugadores/jugadores';
import { HomePage } from '../pages/home/home';
import { NotifyPage } from '../pages/notify/notify';
import { ProfesionalesPage } from '../pages/profesionales/profesionales';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalNoticiaPage } from '../pages/modal-noticia/modal-noticia';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OneSignal } from '@ionic-native/onesignal';
import { HttpClientModule } from '@angular/common/http';
import { NotificarProvider } from '../providers/notificar/notificar';
import { IonicImageLoader } from 'ionic-image-loader/dist/src/image-loader.module';
import { EscuelafutbolProvider } from '../providers/escuelafutbol/escuelafutbol';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    SeriesPage,
    JugadoresPage,
    HomePage,
    NotifyPage,
    ModalNoticiaPage,
    ProfesionalesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SeriesPage,
    JugadoresPage,
    HomePage,
    NotifyPage,
    ModalNoticiaPage,
    ProfesionalesPage,
    TabsPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotificarProvider,
    EscuelafutbolProvider,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    InAppBrowser
  ]
})
export class AppModule {}
