import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post-interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {
  posts:Array<Post> = []
  constructor(
    private post:PostService
  ) { }

  ngOnInit() {
    this.post.getPostsSaved().then(posts=>{
      this.posts = posts
      console.log(this.posts)
    })
  }

}
