import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GulmoharApiService {

  // constructor() { }
  constructor(private http: HttpClient, private router: Router) {
  }

  private base_url = environment.apiBaseUrl;

  get_menu_poster() {
    return this.http.get(`${this.base_url}/menu/poster/gulmohar/`);
  }

  get_menu_items(){
    return this.http.get(`${this.base_url}/menu/gulmohar`)
  }

  get_menu_item_by_id(id){
    return this.http.get(`${this.base_url}/menu/gulmohar/${id}`)
  }

  add_menu_item(data){
    console.log(data)
    return this.http.post(`${this.base_url}/menu/gulmohar`,data)
  }

  delete_item_by_id(id){
    return this.http.delete(`${this.base_url}/menu/gulmohar/${id}`)
  }

  modify_menu_items(data,id) {
    return this.http.put(`${this.base_url}/menu/gulmohar/${id}`,data)  
  }

  upload_poster(poster){
    return this.http.post(`${this.base_url}/menu/poster/gulmohar`,poster)
  }

  get_poster_url(){
    return `${this.base_url}/menu/poster/gulmohar`
  }
}
