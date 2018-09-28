import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OneSignal } from '@ionic-native/onesignal';

import { ModalNoticiaPage } from '../pages/modal-noticia/modal-noticia';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
    , private oneSignal: OneSignal
    ,private alertCtrl: AlertController
    //,public navCtrl: NavController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleBlackTranslucent();
      splashScreen.hide();
      this.handlerNotifications();
    });

    
  }
  private handlerNotifications(){
    this.oneSignal.startInit('4209017c-d0b4-480c-b174-934df15750ba', '500662226724');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationOpened()
    .subscribe(jsonData => {
      let alert = this.alertCtrl.create({
        title: jsonData.notification.payload.title,
        subTitle: jsonData.notification.payload.body,
        buttons: ['OK']
      });
      this.nav.push(ModalNoticiaPage,{item:jsonData.notification.payload.additionalData["idNoticia"]});
      //alert.present();
      //this.navCtrl.push(ModalNoticiaPage,{item:jsonData.notification.payload.title});
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });
    this.oneSignal.endInit();
  }
}
