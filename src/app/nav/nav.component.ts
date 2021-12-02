import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const nav = document.getElementById("toggle");

    nav?.addEventListener("click", function(){
      document.querySelector(".nav-links")?.classList.toggle("show");
    });

  }

}
