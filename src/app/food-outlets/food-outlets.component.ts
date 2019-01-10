import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-food-outlets',
  templateUrl: './food-outlets.component.html',
  styleUrls: ['./food-outlets.component.css']
})
export class FoodOutletsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.get_outlets()
  }

  display_menu_modal: boolean = false
  display_ratings_modal: boolean = false
  food_outlets: object;
  ratings: object;
  menu: any
  menu_keys: Array<string>
  menu_items = []


  get_outlets() {
    this.api.get_food_outlets().subscribe( data => {
      this.food_outlets = data
    })
  }
  
  get_food_outlet_ratings(outlet_id) {
    this.api.get_ratings(outlet_id).subscribe( data => {
      this.ratings = data
    }, err => {
      console.log(err)
    })
  }

  get_food_outlet_menu(id) {
    this.api.get_food_outlet_menu(id).subscribe( data => {
      this.menu = data['menu']
      this.menu_keys = Object.keys(this.menu)
      for(let key of this.menu_keys) {
        this.menu_items.push(this.menu[key])
      }
    }, err => {
      console.log(err)
    })
  }

  show_modal( modal_name, id){
    if(modal_name === 'menu'){
      this.display_ratings_modal = false
      this.display_menu_modal = true
      this.get_food_outlet_menu(id)
    } 
    if(modal_name === 'ratings'){
      this.display_menu_modal = false
      this.display_ratings_modal = true
      this.get_food_outlet_ratings(id)
    }
  }

  close_modal(){
    this.display_menu_modal = false
    this.display_ratings_modal = false
  }
  
}
