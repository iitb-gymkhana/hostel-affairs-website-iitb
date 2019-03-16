import { Component, OnInit, AfterViewInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { NgProgress, NgProgressRef } from "@ngx-progressbar/core";

@Component({
  selector: 'app-eshuttle',
  templateUrl: './eshuttle.component.html',
  styleUrls: ['./eshuttle.component.css']
})
export class EshuttleComponent implements OnInit, AfterViewInit {

  scheduleUrl = environment.eshuttleSchedule;
  progressBar: NgProgressRef;

  constructor(
    private progress: NgProgress
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.progressBar = this.progress.ref('progress-bar')
    this.progressBar.start();
  }

}
