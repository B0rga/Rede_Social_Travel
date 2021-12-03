import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Storage } from '@ionic/storage';
import { tap } from 'rxjs/operators';
import { CameraService } from './camera.service';
import {apiAddress} from './api-address'
interface Post{
  author: string,
  id: string,
  publishedAt: string,
  locality: string,
  rote: string,
  business: string,
  title: string,
  content: string,
  images: Array<string>,
  complement: Post,
  evaluation: {
      totalRate: Number,
      evaluationsCount: Number,
      rates: Number
  },
  totalComments: Number,
  totalFiveStars: Number,
  totalFourStars: Number,
  totalThreeStars: Number,
  totalTwoStars: Number,
  totalOneStars: Number
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
  apiAddress:string = apiAddress
  userId:any
  openPost:any 
  constructor(private http:HttpClient, private storage:Storage, private cam:CameraService) { }
  async getPost(){
    console.log(this.openPost)
    const token = await this.getToken()
    return this.http.get(`${this.apiAddress}/${this.openPost.author.id}/publication/${this.openPost.id}`, {headers:{
      "Authorization": `Bearer ${token}`
    }}).pipe()
  }
  async getAllPublications(userId){
    const token = await this.getToken()
    return this.http.get(`${this.apiAddress}/${userId}/publication/all`, {headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
  async openProfile(){
    this.userId = await this.getUser()
    console.log(this.userId)
  }
  addPost(thread:Thread){
    this.cam.clearPhotos()
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
  async createPost(thread?){
    if(thread){
      this.addPost(thread)
    }
    if(this.thread){
      let token = await this.getToken()
      console.log(token)
      let user = await this.getUser()
    return  this.http.post(`${this.apiAddress}/${user.id}/publication/publish`, this.thread, {headers:{
      "Authorization": `Bearer ${token}`
    }})
    }
    
  }
  async getComments(user,postId){
    const token = await this.getToken()
    return this.http.get(`${this.apiAddress}/${user}/${postId}/comments`, {headers:{
      "Authorization": token
    }}).pipe()
  }
  async getPopular(){
    let token = await this.getToken()
    return this.http.get(`${this.apiAddress}/home/popular`, {headers: {"Authorization": `Bearer ${token}`}})
      .pipe(
        tap(async (res:PostResponse)=>{
          await this.storage.create()
          await this.storage.set('POSTS', res.posts)
        })
    )
  }
  async getPosts(){
    let token = await this.getToken()
    let user = await this.getUser()
    return this.http.get(`${this.apiAddress}/home/recommended/${user.id}`, {headers: {"Authorization": `Bearer ${token}`}})
      .pipe(
        tap(async (res:PostResponse)=>{
          await this.storage.create()
          await this.storage.set('POSTS', res.posts)
        })
    )
  }

 
}
