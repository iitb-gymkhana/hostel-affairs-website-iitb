import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import * as SimpleBar from 'simplebar';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  sidenavItems = [
    { name: 'Home', link: 'home' },
    { name: 'HA Council', link: 'council', url: '' },
    { name: 'Cashless Campus', url: 'http://gymkhana.iitb.ac.in/cashlesscampus' },
    { name: 'Alumni Affairs', link: 'alumni' },
    { name: 'International Relations', link: 'ir' },
    { name: 'Hospital', url: 'http://www.iitb.ac.in/facilities/hospital.html' },
    { name: 'Hospital Guidebook', url: 'https://gymkhana.iitb.ac.in/~hostels/Hospital_Guidebook.pdf' },
    { name: 'Hostels', link: 'hostels' },
    { name: 'Lost and Found Forum', url: 'https://gymkhana.iitb.ac.in/~hostels/lostnfound.php' },
    { name: 'Complaint Management System', url: 'http://gymkhana.iitb.ac.in/cms_new/' },
    { name: 'Guest Accomodation Booking System', url: 'https://gymkhana.iitb.ac.in/~hostels/portal/GABS/index.php' },
    { name: 'Guest House Booking System', url: 'http://www.iitb.ac.in/GuestHouse/index.html' },
    { name: 'Hostel Delivery', link: 'delivery' },
    { name: 'TumTum Schedule', url: 'https://gymkhana.iitb.ac.in/~hostels/BusSchedule1.pdf' },
    { name: 'Canteen Regulations', url: 'https://gymkhana.iitb.ac.in/~hostels/Canteen_Regulations.pdf' },
    { name: 'Tenders', link: 'tenders' },
    { name: 'Hall Manager Duties', url: 'https://gymkhana.iitb.ac.in/~hostels/hallManagerDuties.html' }
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.sidenav-item').click(function() {
      $('.mobile-sidenav').hide();
      $('.navbar-burger').removeClass('is-active');
    });

  }
}
