import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hostel-card',
  templateUrl: './hostel-card.component.html',
  styleUrls: ['./hostel-card.component.css']
})
export class HostelCardComponent implements OnInit {
  @Input() hostel: any;

  constructor() { }

  ngOnInit() {
  }

}
