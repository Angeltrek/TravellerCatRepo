import { NgModule } from '@angular/core'; //Este componente es el de bootstrap
import { BrowserModule } from '@angular/platform-browser';

// importamos todos los componentes creados, nav, inicio, continentes,  about, galeria, footer, page-not-found

import { AppRoutingModule } from './app-routing.module'; //Este componente es el encargado de crear las rutas entre los componentes
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //Este componente se genera al importar bootstrap
import { ContinentesComponent } from './continentes/continentes.component'; //Este es un componente creado
import { FooterComponent } from './footer/footer.component'; //Este es un componente creado
import { NavComponent } from './nav/nav.component'; //Este es un componente creado
import { GaleriaComponent } from './galeria/galeria.component'; //Este es un componente creado
import { InicioComponent } from './inicio/inicio.component'; //Este es un componente creado
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; //Este es un componente creado
import { AboutComponent } from './about/about.component'; //Este es un componente creado
@NgModule({
  // Se declaran todos los componentes que se van a usar
  declarations: [
    AppComponent,
    ContinentesComponent,
    FooterComponent,
    NavComponent,
    GaleriaComponent,
    InicioComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule //Esto se importar junto bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent] //Esto se genera al importar bootstrap
})
export class AppModule { }
