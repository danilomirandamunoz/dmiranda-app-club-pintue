import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NotificarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificarProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NotificarProvider Provider');
  }

  enviarMensaje(titulo:string, mensaje:string)
  {
    var headers = {
      "Content-Type": "application/json; charset=utf-8", 
      "Authorization":"Basic MWFmMjYxMzAtYmQyZi00YjhiLTk3YjItZDg4ZGFkM2MxZjUx" 
    };
    var data = {
      
      "app_id": "4209017c-d0b4-480c-b174-934df15750ba",
      "included_segments": ["All"],
      "contents": {"en": mensaje},
      "headings" : {"en": titulo},
      "large_icon": "https://img.onesignal.com/t/5d1ad08c-eaff-47a2-93da-5ff5543cb300.jpg",
      "android_background_layout": {"headings_color": "FFFF0000", "contents_color": "FF00FF00"},
      "android_led_color": "008B00",
      "android_accent_color": "008B00"
      
    };

    return this.http.post("https://onesignal.com/api/v1/notifications/",JSON.stringify(data), {headers:headers});
  }

}
