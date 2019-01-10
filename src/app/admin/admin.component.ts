import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ApiService } from '../_services/api.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private fb: FormBuilder, private api: ApiService) { }

  tab: string
  FO_card_header: string
  data_list: any
  dropdown_data: any
  menu_form: FormGroup
  outlet_form: FormGroup
  rating_form: FormGroup
  disable_submit: boolean
  tabs: Array<string>
  tab_header_map: object
  show_modal: boolean
  modal_data: any

  ngOnInit() {
    this.tabs = ['models', 'data', 'menu_form', 'outlet_form', 'rating_form']
    this.tab_header_map = {
      'models': 'Food Outlets',
      'data': ['Menu items', 'Outlet items', 'Rating items'],
      'menu_form': 'Menu Form',
      'outlet_form': 'Outlet Form',
      'rating_form': 'Rating Form'
    }
    this.change_tab(this.tabs[0], this.tab_header_map[this.tabs[0]])
    this.show_modal = false

    this.menu_form = this.fb.group({
      _id: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      menu: ['', Validators.required]
    })

    this.outlet_form = this.fb.group({
      _id: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      description: [''],
      menu_id: ['', Validators.required]
    })

    this.rating_form = this.fb.group({
      _id: [{ value: '', disabled: true }],
      visit_date: ['', Validators.required],
      food_outlet_id: ['', Validators.required],
      food_rating: [''],
      operational_rating: [''],
      total_rating: ['']
    })
  }

  logout() {
    this.api.logout_user()
  }

  close_modal() {
    this.show_modal = false
  }

  insert_modal_data(header, body, show_btns: boolean = false, delete_btn: boolean = false) {
    this.modal_data = {
      'header': header,
      'body': body,
      'show_btns': show_btns,
      'delete_btn': delete_btn
    }
    this.show_modal = true
  }

  modal_submit(val, delete_call) {
    if (val === "confirm" && delete_call) {
      if (this.FO_card_header === this.tab_header_map[this.tabs[2]]) {   // menu form delete
        console.log("third")
        let val = this.menu_form.getRawValue()  // .getRawValue() to get disabled form controls as well
        this.api.delete_menu(val['_id']).subscribe(data => {
          this.close_modal()
          this.get_data_list('menu')
        }, err => {
          this.insert_modal_data("Error", JSON.stringify(err.error, undefined, 1), false, false)
        })
      }

      if (this.FO_card_header === this.tab_header_map[this.tabs[3]]) {  // outlet form delete
        let val = this.outlet_form.getRawValue()  // .getRawValue() to get disabled form controls as well
        this.api.delete_food_outlet(val['_id']).subscribe(data => {
          this.close_modal()
          this.get_data_list('outlet')
        }, err => {
          this.insert_modal_data("Error", JSON.stringify(err.error, undefined, 1))
        })
      }

      if (this.FO_card_header === this.tab_header_map[this.tabs[4]]) {   // rating form delete
        let val = this.rating_form.getRawValue()  // .getRawValue() to get disabled form controls as well
        this.api.delete_rating(val['_id']).subscribe(data => {
          this.close_modal()
          this.get_data_list('rating')
        }, err => {
          this.insert_modal_data("Error", JSON.stringify(err.error, undefined, 1))
        })
      }
    }
    if (val === "confirm" && !delete_call) {
      if (this.FO_card_header === this.tab_header_map[this.tabs[2]] && this.menu_form.valid) {   // menu form submit
        let val = this.menu_form.getRawValue()  // .getRawValue() to get disabled form controls as well
        try {
          val['menu'] = JSON.parse(val['menu'])
        } catch (err) {
          this.insert_modal_data("Error in parsing menu json", err, false, false)
          return
        }
        if (val['_id']) {
          this.api.edit_menu(val).subscribe(data => {
            console.log(data)
            this.close_modal()
            this.get_data_list('menu')
          }, err => {
            this.insert_modal_data("Error", JSON.stringify(err.error, undefined, 1), false, false)
          })
        }
        if (!val['_id']) {
          delete val['_id']
          this.api.add_menu(val).subscribe(data => {
            console.log(data)
            this.close_modal()
            this.get_data_list('menu')
          }, err => {
            this.insert_modal_data("Error", JSON.stringify(err.error, undefined, 1), false, false)
          })
        }
      }
      if (this.FO_card_header === this.tab_header_map[this.tabs[3]] && this.outlet_form.valid) {   // outlet form submit
        let val = this.outlet_form.getRawValue()  // .getRawValue() to get disabled form controls as well
        console.log(val)
        if (val['menu_id'].split('ID:').length === 2) {
          val['menu_id'] = val['menu_id'].split('ID:')[1].trim()
        }
        console.log(val)
        if (val['_id']) {
          this.api.edit_food_outlet(val).subscribe(data => {
            console.log(data)
            this.close_modal()
            this.get_data_list('outlet')
          }, err => {
            this.insert_modal_data("Error", JSON.stringify(err.error, undefined, 1), false, false)
          })
        }
        if (!val['_id']) {
          delete val['_id']
          this.api.add_food_outlet(val).subscribe(data => {
            console.log(data)
            this.close_modal()
            this.get_data_list('outlet')
          }, err => {
            this.insert_modal_data("Error", JSON.stringify(err.error, undefined, 1), false, false)
          })
        }
      }
      if (this.FO_card_header === this.tab_header_map[this.tabs[4]] && this.rating_form.valid) {        // rating form submit
        let val = this.rating_form.getRawValue()  // .getRawValue() to get disabled form caontrols as well
        console.log(`before ${val}`)
        if (val['food_outlet_id'].split('ID:').length === 2) {
          val['food_outlet_id'] = val['food_outlet_id'].split('ID:')[1].trim()
        }
        console.log(`after ${val}`)
        if (val['_id']) {
          this.api.edit_rating(val).subscribe(data => {
            console.log(data)
            this.close_modal()
            this.get_data_list('rating')
          }, err => {
            this.insert_modal_data("Error", JSON.stringify(err.error, undefined, 1), false, false)
          })
        }
        if (!val['_id']) {
          delete val['_id']
          this.api.add_rating(val).subscribe(data => {
            console.log(data)
            this.close_modal()
            this.get_data_list('rating')
          }, err => {
            this.insert_modal_data("Error", JSON.stringify(err.error, undefined, 1), false, false)
          })
        }
      }
    }
    if (val === "cancel") {
      this.close_modal()
    }
  }

  onSubmit() {
    this.insert_modal_data("Confirmation", "Are you sure you want to do this operation?", true, false)
  }

  delete_item() {
    this.insert_modal_data("Confirmation", "Are you sure you want to do this operation?", true, true)
  }

  previous() {
    let t_indx = this.tabs.indexOf(this.tab)
    console.log(t_indx)
    if (t_indx > 1) {
      this.change_tab(this.tabs[1], this.tab_header_map[this.tabs[1]][t_indx - 2])
    } else {
      this.change_tab(this.tabs[0], this.tab_header_map[this.tabs[0]])
    }
  }

  change_tab(tab, header) {
    this.tab = tab
    this.FO_card_header = header
  }

  get_data_list(model) {
    if (model === 'menu') {
      this.api.get_outlet_menus().subscribe(data => {
        this.data_list = data
        this.change_tab(this.tabs[1], this.tab_header_map[this.tabs[1]][0])
      })
    }
    if (model === 'outlet') {
      this.api.get_food_outlets().subscribe(data => {
        this.data_list = data
        this.change_tab(this.tabs[1], this.tab_header_map[this.tabs[1]][1])
      })
    }
    if (model === 'rating') {
      this.api.get_all_ratings().subscribe(data => {
        this.data_list = data
        this.change_tab(this.tabs[1], this.tab_header_map[this.tabs[1]][2])
      })
    }
  }

  arrange_dropdown_data(arr, val_id) {
    let val_indx
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id === val_id) {
        val_indx = i
        break
      }
    }
    let ele = arr.splice(val_indx, 1)
    arr.unshift(ele[0])
    return arr
  }

  get_form(id) {
    if (this.FO_card_header === this.tab_header_map[this.tabs[1]][0]) {
      this.menu_form.reset()
      this.api.get_menu_by_id(id).subscribe(data => {
        data['menu'] = JSON.stringify(data['menu'], undefined, 1)
        this.menu_form.patchValue(data)
        this.menu_form.controls['name'].disable()
        this.menu_form.controls['menu'].disable()
        this.disable_submit = true
        this.change_tab(this.tabs[2], this.tab_header_map[this.tabs[2]])
      })
    }
    if (this.FO_card_header === this.tab_header_map[this.tabs[1]][1]) {
      this.outlet_form.reset()
      this.api.get_outlet_by_id(id).subscribe(patch_data => {
        this.api.get_outlet_menus().subscribe(data => {
          this.dropdown_data = data
          this.dropdown_data = this.arrange_dropdown_data(this.dropdown_data, patch_data.menu_id)
          this.outlet_form.patchValue(patch_data)
          this.outlet_form.controls['name'].disable()
          this.outlet_form.controls['description'].disable()
          this.outlet_form.controls['menu_id'].disable()
          this.disable_submit = true
          this.change_tab(this.tabs[3], this.tab_header_map[this.tabs[3]])
        })

      })
    }
    if (this.FO_card_header === this.tab_header_map[this.tabs[1]][2]) {
      this.rating_form.reset()
      this.api.get_rating_by_id(id).subscribe(patch_data => {
        this.api.get_food_outlets().subscribe(data => {
          this.dropdown_data = data
          this.dropdown_data = this.arrange_dropdown_data(this.dropdown_data, patch_data.food_outlet_id)
          let val = new Date(patch_data['visit_date'])
          patch_data['visit_date'] = `${val.getFullYear()}-${('0' + val.getMonth() + 1).slice(-2)}-${('0' + val.getDate()).slice(-2)}`
          this.rating_form.patchValue(patch_data)
          this.rating_form.controls['visit_date'].disable()
          this.rating_form.controls['food_outlet_id'].disable()
          this.rating_form.controls['food_rating'].disable()
          this.rating_form.controls['operational_rating'].disable()
          this.rating_form.controls['total_rating'].disable()
          this.disable_submit = true
          this.change_tab(this.tabs[4], this.tab_header_map[this.tabs[4]])
        })
      })
    }
  }

  enable_controls(form) {
    if (form === this.menu_form) {
      this.menu_form.controls['name'].enable()
      this.menu_form.controls['menu'].enable()
      this.disable_submit = false
    }
    if (form === this.outlet_form) {
      this.outlet_form.controls['name'].enable()
      this.outlet_form.controls['description'].enable()
      this.outlet_form.controls['menu_id'].enable()
      this.disable_submit = false
    }
    if (form === this.rating_form) {
      this.rating_form.controls['visit_date'].enable()
      this.rating_form.controls['food_outlet_id'].enable()
      this.rating_form.controls['food_rating'].enable()
      this.rating_form.controls['operational_rating'].enable()
      this.rating_form.controls['total_rating'].enable()
      this.disable_submit = false
    }

  }

  add_item() {
    if (this.FO_card_header === this.tab_header_map[this.tabs[1]][0]) {
      this.menu_form.reset()
      this.disable_submit = false
      this.enable_controls(this.menu_form)
      this.change_tab(this.tabs[2], this.tab_header_map[this.tabs[2]])
    }
    if (this.FO_card_header === this.tab_header_map[this.tabs[1]][1]) {
      this.outlet_form.reset()
      this.api.get_outlet_menus().subscribe(data => {
        this.dropdown_data = data
        this.enable_controls(this.outlet_form)
        this.outlet_form.controls['menu_id'].patchValue(`${this.dropdown_data[0].display_name} ID: ${this.dropdown_data[0]._id}`)
        this.change_tab(this.tabs[3], this.tab_header_map[this.tabs[3]])
      })
    }
    if (this.FO_card_header === this.tab_header_map[this.tabs[1]][2]) {
      this.rating_form.reset()
      this.api.get_food_outlets().subscribe(data => {
        this.dropdown_data = data
        this.enable_controls(this.rating_form)
        this.rating_form.controls['food_outlet_id'].patchValue(`${this.dropdown_data[0].display_name} ID: ${this.dropdown_data[0]._id}`)
        this.change_tab(this.tabs[4], this.tab_header_map[this.tabs[4]])
      })
    }
  }

}
