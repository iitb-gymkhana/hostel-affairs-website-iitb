import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hygiene-committee',
  templateUrl: './hygiene-committee.component.html',
  styleUrls: ['./hygiene-committee.component.css']
})
export class HygieneCommitteeComponent implements OnInit {

  overallCoordinatorHygieneCommittee = [
    {
      name: 'Prem Sekhar Ponnada',
      emails: ['hygienecommitteeociitb@gmail.com'],
      numbers: ['8328503825'],
      image: 'PREM.jpg'
    },
    {
      name: 'Aditya Maitri',
      emails: ['maitriaditya7@gmail.com'],
      numbers: ['8310076793'],
      image: 'Aditya Maitri.jpeg'
    }
  ];

  // overallCoordinatorHygieneCommittee = [
  //   {
  //     name: 'Eva Judy',
  //     emails: ['evajudy@iitb.ac.in'],
  //     numbers: ['8518846450', '9769389629'],
  //     image: 'eva.jpg',
  //   },
  //   {
  //     name: 'Drish Mahnot',
  //     emails: ['drish.sanghvi@gmail.com'],
  //     numbers: ['7738869938', '7021381926'],
  //     image: 'drish.jpg',
  //   }
  // ];

  // memberHygieneCommittee = [
  //   {
  //     name: 'Rohit Kumar Meena',
  //     emails: ['rohit.iitb17@gmail.com'],
  //     numbers: ['9079369711'],
  //     hostel: '',
  //     fb: '',
  //     image: 'Rohit_Kumar_Meena.jpeg'
  //   },
  //   {
  //     name: 'Upwan Swami',
  //     emails: ['upwan007@gmail.com'],
  //     numbers: ['9987090669'],
  //     hostel: '',
  //     fb: '',
  //     image: 'Upwan_Swami.JPG'
  //   },
  //   {
  //     name: 'Eva Judy',
  //     emails: ['evajudy@iitb.ac.in'],
  //     numbers: ['8518846450'],
  //     hostel: '',
  //     fb: '',
  //     image: 'eva_judy.jpg'
  //   },
  //   {
  //     name: 'Prasanna Tayade',
  //     emails: ['prasanna.tayade7815@gmail.com'],
  //     numbers: ['7030599940'],
  //     hostel: '',
  //     fb: '',
  //     image: 'prasanna_tayade.jpg'
  //   },
  //   {
  //     name: 'Vishal Kotha',
  //     emails: ['vishal29raja@gmail.com'],
  //     numbers: ['9488659155'],
  //     hostel: '',
  //     fb: '',
  //     image: 'kotha_vishal.png'
  //   },
  //   {
  //     name: 'Sanyam Chouksey',
  //     emails: ['sanyam.chouksey18@gmail.com'],
  //     numbers: ['9407519666'],
  //     hostel: '',
  //     fb: '',
  //     image: 'sanyam_chouksey.jpg'
  //   }
  // ]

  posts = [
    { post: 'Overall Coordinators, Hygiene Committee', members: this.overallCoordinatorHygieneCommittee, year: '20-21' }
    // { post: 'Overall Coordinators, Hygiene Committee', members: this.overallCoordinatorHygieneCommittee, year: "19-20" }
    // ,
    // { post: 'Members, Hygiene Committee', members: this.memberHygieneCommittee }
  ];

  constructor() { }

  ngOnInit() {
  }

}
