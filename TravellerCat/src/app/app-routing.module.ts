import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContinentesComponent } from './continentes/continentes.component';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'continentes', component: ContinentesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'galeria', component: GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
