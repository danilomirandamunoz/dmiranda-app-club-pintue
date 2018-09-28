import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { EscuelafutbolProvider } from '../../providers/escuelafutbol/escuelafutbol';
import  {Respuesta} from "../Respuesta";


/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {

  imagenSerie;
  jugadores;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private escuelaFutbol : EscuelafutbolProvider
    ,public loadingCtrl: LoadingController) 
    {

    this.imagenSerie = this.navParams.get("imagen");
    console.log(this.imagenSerie);
    let id = this.navParams.get("id");

    let loading = this.loading();
    this.escuelaFutbol.ObtenerDatos("jugadores", id).subscribe(
      (data:Respuesta) => { 
        console.log(data.obj);

        data.obj.sort(function (a, b) {
          if (a.numero > b.numero) {
            return 1;
          }
          if (a.numero < b.numero) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });

        this.jugadores = data.obj;
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

  recargar()
  {
    this.imagenSerie = this.navParams.get("imagen");
    console.log(this.imagenSerie);
    let id = this.navParams.get("id");

    let loading = this.loading();
    this.escuelaFutbol.ObtenerDatos("jugadores", id).subscribe(
      (data:Respuesta) => { 
        console.log(data.obj);
        this.jugadores = data.obj;
        loading.dismiss();
      },
      (error) =>{ 
        console.error(error);
      });
  }

}
