import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Se importan todos los componentes a los cuales se les va a redirigir con routes

import { AboutComponent } from './about/about.component';
import { ContinentesComponent } from './continentes/continentes.component';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Se declaran las rutas que se van a usar en el nav

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch:'full'}, //Sirve para redirigir a la pagina inicio cuando se inicia el proyecto de angular
  { path: 'inicio', component: InicioComponent}, //Se le da una ruta 'continentes' a nuestro componente Continentes
  { path: 'continentes', component: ContinentesComponent}, //Se le da una ruta 'inicio' a nuestro componente Inicio
  { path: 'about', component: AboutComponent}, //Se le da una ruta 'about' a nuestro componente About
  { path: 'galeria', component: GaleriaComponent}, //Se le da una ruta 'galeria' a nuestro componente galeria
  { path: '**', component: PageNotFoundComponent} //Si el usuario llega a poner otras letras en la dirrecion o no se encuentra la ruta, manda al usuario a una pagina con el error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
