import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  posts:Array<Object>=[]
  constructor(
    private postService:PostService
  ) {
    
  }
  loadPosts(event){
    setTimeout(()=>{
      this.getPosts(event)
      let maxPosts = 1000
      console.log(this.posts.length)
      if(this.posts.length>=maxPosts){
        event.target.disabled = true
      } 
    }, 300)
    
  }
  getPosts(event?):void{
    this.postService.getPosts().then(res=>{
      res.subscribe((res:any)=>{
        this.posts = res
      })
      if(event){
        event.target.complete()
      }
    })
  }
  ngOnInit() {
    this.getPosts() 
  }

}
