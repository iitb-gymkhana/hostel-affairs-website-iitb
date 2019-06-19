import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ha-council',
  templateUrl: './ha-council.component.html',
  styleUrls: ['./ha-council.component.css']
})
export class HaCouncilComponent implements OnInit {
  // TODO: fetch these information from backend
  council18_19 = {
    posts: [
      {
        post: 'General Secretary of Hostel Affairs (GSHA)',
        members: [
          {
            name: 'Abhilash Karri',
            emails: ['gsecha@iitb.ac.in', 'abhilashkarri29@gmail.com'],
            numbers: ['7738692865'],
            hostel: 'H3/277',
            fb: 'https://www.facebook.com/abhilash.karri',
            image: 'abhilash.png'
          }
        ]
      },
      {
        post: 'Institute Secretaries of Hostel Affairs (ISHAs)',
        members: [
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
            hostel: 'H2/223',
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
        ]
      },
      {
        post: 'Girls Nominee',
        members: [
          {
            name: 'Harshita Verma',
            emails: ['harshita.verma97@gmail.com'],
            numbers: ['8828494844'],
            hostel: 'H10/N210',
            fb: 'https://www.facebook.com/harshita.verma.142',
            image: 'harshita.png'
          }
        ]
      },
      {
        post: 'Institute Secretary of International Relations',
        members: [
          {
            name: 'Akash Chikhalikar',
            emails: ['isecir@iitb.ac.in'],
            numbers: ['9867843415'],
            hostel: 'H2/145',
            fb: 'https://www.facebook.com/AKC141096',
            image: 'akash.png'
          }
        ]
      },
      {
        post: 'Institute System Administrators',
        members: [
          {
            name: 'Kethan Chauhan',
            emails: ['kethan88@gmail.com', 'mlc@iitb.ac.in'],
            numbers: ['8142142827'],
            hostel: 'H6/104',
            fb: 'https://www.facebook.com/kethan.chauhan',
            image: 'kethan.png'
          },
          {
            name: 'Himanshu Upreti',
            emails: ['reach_himanshu@iitb.ac.in', 'mlc@iitb.ac.in'],
            numbers: ['8750211538'],
            hostel: 'H16/B306',
            fb: 'https://www.facebook.com/contact.himanshuu',
            image: 'himanshu.png'
          },
          {
            name: 'Rohit Prasad',
            emails: ['rohitrp@iitb.ac.in', 'mlc@iitb.ac.in'],
            numbers: ['8460873702'],
            hostel: 'H16/B306',
            fb: 'https://www.facebook.com/rohitrp95',
            image: 'rohit.png'
          }
        ]
      },
      {
        post: 'Overall Coordinator, Student Alumni Relations Cell',
        members: [
          {
            name: 'Samarth Agrawal',
            emails: ['samarth@sarc-iitb.org'],
            numbers: ['7045800466'],
            hostel: 'H2',
            fb: 'https://www.facebook.com/samarth.friends20',
            image: 'samarth.png'
          }
        ]
      },
      {
        post: 'Overall Coordinator, Hygiene Committee',
        members: [
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
        ]
      },
      {
        post: 'Overall Coordinator, Sustainable Cell',
        members: [
          {
            name: 'Aditya Devalla',
            emails: ['devallaaditya456@gmail.com'],
            numbers: ['7799323800', '8919254673'],
            hostel: 'H9/228',
            fb: 'https://www.facebook.com/aditya.devalla.90',
            image: 'aditya.png'
          },
          {
            name: 'Abhay Menon',
            emails: ['s.abhaymenon@gmail.com'],
            numbers: ['9769439840'],
            hostel: 'H8/176',
            fb: 'https://www.facebook.com/abhay.menon.71',
            image: 'abhay.png'
          }
        ]
      },
      {
        post: 'Convener, Sustainable Cell',
        members: [
          {
            name: 'Harsha Pottluri',
            emails: ['harshapotluri99@gmail.com'],
            numbers: ['8897909999'],
            hostel: 'H3/268',
            fb: 'https://www.facebook.com/profile.php?id=100008396193291',
            image: 'harsha.png'
          },
          {
            name: 'Hrushikesh Bodas',
            emails: ['hrushikeshcoc@gmai.com'],
            numbers: ['9969560413'],
            hostel: 'H2/47',
            fb: 'https://www.facebook.com/hrushikesh.bodas',
            image: 'hrushikesh.png'
          }
        ]
      }
    ]
  };

  council19_20 = {
    posts: [
      {
        post: 'General Secretary of Hostel Affairs (GSHA)',
        members: [
          {
            name: 'Arbaj Ahmed Khilji',
            emails: ['gsecha.iitb@gmail.com'],
            numbers: ['9987096721'],
            fb: 'https://www.facebook.com/arbajkhan7737',
            image: 'arbaj.jpg'
          }
        ]
      },
      {
        post: 'Institute Secretaries of Hostel Affairs (ISHAs)',
        members: [
          {
            name: 'Mohd. Zakir Hussain',
            emails: ['mohdzakirhussain27@gmail.com'],
            numbers: ['9144880055'],
            image: 'zakir.jpg'
          },
          {
            name: 'Siddhant Suhas Patil',
            emails: ['siddhantpatilsuhas@gmail.com'],
            numbers: ['8355925613'],
            image: 'siddhant.jpg'
          },
          {
            name: 'Harsha Potluri',
            emails: ['harshapotluri99@gmail.com'],
            numbers: ['8897909999'],
            image: 'harsha.jpg'
          },
          {
            name: 'Arunesh Pandey',
            emails: ['pandeyarunesh1@gmail.com', '183110044@iitb.ac.in'],
            numbers: ['8596955591'],
            image: 'arunesh.jpg'
          }
        ]
      },
      {
        post: 'Overall Coordinator, Hygiene Committee',
        members: [
          {
            name: 'Eva Judy',
            emails: ['evajudy@iitb.ac.in'],
            numbers: ['8518846450', '9769389629'],
            image: 'eva.jpg'
          },
          {
            name: 'Drish Mahnot',
            emails: ['drish.sanghvi@gmail.com'],
            numbers: ['7738869938', '7021381926'],
            image: 'drish.jpg'
          }
        ]
      },
      {
        post: 'Institute Secretary of International Relations',
        members: [
          {
            name: 'Shubham Gupta',
            emails: ['shubhamg763@gmail.com'],
            numbers: ['7506090043', '9372595618'],
            image: 'shubham.jpg'
          }
        ]
      },
      {
        post: 'Institute System Administrators',
        members: [
          {
            name: 'Varun Patil',
            emails: ['mlc@iitb.ac.in', 'varunpatil@iitb.ac.in'],
            numbers: ['8454954434'],
            image: 'varun.jpg'
          },
          {
            name: 'Nautatva Navlakha',
            emails: ['mlc@iitb.ac.in', 'nautatva@iitb.ac.in'],
            numbers: ['8275269688'],
            image: 'nautatva.jpg',
            fb: 'https://www.facebook.com/nautatva.navlakha'
          }
        ]
      }
    ]
  };

  councils = [
    {
      year: '18-19',
      council: this.council18_19
    },
    {
      year: '19-20',
      council: this.council19_20
    }
  ];

  // assuming above councils data is ordered by year
  councilYear = this.councils.length - 1;
  
  

  constructor() {}

  ngOnInit() {}
}
