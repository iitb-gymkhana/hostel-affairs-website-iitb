import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) {
  }

  private base_url = environment.apiBaseUrl;

  //auth functions
  logout_user() {
    localStorage.removeItem('token')
    this.router.navigate(['/admin'])
  }

  get_user_id(){
    const helper = new JwtHelperService();
    const user_id = helper.decodeToken(localStorage.getItem('token'))['user_id']
    return user_id;
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  //admin user apis
  admin_login(body) {
    return this.http.post<any>(`${this.base_url}/users/login`, body)
  }

  // outlet apis
  get_food_outlets() {
    return this.http.get(`${this.base_url}/outlets`)
  }

  get_outlet_by_id(id) {
    return this.http.get<any>(`${this.base_url}/outlets/${id}`)
  }

  add_food_outlet(body) {
    return this.http.post(`${this.base_url}/outlets`, body)
  }

  edit_food_outlet(body) {
    return this.http.put(`${this.base_url}/outlets`, body)
  }

  delete_food_outlet(id) {
    return this.http.delete(`${this.base_url}/outlets/${id}`)
  }

  // menu apis
  get_outlet_menus() {
    return this.http.get(`${this.base_url}/outlet_menus`)
  }

  get_food_outlet_menu(id) {
    return this.http.get(`${this.base_url}/outlets/${id}/menu`)
  }

  get_menu_by_id(id) {
    return this.http.get(`${this.base_url}/outlet_menus/${id}`)
  }

  add_menu(body) {
    return this.http.post(`${this.base_url}/outlet_menus`, body)
  }

  edit_menu(body) {
    return this.http.put(`${this.base_url}/outlet_menus`, body)
  }

  delete_menu(id) {
    return this.http.delete(`${this.base_url}/outlet_menus/${id}`)
  }

  // rating apis
  get_all_ratings() {
    return this.http.get(`${this.base_url}/ratings`)
  }

  get_ratings(outlet_id) {
    return this.http.get(`${this.base_url}/outlets/${outlet_id}/ratings`)
  }

  get_rating_by_id(id) {
    return this.http.get<any>(`${this.base_url}/ratings/${id}`)
  }

  add_rating(body) {
    return this.http.post(`${this.base_url}/ratings`, body)
  }

  edit_rating(body) {
    return this.http.put(`${this.base_url}/ratings`, body)
  }

  delete_rating(id) {
    return this.http.delete(`${this.base_url}/ratings/${id}`)
  }
}
