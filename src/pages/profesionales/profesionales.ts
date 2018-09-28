import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EscuelafutbolProvider } from '../../providers/escuelafutbol/escuelafutbol';
import  {Respuesta} from "../Respuesta";
/**
 * Generated class for the ProfesionalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profesionales',
  templateUrl: 'profesionales.html',
})
export class ProfesionalesPage {

  profesionales;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private escuelaFutbol : EscuelafutbolProvider
    ,public loadingCtrl: LoadingController) {

      let loading = this.loading();
    this.escuelaFutbol.ObtenerDatos("profesionales").subscribe(
      (data:Respuesta) => { 
        console.log(data.obj);
        this.profesionales = data.obj;
        loading.dismiss();
      },
      (error) =>{ 
        console.error(error);
      });
  }

  loading() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
  
    loading.present();
    return loading;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfesionalesPage');
  }


  recargar()
  {
    let loading = this.loading();
    this.escuelaFutbol.ObtenerDatos("profesionales").subscribe(
      (data:Respuesta) => { 
        console.log(data.obj);
        this.profesionales = data.obj;
        loading.dismiss();
      },
      (error) =>{ 
        console.error(error);
      });
  }

}
