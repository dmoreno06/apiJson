import { Component } from '@angular/core';
import { JsonService } from './json.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myJson';
  parametro = '';
  result: any = [];
  btnResult = 'Generar';
  APIUrl = 'http://10.5.0.120:8983/solr/core2/select?indent=on';

  constructor(private json: JsonService) {  }

generateData(param) {
 // console.log(param);
  this.parametro = param;
  this.json.verJson(this.APIUrl + '&q=' + this.parametro + '&wt=json').
    subscribe(resultQuestion => (this.result = resultQuestion),
    error => (console.log('Ups! we have an error: ', error)));
  }
}
