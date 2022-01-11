import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss'],
})
export class ComentarioComponent implements OnInit {
  @Input('comment_data') data
  constructor(
    private post:PostService,
    private user:UserService
  ) { }

  ngOnInit() {
    console.log(this.data)
  }
  async upvoteComment(){
    const token = await this.user.getToken()
    const user = await this.user.getUser()
    this.post.upvoteComment(user.id,this.data.id,token).subscribe(res=>{
      console.log(res)
      this.data.upVotes++
    }, (err)=>{
      if(err.status == 404){
        
      }
    })
  }

}
