import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Storage } from '@ionic/storage';
import { tap } from 'rxjs/operators';
interface Post{
  username:string
  postcontent:string
  city:string
  country:string
}
interface PostResponse{
  posts:Array<Post>
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  post:Object
  apiAddress:string = 'http://370f-45-165-177-53.ngrok.io'
  constructor(private http:HttpClient, private storage:Storage) { }
  getPost(){
    return this.http.get(`${this.apiAddress}/getPosts`).pipe()
  }
  getPosts(){
    return this.http.get(`${this.apiAddress}/getPosts`).pipe(
      tap(async (res:PostResponse)=>{
        await this.storage.create()
        await this.storage.set('POSTS', res.posts)
      })
    )
  }
 
}
