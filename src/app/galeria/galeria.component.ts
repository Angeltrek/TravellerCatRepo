import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'; //Se importa nuestro componente de bootstrap del carrusel

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css', '../app.component.css'], //Se importa el estilo css del app.component
  providers: [NgbCarouselConfig] //Declaramos nuestro carrusel como proveedor
})
export class GaleriaComponent implements OnInit {
  showNavigationArrows = true; //Declaramos que se muestren las flechas en nuestro carrusel
  showNavigationIndicators = true;//Declaramos que se muestren los indicadores en nuestro carrusel
  // Declaramos los arrays en donde vamos a poner los enlaces de nuestras imagenes que se van a usar en nuestro carrusel
  // Imagenes del continente america
  america = ["https://cdn.wallpapersafari.com/67/28/G79ac8.jpg", "https://wallpapercave.com/wp/GW7kpOW.jpg", "https://www.wallpapertip.com/wmimgs/19-198517_christ-the-redeemer-rio-de-janeiro-wallpaper-1033714.jpg"];
  // Imagenes del continente europa
  europa = ["https://wallpapercave.com/wp/wp3766637.png", "https://wallpaperboat.com/wp-content/uploads/2019/12/amsterdam-01.jpg", "https://www.wallpapertip.com/wmimgs/50-500543_russian-museum.jpg"];
  // Imagenes del continente asia
  asia = ["https://images7.alphacoders.com/472/thumb-1920-472347.jpg", "https://wallpaperaccess.com/full/19066.jpg", "https://nuba.net/wp-content/uploads/2018/11/TAILANDIA-PORTADA.jpg"];
  // Imagenes del continente africa
  africa = ["https://wallpapercrafter.com/desktop/133748-nature-animals-Serengeti-Tanzania-path-grass-trees-Wildebeest.jpg", "https://travelwisenet.com/wp-content/uploads/2020/03/Victoria-and-alfred-waterfront-travelwise.jpg", "https://images.wallpaperscraft.com/image/single/sahara_desert_sand_sky_120473_1920x1080.jpg"];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
