import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController  } from 'ionic-angular';
import { NotificarProvider } from '../../providers/notificar/notificar';
import { OneSignal } from '@ionic-native/onesignal';
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

  notificacionOK:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private notify : NotificarProvider
    , private alertCtrl : AlertController
    , public oneSignal: OneSignal
  , private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifyPage');
  }

  logeo()
  {
    if(this.username=="admin" && this.pass=="12345")
    {
      this.login = 2;
      this.username = "";
          this.pass = "";
    }
    else{
      const toast = this.toastCtrl.create({
        message: 'Datos Incorrectos',
        duration: 3000,
        position: 'bottom',
        cssClass:"toast-class"
      });
      toast.present();
    }
  }

  notificar()
  {
      this.notify.enviarMensaje(this.titulo, this.mensaje).subscribe(
        (res) => { 
          this.titulo = "";
          this.mensaje = "";
          const toast = this.toastCtrl.create({
            message: 'El mensaje ha sido enviado correctamente',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          this.notificacionOK=true;
          console.log(res);
        },
        (error) =>{ 
          console.error(error);
          const toast = this.toastCtrl.create({
            message:  error.message,
            duration: 5000,
            position: 'bottom'
          });
          toast.present();
         
          this.notificacionOK=false;
        });
  
  }

}
