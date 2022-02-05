import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustainability-cell',
  templateUrl: './sustainability-cell.component.html',
  styleUrls: ['./sustainability-cell.component.css']
})
export class SustainabilityCellComponent implements OnInit {
  head = [
    // {
    //   name: 'Somansh Chordia',
    //   emails: [''],
    //   numbers: ['8208796190'],
    //   image: 'Somansh.jpg',
    // },
    {
          name: 'Akshata Nagare',
          emails: ['iitbsustainability@gmail.com'],
          numbers: ['7506274848'],
          image: 'Akshata.jpeg'
        }
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
     members: this.head,
      // year: "19-20"
      year: '20-21'
  },
  // { post: 'Manager, Sustainable Cell',
  // members: this.Manager, year: "19-20"
  // }
  ];

  constructor() { }

  ngOnInit() {
    window.location.assign('https://gymkhana.iitb.ac.in/sustainabilitycell/');
  }

}
