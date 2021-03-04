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
      gsec: 'Deepak Ranjan Padhi',
      gsecPhoneNo: '7978259013',
      gsecEmail: 'dpadhi90@gmail.com',
      image: '1.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel1/'
    },
    {
      hostel: 'H2',
      phoneNo: '2602 | 2702',
      gsec: 'Rajesh Thorve',
      gsecPhoneNo: '9518351175',
      gsecEmail: 'gsech2@iitb.ac.in',
      image: '2.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel2/'
    },
    {
      hostel: 'H3',
      phoneNo: '2603 | 2703',
      gsec: 'Viren Haldwania',
      gsecPhoneNo: '9462282385, 8949803620',
      gsecEmail: 'gsech3@iitb.ac.in',
      image: '3.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel3/'
    },
    {
      hostel: 'H4',
      phoneNo: '2604 | 2704',
      gsec: 'Saurav Raj',
      gsecPhoneNo: '7400401293',
      gsecEmail: 'saurav.rj1999@gmail.com',
      image: '4.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel4/'
    },
    {
      hostel: 'H5',
      phoneNo: '2605 | 2705',
      gsec: 'Kushagra Mundra',
      gsecPhoneNo: '9819288002',
      gsecEmail: 'gsech5@iitb.ac.in',
      image: '5.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel5/'
    },
    {
      hostel: 'H6',
      phoneNo: '2606 | 2706',
      gsec: 'Prashant Chhaparwal',
      gsecPhoneNo: '7610060651',
      gsecEmail: 'gsech6@iitb.ac.in',
      image: '6.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel7/'
    },
    // {
    //   hostel: 'H7',
    //   phoneNo: '2607 | 2707',
    //   gsec: 'Sanyam Chouksey',
    //   gsecPhoneNo: '9407519666',
    //   gsecEmail: 'sanyam.chouksey18@gmail.com',
    //   image: '7.jpg',
    //   url: 'http://gymkhana.iitb.ac.in/~hostel8/'
    // },
    // {
    //   hostel: 'H8',
    //   phoneNo: '2608 | 2708',
    //   gsec: 'Abhisek Kumar',
    //   gsecPhoneNo: '8763349049',
    //   gsecEmail: 'avisekkumar027@gmail.com',
    //   image: '8.jpg',
    //   url: 'http://gymkhana.iitb.ac.in/~hostel9/'
    // },
    {
      hostel: 'H9',
      phoneNo: '2609 | 2709',
      gsec: 'Priyatham Peddinti',
      gsecPhoneNo: '7700901983',
      gsecEmail: 'gsech9@iitb.ac.in',
      image: '9.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel9/'
    },
    {
      hostel: 'H10',
      phoneNo: '2610 | 2710',
      gsec: 'Nisha Chhikara',
      gsecPhoneNo: '9899554899',
      gsecEmail: 'gsech10@iitb.ac.in',
      image: '10.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel10/'
    },
    {
      hostel: 'H11',
      phoneNo: '2611 | 2711',
      gsec: 'Kamlika Gupta',
      gsecPhoneNo: '9999218355',
      gsecEmail: 'gsech11@iitb.ac.in',
      image: '11.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel11/'
    },
    {
      hostel: 'H12',
      phoneNo: '2612 | 2712',
      gsec: 'Ravi Prakash',
      gsecPhoneNo: '8369002737',
      gsecEmail: 'maurya.ravi007@gmail.com',
      image: '12.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel12/'
    },
    {
      hostel: 'H13',
      phoneNo: '2613 | 2713',
      gsec: '',
      gsecPhoneNo: '',
      gsecEmail: '',
      image: '13.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel13/'
    },
    {
      hostel: 'H14',
      phoneNo: '2614 | 2714',
      gsec: 'Rishabh Jaiswal',
      gsecPhoneNo: '9935781312',
      gsecEmail: 'gsech14@iitb.ac.in',
      image: '14.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel14/'
    },
    {
      hostel: 'H15',
      phoneNo: '2715',
      gsec: 'Ashwini Bunkar',
      gsecPhoneNo: '9967850204',
      gsecEmail: 'gsech15@iitb.ac.in',
      image: '15.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel15/'
    },
    {
      hostel: 'H16',
      phoneNo: '2716',
      gsec: 'Gurpreet Singh Dhillon',
      gsecPhoneNo: '9464208257',
      gsecEmail: 'gsech16@iitb.ac.in',
      image: '16.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel16/'
    },
    {
      hostel: 'H18',
      phoneNo: '2618',
      gsec: 'Nikhil Rodekar',
      gsecPhoneNo: '8879651258',
      gsecEmail: 'gsech18@iitb.ac.in',
      image: '18.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel18/'
    },
    {
      hostel: 'Tansa',
      phoneNo: '2620 | 2720',
      gsec: 'Vijendra Kumar Arya',
      gsecPhoneNo: '8687491436',
      gsecEmail: 'gsectansa@iitb.ac.in',
      image: 'tansa.png',
      url: 'http://gymkhana.iitb.ac.in/~tansa/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
