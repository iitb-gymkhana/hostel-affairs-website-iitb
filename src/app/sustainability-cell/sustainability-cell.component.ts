import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustainability-cell',
  templateUrl: './sustainability-cell.component.html',
  styleUrls: ['./sustainability-cell.component.css']
})
export class SustainabilityCellComponent implements OnInit {
  overallCoordinatorSustainableCell = [
    {
      name: 'Aditya Devalla',
      emails: ['devallaaditya456@gmail.com'],
      numbers: ['7799323800', '8919254673'],
      hostel: 'H9/228',
      fb: 'https://www.facebook.com/aditya.devalla.90',
      image: 'aditya.png',
    },
    {
      name: 'Abhay Menon',
      emails: ['s.abhaymenon@gmail.com'],
      numbers: ['9769439840'],
      hostel: 'H8/176',
      fb: 'https://www.facebook.com/abhay.menon.71',
      image: 'abhay.png',
    }
  ];

  posts = [
    { post: 'Overall Coordinator, Sustainable Cell',
     members: this.overallCoordinatorSustainableCell 
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
