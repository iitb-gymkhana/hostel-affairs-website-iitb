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
      gsec: 'Kumar Priyanshu',
      gsecPhoneNo: '7045570829',
      gsecEmail: 'priyanshukumar.0309@gmail.com',
      image: '2.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel2/'
    },
    {
      hostel: 'H3',
      phoneNo: '2603 | 2703',
      gsec: '',
      gsecPhoneNo: '',
      gsecEmail: '',
      image: '3.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel3/'
    },
    {
      hostel: 'H4',
      phoneNo: '2604 | 2704',
      gsec: 'Saurabh Rai',
      gsecPhoneNo: '9757412792',
      gsecEmail: 'mailsaurabhrai@gmail.com',
      image: '4.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel4/'
    },
    {
      hostel: 'H5',
      phoneNo: '2605 | 2705',
      gsec: 'Atharva Modi',
      gsecPhoneNo: '9713324731',
      gsecEmail: 'gsec.hostel5.iitb@gmail.com',
      image: '5.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel5/'
    },
    {
      hostel: 'H6',
      phoneNo: '2606 | 2706',
      gsec: 'Sujay Jadhav',
      gsecPhoneNo: '9930518223',
      gsecEmail: 'sujayjadhav0397@gmail.com',
      image: '6.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel7/'
    },
    {
      hostel: 'H7',
      phoneNo: '2607 | 2707',
      gsec: 'Sanyam Chouksey',
      gsecPhoneNo: '9407519666',
      gsecEmail: 'sanyam.chouksey18@gmail.com',
      image: '7.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel8/'
    },
    {
      hostel: 'H8',
      phoneNo: '2608 | 2708',
      gsec: 'Abhisek Kumar',
      gsecPhoneNo: '8763349049',
      gsecEmail: 'avisekkumar027@gmail.com',
      image: '8.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel9/'
    },
    {
      hostel: 'H9',
      phoneNo: '2609 | 2709',
      gsec: 'Manthan Shingala',
      gsecPhoneNo: '9427015139',
      gsecEmail: 'manthanshingala117@gmail.com',
      image: '9.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel10/'
    },
    {
      hostel: 'H10',
      phoneNo: '2610 | 2710',
      gsec: 'Rageshwari',
      gsecPhoneNo: '7387518985',
      gsecEmail: '',
      image: '10.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel10/'
    },
    {
      hostel: 'H11',
      phoneNo: '2611 | 2711',
      gsec: 'Tadar Sahi',
      gsecPhoneNo: '8800627492',
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
      gsec: 'Newton',
      gsecPhoneNo: '9930742189',
      gsecEmail: 'gsech14@iitb.ac.in, newton4050@gmail.com',
      image: '14.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel14/'
    },
    {
      hostel: 'H15',
      phoneNo: '2715',
      gsec: 'Samrat Sagar',
      gsecPhoneNo: '7838836323',
      gsecEmail: 'gsech15@iitb.ac.in',
      image: '15.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel15/'
    },
    {
      hostel: 'H16',
      phoneNo: '2716',
      gsec: 'Gulfan Khan',
      gsecPhoneNo: '8882662838',
      gsecEmail: 'g.k.25278@gmail.com',
      image: '16.jpg',
      url: 'http://gymkhana.iitb.ac.in/~hostel16/'
    },
    {
      hostel: 'Tansa',
      phoneNo: '2620 | 2720',
      gsec: '',
      gsecPhoneNo: '',
      gsecEmail: '',
      image: 'tansa.png',
      url: 'http://gymkhana.iitb.ac.in/~tansa/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
