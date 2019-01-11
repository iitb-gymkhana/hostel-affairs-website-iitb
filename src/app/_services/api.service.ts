import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) {
  }

  private base_url = "http://localhost:3009/ha_website"

  //auth functions
  logout_user() {
    localStorage.removeItem('token')
    this.router.navigate(['/admin'])
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  //admin user apis
  admin_login(body) {
    return this.http.post<any>(`${this.base_url}/api/users/login`, body)
  }

  // outlet apis
  get_food_outlets() {
    return this.http.get(`${this.base_url}/api/outlets`)
  }

  get_outlet_by_id(id) {
    return this.http.get<any>(`${this.base_url}/api/outlets/${id}`)
  }

  add_food_outlet(body) {
    return this.http.post(`${this.base_url}/api/outlets`, body)
  }

  edit_food_outlet(body) {
    return this.http.put(`${this.base_url}/api/outlets`, body)
  }

  delete_food_outlet(id) {
    return this.http.delete(`${this.base_url}/api/outlets/${id}`)
  }

  // menu apis
  get_outlet_menus() {
    return this.http.get(`${this.base_url}/api/outlet_menus`)
  }

  get_food_outlet_menu(id) {
    return this.http.get(`${this.base_url}/api/outlets/${id}/menu`)
  }

  get_menu_by_id(id) {
    return this.http.get(`${this.base_url}/api/outlet_menus/${id}`)
  }

  add_menu(body) {
    return this.http.post(`${this.base_url}/api/outlet_menus`, body)
  }

  edit_menu(body) {
    return this.http.put(`${this.base_url}/api/outlet_menus`, body)
  }

  delete_menu(id) {
    return this.http.delete(`${this.base_url}/api/outlet_menus/${id}`)
  }

  // rating apis
  get_all_ratings() {
    return this.http.get(`${this.base_url}/api/ratings`)
  }

  get_ratings(outlet_id) {
    return this.http.get(`${this.base_url}/api/outlets/${outlet_id}/ratings`)
  }

  get_rating_by_id(id) {
    return this.http.get<any>(`${this.base_url}/api/ratings/${id}`)
  }

  add_rating(body) {
    return this.http.post(`${this.base_url}/api/ratings`, body)
  }

  edit_rating(body) {
    return this.http.put(`${this.base_url}/api/ratings`, body)
  }

  delete_rating(id) {
    return this.http.delete(`${this.base_url}/api/ratings/${id}`)
  }
}
