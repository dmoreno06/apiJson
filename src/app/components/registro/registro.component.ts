import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Datos } from '../../moduls/datos';

import { RegistroService } from '../../services/registro.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [RegistroService]
})
export class RegistroComponent implements OnInit {

  public title: string;
  public datos: Datos;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _registro: RegistroService
  ) {
    this.title = 'Registro';
    this.datos = new Datos('1' , '', '', '', 0, '', '', '', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, '', '');
  }
  ngOnInit() {
    console.log('registro cargado correctamente');
  }
  onSubmit() {
    console.log(this.datos);
    console.log(this._registro.pruebas());
  }

}
