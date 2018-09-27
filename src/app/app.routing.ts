import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroComponent } from './components/registro/registro.component';
import { DefaultComponent } from './components/default/default.component';
import { AnidadosComponent } from './components/anidados/anidados.component';

const appRoutes: Routes = [
  {path: '', component: RegistroComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'default', component: DefaultComponent},
  {path: 'anidados', component: AnidadosComponent},
  {path: '**',  component: DefaultComponent},
] ;
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
