import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustainability-cell',
  templateUrl: './sustainability-cell.component.html',
  styleUrls: ['./sustainability-cell.component.css']
})
export class SustainabilityCellComponent implements OnInit {
  head = [
    {
      name: 'Somansh Chordia',
      emails: [''],
      numbers: ['8208796190'],
      image: 'Somansh.jpg',
    },
  ];
  Manager = [
    {
      name: 'Aashish Tiwari',
      emails: [''],
      numbers: ['9404926797'],
      image: 'Aashish.jpg',
    },
    {
      name: 'Swagatika Priyambada',
      emails: [''],
      numbers: ['8118031363'],
      image: 'Swagatika.jpg',
    }
  ];
  posts = [
    { post: 'Head, Sustainable Cell',
     members: this.head, year: "19-20"
  },
  { post: 'Manager, Sustainable Cell',
  members: this.Manager, year: "19-20"
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
