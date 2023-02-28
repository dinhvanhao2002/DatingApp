import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // oninit là những interface cung cấp bởi angular cỏe , nó bảo gồm pth ngoninit đc gọi lhi component đc khởi tạo và hiện thị lần đầu tiên 

  model: any = {};

  // currentUser$: Observable<User> = new Observable<User>();
  //currentUser$!: Observable<User> //đc khai báo nhưng lại k có giá trị khởi tạo
  // 2 cách đều được



  constructor(public accountService: AccountService)
  {
   
  }

 
  ngOnInit():void{
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    //console.log(this.model);
    this.accountService.login(this.model).subscribe(respone =>{
      console.log(respone);

    }, error =>{
        console.log(error);
    });
    
  }

  // phương thức login của 1 đối tượng accountSevice , đối số truyền vào ở đây là model 
  // cmp nó sẽ đăng ký nhận thông tin từ sever thông qua phươn thưc subcribe
  // biến loggedIn trong cmp đc gán là giá trị tru khi ng dùng đã đăng nhập thành công

  logout(){
    this.accountService.logout();
  }
 
  // phương thức này đc sử dụng để đăng ký currentUser có thể quan sát đc của accountService 

}

// k cần pt getcurrentuser nữa vì chúng tôi đang lấy nó trực tiếp 