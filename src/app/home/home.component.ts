import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as bulmaCarousel from 'bulma-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const carousels = bulmaCarousel.attach();
  }

}
