import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sidenavItems = [
    { name: 'Home', link: 'home' },
    { name: 'HA Council', link: 'council' },
    { name: 'Cashless Campus', link: '' },
    { name: 'Alumni Affairs', link: 'alumni' },
    { name: 'International Relations', link: '' },
    { name: 'Hospital', link: '' },
    { name: 'Hospital Guidebook', link: '' },
    { name: 'Hostels', link: '' },
    { name: 'Lost and Found Forum', link: '' },
    { name: 'Complaint Management System', link: '' },
    { name: 'Guest Accomodation Booking System', link: '' },
    { name: 'Hostel Delivery', link: '' },
    { name: 'TumTum Schedule', link: '' },
    { name: 'Canteen Regulations', link: '' },
    { name: 'Tenders', link: '' },
    { name: 'Hall Manager Duties', link: '' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
