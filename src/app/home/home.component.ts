import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as bulmaCarousel from 'bulma-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  imagesList = [
    { src: '1.jpg', title: '' },
    { src: '2.jpg', title: '' },
    { src: '3.jpg', title: '' },
    { src: '4.jpg', title: '' },
    { src: '5.jpg', title: '' },
    { src: '6.jpg', title: '' },
    { src: '7.jpg', title: '' },
    { src: '8.jpg', title: '' },
    { src: '9.bmp', title: '' },
    { src: '10.jpg', title: '' },
    { src: '11.jpg', title: '' },
    { src: '12.jpg', title: '' },
    { src: '13.jpg', title: '' },
  ];


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const carousels = bulmaCarousel.attach();
  }

}
