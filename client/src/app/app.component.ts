import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Datting app!';
   users : any;
   

  constructor( private accountService: AccountService) {
  
  }
  ngOnInit(): void {
    // fetch the users
    // this.getUsers();
    this.setCurrentUser();

  }

  setCurrentUser(){
    
    const user: User = JSON.parse(localStorage.getItem('user')!);  // tại sao cho thêm ! nó lại đc
    this.accountService.setCurrentUser(user);
    
  }
  //tạm thời k sử dụng getuser

  // getUsers()
  //   {
  //     this.http.get("https://localhost:5001/api/users").subscribe(response => {
  //       this.users = response;
  //     }, error =>{ 
  //       console.log(error)
  //     });
  //   }







}

