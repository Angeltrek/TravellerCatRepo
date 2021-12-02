import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css', '../app.component.css'] //Se importa el estilo css del app.component
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
