import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ha-council',
  templateUrl: './ha-council.component.html',
  styleUrls: ['./ha-council.component.css']
})
export class HaCouncilComponent implements OnInit {

  GSHAs = [
    {
      name: 'Abhilash Karri',
      emails: ['gsecha@iitb.ac.in', 'abhilashkarri29@gmail.com'],
      numbers: ['7738692865'],
      hostel: 'H3/277',
      fb: 'https://www.facebook.com/abhilash.karri',
      image: 'abhilash.png'
    }
  ];

  ISHAs = [
    {
      name: 'Rishabh Kumar',
      emails: ['rishav.kumar.2303@gmail.com'],
      numbers: ['8291633062'],
      hostel: 'H6/255',
      fb: 'https://www.facebook.com/rishav.kumar.509994',
      image: 'rishabh.png'
    },
    {
      name: 'Kirtesh Ajay Gadiya',
      emails: ['gadi12196@gmail.com'],
      numbers: ['9769957413', '9653452334'],
      hostel: 'H2/102',
      fb: 'https://www.facebook.com/gadi1590',
      image: 'kirtesh.png'
    },
    {
      name: 'Bhavishya Rathore',
      emails: ['bhavishyarathoreiitb@gmail.com'],
      numbers: ['8770870693'],
      hostel: 'H3/266',
      fb: 'https://www.facebook.com/bhavishya.rathore207',
      image: 'bhavishya.png'
    }
  ];

  girlsNominee = [
    {
      name: 'Harshita Verma',
      emails: ['harshita.verma97@gmail.com'],
      numbers: ['8828494844'],
      hostel: 'H10/N210',
      fb: 'https://www.facebook.com/harshita.verma.142',
      image: 'harshita.png'
    }
  ];

  ISIR = [
    {
      name: 'Akash Chikhalikar',
      emails: ['isecir@iitb.ac.in'],
      numbers: ['9867843415'],
      hostel: 'H2/147',
      fb: 'https://www.facebook.com/AKC141096',
      image: 'akash.png'
    }
  ];

  ISAs = [
    {
      name: 'Kethan Chauhan',
      emails: ['kethan88@gmail.com', 'mlc@iitb.ac.in'],
      numbers: ['8142142827'],
      hostel: 'H6/104',
      fb: 'https://www.facebook.com/kethan.chauhan',
      image: 'kethan.png'
    },
    {
      name: 'Saurabh Gupta',
      emails: ['saurabh.gupta.17@iitb.ac.in', 'mlc@iitb.ac.in'],
      numbers: ['9818581360'],
      hostel: 'H16/B302',
      fb: 'https://www.facebook.com/guptasaurabh9868',
      image: 'saurabh.png'
    },
    {
      name: 'Rohit Prasad',
      emails: ['rohitrp@iitb.ac.in', 'mlc@iitb.ac.in'],
      numbers: ['8460873702'],
      hostel: 'H16/B306',
      fb: 'https://www.facebook.com/rohitrp95',
      image: 'rohit.png'
    }
  ];

  overallCoordinatorSARC = [
    {
      name: 'Samarth Agrawal',
      emails: ['institute.alumni.sec@iitbombay.org'],
      numbers: [''],
      hostel: 'H2',
      fb: 'https://www.facebook.com/samarth.friends20',
      image: 'samarth.png'
    }
  ];

  posts = [
    { post: 'General Secretary of Hostel Affairs (GSHA)', members: this.GSHAs },
    { post: 'Institute Secretaries of Hostel Affairs (ISHAs)', members: this.ISHAs },
    { post: 'Girsl Nominee', members: this.girlsNominee },
    { post: 'Institute Secretary of International Relations', members: this.ISIR },
    { post: 'Institute System Administrators', members: this.ISAs },
    { post: 'Overall Coordinator, Student Alumni Relations Cell', members: this.overallCoordinatorSARC }
  ]
  constructor() { }

  ngOnInit() {
  }

}
