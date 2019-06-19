import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ApiService } from '../_services/api.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  login_form: FormGroup

  ngOnInit() {
    this.login_form = this.fb.group({
      user_id: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.login_form.valid){
      this.api.admin_login(this.login_form.value).subscribe( data => {
        localStorage.setItem('token', data.token)
        this.router.navigate(['/adminPage'])
      }, err=> {
        console.log(err)
      })
    }
  }


}
