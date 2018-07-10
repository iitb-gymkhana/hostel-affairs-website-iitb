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
    $('.navbar-burger').click(function () {
      if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $('.sidenav').hide();
      } else {
        $('.sidenav').show();
        $(this).addClass('is-active');
      }
    });
  }

}
