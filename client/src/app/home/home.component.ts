import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor() {

  }
  ngOnInit() {
    
  }

  registerToggle() {
    // phương thức này đc chuyển đổi đk 

    this.registerMode =!this.registerMode;
  }


 

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }


}

// thắc mắc : khi mà tạo cmp ý nó k có cái implement onnit 