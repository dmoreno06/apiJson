
import { NgModule } from '@angular/core';
import { JsonService } from './json.service';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DefaultComponent } from './components/default/default.component';
import { AnidadosComponent } from './components/anidados/anidados.component';
import {RegistroService } from './services/registro.service';
import { DataTableModule } from 'angular-6-datatable';

@NgModule({
   declarations: [
      AppComponent,
      RegistroComponent,
      DefaultComponent,
      AnidadosComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,DataTableModule,
      HttpModule, FormsModule, routing
   ],
   providers: [
      JsonService, appRoutingProviders, RegistroService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
