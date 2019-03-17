import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GulmoharApiService } from '../_services/gulmohar-api.service';


@Component({
  selector: 'app-gulmohar-menu',
  templateUrl: './gulmohar-menu.component.html',
  styleUrls: ['./gulmohar-menu.component.css']
})
export class GulmoharMenuComponent implements OnInit {

  menuItems: any;
  imageUrl:string;
  
  constructor(private gulmoharApiService: GulmoharApiService) { }

  ngOnInit() {
  
    this.gulmoharApiService.get_menu_items()
      .subscribe(
        (res) => this.menuItems = res,
        (err) => console.log(err)
      )

    this.imageUrl = this.gulmoharApiService.get_poster_url() + '?' + new Date().getTime();

  }

}
