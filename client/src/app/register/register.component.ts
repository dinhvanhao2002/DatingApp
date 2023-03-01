import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {
  //@Input() userFormHomeComponent: any;  // được sử dụng để chuyền dữ liệu từ cmp cha sang cmp con
  @Output() cancelRegister= new EventEmitter();
  public model: any = {}; 
  // vì sử dụng public tức là nó khởi tạo giá trị ban đầu của model là đối tượng rông 
 

  constructor(private accountService:AccountService, private toastr: ToastrService) { }
  ngOnInit(): void {
    
  }

  register(){
    this.accountService.register(this.model).subscribe(response=>{
        console.log(response);
        this.cancel();
    },error =>{
      console.log(error);
      this.toastr.error(error.error)
    })
  }
  
  cancel(){
    console.log('cancelled');
    this.cancelRegister.emit(false);
    
  }

}
