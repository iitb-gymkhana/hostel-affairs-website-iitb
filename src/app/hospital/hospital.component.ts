import { Component, OnInit, AfterViewInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit, AfterViewInit {

  hospitalNominee = [
    {
      name: 'Rishabh Kumar',
      emails: ['rishav.kumar.2303@gmail.com'],
      numbers: ['8291633062'],
      hostel: 'H6/255',
      fb: 'https://www.facebook.com/rishav.kumar.509994',
      image: 'rishabh.png'
    }
  ];

  posts = [
    { post: 'Student Hospital Nominee', members: this.hospitalNominee }
  ];

  openGoogleMap() {
    window.open('https://goo.gl/maps/5DuGPydP7Mk','_blank');
  }
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9oaXRycCIsImEiOiJjam13cDlpbzIwbTBhM3BxdmdzenNvNmxtIn0.ROR2H-lkJ-aZh7GuMRn1jg';
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
