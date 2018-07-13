import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.css']
})
export class HostelsComponent implements OnInit {

  hostels = [
    {
      hostel: 'H1',
      phoneNo: '2601 | 2701',
      gsec: 'Girishkumar Ponkiya',
      gsecPhoneNo: '9004009268',
      image: '1.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel1/'
    },
    {
      hostel: 'H2',
      phoneNo: '2602 | 2702',
      gsec: 'Sanskar Jain',
      gsecPhoneNo: '9167852061',
      image: '2.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel2/'
    },
    {
      hostel: 'H3',
      phoneNo: '2603 | 2703',
      gsec: 'Rana Sujayakar',
      gsecPhoneNo: '8169813589',
      image: '3.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel3/'
    },
    {
      hostel: 'H4',
      phoneNo: '2604 | 2704',
      gsec: '',
      gsecPhoneNo: '',
      image: '4.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel4/'
    },
    {
      hostel: 'H5',
      phoneNo: '2605 | 2705',
      gsec: 'Prasad Arak',
      gsecPhoneNo: '8828294948',
      image: '5.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel5/'
    },
    {
      hostel: 'H6',
      phoneNo: '2606 | 2706',
      gsec: 'Sumit Kumar',
      gsecPhoneNo: '8879037815',
      image: '6.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel7/'
    },
    {
      hostel: 'H7',
      phoneNo: '2607 | 2707',
      gsec: 'Mohit Singhal',
      gsecPhoneNo: '9967193495',
      image: '7.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel8/'
    },
    {
      hostel: 'H8',
      phoneNo: '2608 | 2708',
      gsec: 'Prashant Chaudhary',
      gsecPhoneNo: '9004514856',
      image: '8.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel9/'
    },
    {
      hostel: 'H9',
      phoneNo: '2609 | 2709',
      gsec: 'Shreerang D Kaore',
      gsecPhoneNo: '9823807911',
      image: '9.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel10/'
    },
    {
      hostel: 'H10',
      phoneNo: '2610 | 2710',
      gsec: 'Mohini Rathi',
      gsecPhoneNo: '9004319361',
      image: '10.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel10/'
    },
    {
      hostel: 'H11',
      phoneNo: '2611 | 2711',
      gsec: 'Ritika Verma',
      gsecPhoneNo: '8291474962',
      image: '11.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel11/'
    },
    {
      hostel: 'H12',
      phoneNo: '2612 | 2712',
      gsec: 'Nikant Tomar',
      gsecPhoneNo: '70458 00244',
      image: '12.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel12/'
    },
    {
      hostel: 'H13',
      phoneNo: '2613 | 2713',
      gsec: 'Humaid Mohammed Niyaz',
      gsecPhoneNo: '7506110842',
      image: '13.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel13/'
    },
    {
      hostel: 'H14',
      phoneNo: '2614 | 2714',
      gsec: 'Venkatesh Kadam',
      gsecPhoneNo: '9833582664',
      image: '14.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel14/'
    },
    {
      hostel: 'H15',
      phoneNo: '2715',
      gsec: 'Saurav Adhikari',
      gsecPhoneNo: '8968563397',
      image: '15.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel15/'
    },
    {
      hostel: 'H16',
      phoneNo: '2716',
      gsec: 'Arpit Arora',
      gsecPhoneNo: '9408031802',
      image: '16.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel16/'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
