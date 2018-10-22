import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hygiene-committee',
  templateUrl: './hygiene-committee.component.html',
  styleUrls: ['./hygiene-committee.component.css']
})
export class HygieneCommitteeComponent implements OnInit {
  
  overallCoordinatorHygieneCommittee = [
    {
      name: 'Vibha Talwar',
      emails: ['kat.vibha@gmail.com'],
      numbers: ['9878060676'],
      hostel: 'H10/D311',
      fb: 'https://www.facebook.com/cutipie.vibha',
      image: 'vibha.png'
    },
    {
      name: 'Lokesh Kesiraju',
      emails: ['lokeshkesiraju@gmail.com'],
      numbers: ['8828291963', '8919669927'],
      hostel: 'H9/218',
      fb: 'https://www.facebook.com/kesiraju.lokesh',
      image: 'lokesh.png'
    }
  ];

  posts = [
    { post: 'Overall Coordinator, Hygiene Committee', members: this.overallCoordinatorHygieneCommittee }
  ];

  constructor() { }

  ngOnInit() {
  }

}
