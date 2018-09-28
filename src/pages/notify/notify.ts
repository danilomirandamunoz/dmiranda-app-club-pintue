import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController  } from 'ionic-angular';
import { NotificarProvider } from '../../providers/notificar/notificar';
import { EscuelafutbolProvider } from '../../providers/escuelafutbol/escuelafutbol';
import { OneSignal } from '@ionic-native/onesignal';

import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the NotifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html',
})
export class NotifyPage {

  login =1;
  username;
  pass;

  titulo;
  mensaje;

  imageURI:any;
  imageFileName:any;

  notificacionOK:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , private notify : NotificarProvider
    , private escuelaFutbol : EscuelafutbolProvider
    , private alertCtrl : AlertController
    , public oneSignal: OneSignal
  , private toastCtrl : ToastController
  ,private transfer: FileTransfer,
  private camera: Camera,
  public loadingCtrl: LoadingController) {

    


  }


}
