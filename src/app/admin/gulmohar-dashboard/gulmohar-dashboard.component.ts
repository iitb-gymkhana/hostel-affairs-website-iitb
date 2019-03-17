import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { GulmoharApiService } from '../../_services/gulmohar-api.service';
import { ApiService } from '../../_services/api.service';


@Component({
  selector: 'app-gulmohar-dashboard',
  templateUrl: './gulmohar-dashboard.component.html',
  styleUrls: ['./gulmohar-dashboard.component.css']
})
export class GulmoharDashboardComponent implements OnInit {

  menuItems: any;
  menuItem: any;
  isDisabled = true;
  editItem: boolean;
  addItem: boolean;
  disable_submit: Boolean;
  readonly: Boolean;
  imageUrl:String;
  showImage:Boolean;
  form: FormGroup;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private api: ApiService, private gulmoharApiService: GulmoharApiService) { this.createForm();}

  ngOnInit() {

    this.editItem = false
    this.disable_submit = true
    this.addItem = false
    this.readonly = true
    this.imageUrl=""
    // console.log(this.editItem);
    this.showImage=false;
    this.imageUrl = this.gulmoharApiService.get_poster_url()

    this.gulmoharApiService.get_menu_items()
      .subscribe(
        (res) => this.menuItems = res,
        (err) => console.log(err)
      )

    this.menuItem = {
      category: "",
      menu: ""
    }

  }

  createForm() {
    this.form = this.fb.group({
      poster: null
    });
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('poster').setValue(file);
    }
    this.imageUrl = this.gulmoharApiService.get_poster_url() + '?' + new Date().getTime();

  }

  private prepareSave(): any {
    let input = new FormData();
    // input.append('name', this.form.get('name').value);
    input.append('poster', this.form.get('poster').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    this.uploadposter(formModel)
    
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      alert('Upload complete!');
      this.loading=false;
      this.imageUrl = this.gulmoharApiService.get_poster_url() + '?' + new Date().getTime();
      this.showImage=true 
    }, 5000);
    // this.back()
  }

  clearFile() {
    this.form.get('poster').setValue(null);
    this.fileInput.nativeElement.value = '';
  }


  editAllowed(menuItem) {
    if (this.editItem) {
      // console.log("edit here")
      // console.log(menuItem)
      this.gulmoharApiService.modify_menu_items(menuItem, menuItem._id)
        .subscribe(
          console.log,
          console.log
        )
      this.readonly = true
    }

    if (this.addItem) {
      // console.log("add here");
      // console.log(menuItem)
      this.gulmoharApiService.add_menu_item(menuItem)
        .subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        )
      this.readonly = true
    }
  }

  logout() {
    this.api.logout_user()
  }

  get_form(id) {
    this.editItem = true;
    this.addItem = false;
    this.readonly = true;
    this.gulmoharApiService.get_menu_item_by_id(id)
      .subscribe(
        (res) => this.menuItem = res,
        (err) => console.log(err)
      )

  }

  delete_item(id) {
    this.gulmoharApiService.delete_item_by_id(id)
      .subscribe(
        (res) => this.back(),
        console.log
      )
  }


  add_item() {
    this.editItem = false;
    this.addItem = true;
    this.readonly = false;
    this.menuItem.category = "";
    this.menuItem.menu = "";
  }

  edit() {
    this.readonly = false;
  }

  back() {
    this.editItem = false
    this.disable_submit = true
    this.addItem = false

    this.gulmoharApiService.get_menu_items()
      .subscribe(
        (res) => this.menuItems = res,
        (err) => console.log(err)
      )

    this.menuItem = {
      category: "",
      menu: ""
    }

  }

  

  uploadposter(data){
    this.gulmoharApiService.upload_poster(data)
      .subscribe(
        (res) => console.log(res),
        console.log
      )
    
    }
  
}
