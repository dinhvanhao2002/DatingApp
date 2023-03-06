import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private accountService: AccountService, private toastr: ToastrService){
  }

  canActivate(): Observable<boolean>{
    return this.accountService.currentUser$.pipe(
      map((user)=>{
         if (user) return true;
         else {
           this.toastr.error('You shall not pass');
           return false;
         }
      })
    )
  }
}

// 1 lớp bảo vệ quyền truy cập của người dùng đối với một trang hoặc 1 tài nguyên

