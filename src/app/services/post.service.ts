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
interface Thread{
  Locality:string,
  Business:string,
  Rote:string,
  Title:string,
  Content:string,
  Images:Array<string>,
  Complement:Thread
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  post:Post
  thread:Thread
  apiAddress:string = 'http://bbed-45-165-177-121.ngrok.io'
  constructor(private http:HttpClient, private storage:Storage) { }
  async getPost(user,postId){
    const token = await this.getToken()
    return this.http.get(`${this.apiAddress}/${user}/postId`, {headers:{
      "Authorization": token
    }}).pipe()
  }
  addPost(thread:Thread){
    console.log(thread)
    if(!this.thread){
      this.thread = thread
    }else{
      this.complement(this.thread, thread)
    }
  }
  complement(thread:Thread, complement){
    //
    if(thread.Complement == null || !thread.Complement){
      thread.Complement = complement
    }else{
      this.complement(thread.Complement, complement)
    }
  }
  async getToken(){
    await this.storage.create()
    return await this.storage.get('ACCESS_TOKEN') 
  }
  async getUser(){
    await this.storage.create()
    return await this.storage.get('USER') 
  }
  async createPost(){
    if(this.thread){
      let token = await this.getToken()
      let user = await this.getUser()
    return  this.http.post(`${this.apiAddress}/user/publication/publish`, this.thread, {headers:{
      "Authorization": token
    }})
    }
    
  }
  async getPosts(){
    let posts = await this.storage.get('POSTS')    
    let token = await this.getToken()
    return this.http.get(`${this.apiAddress}/getPosts`, {headers: {"Authorization": token}})
      .pipe(
        tap(async (res:PostResponse)=>{
          await this.storage.create()
          await this.storage.set('POSTS', res.posts)
        })
    )
  }
 
}
