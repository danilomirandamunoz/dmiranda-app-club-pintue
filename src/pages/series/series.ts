import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { JugadoresPage } from "../jugadores/jugadores";
import { EscuelafutbolProvider } from '../../providers/escuelafutbol/escuelafutbol';
import  {Respuesta} from "../Respuesta";


@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {

  constructor(public navCtrl: NavController
    , private escuelaFutbol : EscuelafutbolProvider
    ,public loadingCtrl: LoadingController) {

      let loading = this.loading();
      this.escuelaFutbol.ObtenerDatos("series").subscribe(
        (data:Respuesta) => { 
          console.log(data.obj);
          this.series = data.obj;
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

  series;

  abrirSerie(id, imagen)
  {
    this.navCtrl.push(JugadoresPage,{id, imagen});
  }

  recargar()
  {
 let loading = this.loading();
      this.escuelaFutbol.ObtenerDatos("series").subscribe(
        (data:Respuesta) => { 
          console.log(data.obj);
          this.series = data.obj;
          loading.dismiss();
        },
        (error) =>{ 
          console.error(error);
        });
  }

}

