import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotifyPage } from "../notify/notify";
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController
    ,public oneSignal: OneSignal) {

  }

  notificar()
  {
    this.navCtrl.push(NotifyPage);
  }

}
