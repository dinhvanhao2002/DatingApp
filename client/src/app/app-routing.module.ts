import { ServerErrorComponent } from './errors/server-error/server-error.component';
 import {  TestErrorsComponent } from './errors/test-errors/test-errors.component';
 import { NotFoundComponent } from './errors/not-found/not-found.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers:'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent, canActivate:[AuthGuard]},
      {path: 'members/:username', component: MemberDetailComponent}, // chuyển thành username
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
    ]
    //khi cho canActive vào thì nó sẽ thông báo hết all
  },
  // thường để xác định 1 root mặc định khi ngừi dùng nhập 1 url hợp lệ
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},
  // sau đó chuyển đến liên kết nav
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
