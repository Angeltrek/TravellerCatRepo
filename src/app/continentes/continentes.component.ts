import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continentes',
  templateUrl: './continentes.component.html',
  styleUrls: ['./continentes.component.css', '../app.component.css'] //Se importa el estilo css del app.component
})
export class ContinentesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
