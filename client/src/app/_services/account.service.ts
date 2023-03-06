import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl; // đường dẫn đến api
  private currentUserSource = new ReplaySubject<User>(1);  // 1 ở đây nói số phiên bản của ng dùng hiện tại có
  currentUser$ = this.currentUserSource.asObservable();
  // phương thức để cấu hình người dung hiện tại, currUsersource là đc khởi tạo bởi replay
  // cho phép lắng nghe các phiên đăng nhập trc đó , `currentUser$` nó nhận lại các phiên đăng nhập



  // contructor nhận tham chiếu đến 1 đối tượn http client
  constructor(private http:HttpClient) { }
  login(model:any){
    // thực hiện gửi yêu cầu đăng nhập đến API bằng pt http post
    // khi login ở component thì nó sẽ gửi yêu cầu đăng nhập đến 1 đường dẫn http... với dữ liuej modol
    return this.http.post<User>(this.baseUrl + "account/login", model).pipe(
      map((response: User)=>{
        const user = response;
        if(user){
          localStorage.setItem("user",JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }
  // setItem là pt của đối tượng local.. đc sử dụng để lưu trữ đối tượng
  // gửi các yêu cầu đăng nhập tới api , khi mà lấy thành công thì nó lưu trữ trong biến user
  register(moldel : any){
    return this.http.post<User>(this.baseUrl + "account/register", moldel).pipe(
      map((user: User) => {
        if(user){
          localStorage.setItem("user",JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    )
  }
  // phương thức pipe để xử lý dữ liệu trả về từ server trc khi trả về cho client



  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }
  // dùng để thiết lập lại giao thức hiện tại với người dùng trong crtusersource

  logout(){
    localStorage.removeItem("user");
    this.currentUserSource.next(null!);  // thêm null! thì lại được
  }

}



// service này cung cấp 1 phương thưc login để gửi yêu cầu post đến đường dẫn api
// đây là 1 dịch vụ cung cấp chứng năng liên quan đến đăng nhập và đăng ký người dùng



