import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';
import { NotifyPage } from "../notify/notify";
import { OneSignal } from '@ionic-native/onesignal';

import { ModalNoticiaPage } from '../modal-noticia/modal-noticia';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EscuelafutbolProvider } from '../../providers/escuelafutbol/escuelafutbol';
import  {Respuesta} from "../Respuesta";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  institucion;

  constructor(public navCtrl: NavController
    ,public oneSignal: OneSignal
,private iab: InAppBrowser
, private escuelaFutbol : EscuelafutbolProvider
,public loadingCtrl: LoadingController) {

  let loading = this.loading();

  this.escuelaFutbol.ObtenerDatos("institucion").subscribe(
    (data:Respuesta) => { 
      console.log(data.obj);
      this.institucion = data.obj;
    },
    (error) =>{ 
      console.error(error);
    });

    this.escuelaFutbol.ObtenerDatos("noticias").subscribe(
      (data:Respuesta) => { 
        console.log(data.obj);

        data.obj.sort(function (a, b) {
          if (a.fecha > b.fecha) {
            return 1;
          }
          if (a.fecha < b.fecha) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });


        this.noticias = data.obj;
        loading.dismiss();
      },
      (error) =>{ 
        console.error(error);
        loading.dismiss();
      });
  }

  noticias:any;

  loading() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
  
    loading.present();
    return loading;
    
  }

  showNoticia(item)
  {
    this.navCtrl.push(ModalNoticiaPage,{item});
  }

  OpenUrl()
  {
  window.open(encodeURI("http://danilomiranda-001-site6.itempurl.com/"), "_system", "location=yes");
  //const browser = this.iab.create("","_system");
  //browser.show()
  }

  recargar()
  {
    let loading = this.loading();

    this.escuelaFutbol.ObtenerDatos("institucion").subscribe(
    (data:Respuesta) => { 
      console.log(data.obj);
      this.institucion = data.obj;
    },
    (error) =>{ 
      console.error(error);
    });

    this.escuelaFutbol.ObtenerDatos("noticias").subscribe(
      (data:Respuesta) => { 
        console.log(data.obj);
        this.noticias = data.obj;
        loading.dismiss();
      },
      (error) =>{ 
        console.error(error);
        loading.dismiss();
      });
  }

}
