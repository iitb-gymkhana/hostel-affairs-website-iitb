import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ha-council-card',
  templateUrl: './ha-council-card.component.html',
  styleUrls: ['./ha-council-card.component.css']
})
export class HaCouncilCardComponent implements OnInit {
  @Input() member: any;

  constructor() { }

  ngOnInit() {
  }

}
