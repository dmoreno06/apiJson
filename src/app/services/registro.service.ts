import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GLOBAL} from './goblal';
import { Datos} from '../moduls/datos';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }
  //METODO DE PRUEVA
  pruebas() {
    return 'Hola mundo';
  }
  getRegistros(): Observable<any> {
    return this._http.get(this.url);
  }
}
