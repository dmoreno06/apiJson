import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Datos } from '../../moduls/datos';
import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  providers: [RegistroService]
})
export class DefaultComponent implements OnInit {
  public title: string;

  public registros: Array<Datos>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private registro: RegistroService
  ) {

    this.title = 'Inicio';
  }

  ngOnInit() {
    console.log('defaul.component cargado correctamente');
    this.registro.getRegistros().subscribe(
      respons => {
        this.registros = respons.response.docs;
        console.log(this.registros);
      },
      error => {
        console.log(error);
      }
    );
  }
}
