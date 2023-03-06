import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],

})
export class MemberCardComponent implements OnInit {

  @Input() member!: Member;  // khai báo thuộc tính của component
  // input ở đây có thể nhận các giá trị từ component cha thông qua binding
  //

  constructor(){}


  ngOnInit(): void {

  }

}
