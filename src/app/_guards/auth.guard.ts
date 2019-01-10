import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from '../_services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api: ApiService,
    private router: Router) { }

  canActivate(): boolean {
    if (this.api.loggedIn()) {
      return true
    } else {           
      this.router.navigate(['/admin'])
      return false
    }
  }
}
