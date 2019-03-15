import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-eshuttle',
  templateUrl: './eshuttle.component.html',
  styleUrls: ['./eshuttle.component.css']
})
export class EshuttleComponent implements OnInit {

  scheduleUrl = environment.eshuttleSchedule;
  
  constructor() { }

  ngOnInit() {
  }

}
