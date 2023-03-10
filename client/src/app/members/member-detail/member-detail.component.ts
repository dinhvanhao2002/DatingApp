import { Photo } from './../../_models/photo';
import { Member } from 'src/app/_models/member';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from 'src/app/_services/members.service';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

export class MemberDetailComponent implements OnInit{

 @Input() member! : Member;
//  member : any;
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];


  // để ! như này cho rằng biến k phải null hoặc undefined

  constructor(private memberService: MembersService, private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadMember();
    this.galleryOptions=[
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false,

      }
    ];


  }

  getImages(): NgxGalleryImage[]{
    const imageUrls = [];
    for(const photo of this.member.photos){
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
    }
    return  imageUrls;
  }


  loadMember(){
    this.memberService.getMember(this.router.snapshot.paramMap.get('username')||"").subscribe(member => {
      this.member = member;
      this.galleryImages=this.getImages();
    }, error =>{
      console.log(error);
    })

  }

}
