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

  memberHygieneCommittee = [
    {
      name: 'Rohit Kumar Meena',
      emails: ['rohit.iitb17@gmail.com'],
      numbers: ['9079369711'],
      hostel: '',
      fb: '',
      image: 'Rohit_Kumar_Meena.jpeg'
    },
    {
      name: 'Upwan Swami',
      emails: ['upwan007@gmail.com'],
      numbers: ['9987090669'],
      hostel: '',
      fb: '',
      image: 'Upwan_Swami.JPG'
    },
    {
      name: 'Eva Judy',
      emails: ['evajudy@iitb.ac.in'],
      numbers: ['8518846450'],
      hostel: '',
      fb: '',
      image: 'eva_judy.jpg'
    },
    {
      name: 'Prasanna Tayade',
      emails: ['prasanna.tayade7815@gmail.com'],
      numbers: ['7030599940'],
      hostel: '',
      fb: '',
      image: 'prasanna_tayade.jpg'
    },
    {
      name: 'Vishal Kotha',
      emails: ['vishal29raja@gmail.com'],
      numbers: ['9488659155'],
      hostel: '',
      fb: '',
      image: 'kotha_vishal.png'
    },
    {
      name: 'Sanyam Chouksey',
      emails: ['sanyam.chouksey18@gmail.com'],
      numbers: ['9407519666'],
      hostel: '',
      fb: '',
      image: 'sanyam_chouksey.jpg'
    }
  ]

  posts = [
    { post: 'Overall Coordinators, Hygiene Committee', members: this.overallCoordinatorHygieneCommittee },
    { post: 'Members, Hygiene Committee', members: this.memberHygieneCommittee }
  ];

  constructor() { }

  ngOnInit() {
  }

}
