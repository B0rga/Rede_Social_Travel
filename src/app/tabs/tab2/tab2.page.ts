import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  posts:Array<any> = []
  constructor(private post:PostService) { }

  ngOnInit() {
    this.loadPosts()
  }
  loadPosts(){
    this.post.getPopular().then(post=>{
      post.subscribe((res:any)=>{
        this.posts = res.publications
      })
    })
  }
}
