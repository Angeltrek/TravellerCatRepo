import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Se declara el id 'toggle' del boton del nav que se despliega cuando el pixelage sea <= 600px
    const nav = document.getElementById("toggle");

    //Se agrega un listener de tipo click a nuestro boton
    nav?.addEventListener("click", function(){
      //Si el boton recibe un click, la clase nav-links se mostrara o se ocultara
      document.querySelector(".nav-links")?.classList.toggle("show");
    });

  }

}
