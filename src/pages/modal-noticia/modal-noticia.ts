import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EscuelafutbolProvider } from '../../providers/escuelafutbol/escuelafutbol';
import  {Respuesta} from "../Respuesta";
/**
 * Generated class for the ModalNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-modal-noticia',
  templateUrl: 'modal-noticia.html',
})
export class ModalNoticiaPage {

  item;
  noticias;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , private escuelaFutbol : EscuelafutbolProvider
    ,public loadingCtrl: LoadingController) {
    this.item = this.navParams.get("item");
 
    let loading = this.loading();
    this.escuelaFutbol.ObtenerDatos("noticiaPorID",this.item).subscribe(
      (data:Respuesta) => { 
        console.log(data.obj);
        this.noticias = data.obj;
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
    console.log('ionViewDidLoad ModalNoticiaPage');
  }

  back()
  {
 
  }

}
