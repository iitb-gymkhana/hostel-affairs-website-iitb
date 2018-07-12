import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const breakpoint = {};
    breakpoint['refreshValue'] = function() {
      this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
    };

    const sidenavDisplay = function(device) {
      if (device === 'desktop') {
        $('.sidenav').show();
        $('.mobile-sidenav').hide();
        $('.navbar-burger').removeClass('is-active');
      } else {
        $('.sidenav').hide();
      }
    };

    $(window).resize(function() {
      breakpoint['refreshValue']();
      sidenavDisplay(breakpoint['value']);
    }).resize();

    $('.navbar-burger').click(function () {
      if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $('.mobile-sidenav').hide();
      } else {
        $(this).addClass('is-active');
        $('.mobile-sidenav').show();
      }
    });
  }

}
