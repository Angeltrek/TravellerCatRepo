import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../app.component.css'] //Se importa el estilo css del app.component
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
