import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit, AfterViewInit {

  hospitalNominee = [
    {
      name: 'Arunesh Pandey',
      emails: ['pandeyarunesh1@gmail.com', '183110044@iitb.ac.in'],
      numbers: ['8596955591'],
      image: 'arunesh.jpg'
      
    }
  ];

  posts = [
    { post: 'Student Hospital Nominee', members: this.hospitalNominee, year: "19-20" }
  ];

  openGoogleMap() {
    window.open('https://goo.gl/maps/5DuGPydP7Mk','_blank');
  }
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1Ijoicm9oaXRycCIsImEiOiJjam13cDlpbzIwbTBhM3BxdmdzenNvNmxtIn0.ROR2H-lkJ-aZh7GuMRn1jg');
    // mapboxgl.accessToken = 'pk.eyJ1Ijoicm9oaXRycCIsImEiOiJjam13cDlpbzIwbTBhM3BxdmdzenNvNmxtIn0.ROR2H-lkJ-aZh7GuMRn1jg';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v10',
      center: [72.914294, 19.130722],
      zoom: 16
    });

    var marker = new mapboxgl.Marker()
      .setLngLat([72.914294, 19.130722])
      .addTo(map);
  }

}
