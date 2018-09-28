import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EscuelafutbolProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EscuelafutbolProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EscuelafutbolProvider Provider');
  }

  servidor: string= "http://danilomiranda-001-site3.itempurl.com/api/escuelafutbol/";

  id_institucion :number = 1;

  ObtenerDatos(tipo:string, idSerie:number = 0)
  {
    return this.http.get(this.servidor + "?tipo="+tipo+"&idInstitucion="+this.id_institucion+"&idSerie="+idSerie+"",);
  }

}
