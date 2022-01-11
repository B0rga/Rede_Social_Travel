import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Storage } from '@ionic/storage';
import { tap } from 'rxjs/operators';
import { CameraService } from './camera.service';
import {apiAddress} from './api-address'
import {Post} from '../post-interface'
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
    console.log(token)
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
    return this.http.get(`${this.apiAddress}/${user}/publication/${postId}/comments`, {headers:{
      "Authorization": token
    }}).pipe()
  }
  async getPopular(){
    let token = await this.getToken()
    return this.http.get(`${this.apiAddress}/home/popular`, {headers: {"Authorization": `Bearer ${token}`}})
  }
  async getPosts(){
    let token = await this.getToken()
    let user = await this.getUser()
    return this.http.get(`${this.apiAddress}/home/recommended/${user.id}`, {headers: {"Authorization": `Bearer ${token}`}})
 
  }
  evaluetePublication(user,rate,token){
    return this.http.post(`${this.apiAddress}/${this.openPost.author.id}/publication/${this.openPost.id}/evaluate`, {UserId:user.id, PubId:this.openPost.id, Rate:rate}, {headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
  async savePost(post?){
    await this.storage.create()
    let posts:Array<Post> = []
    if(await this.storage.get("POSTS")){
      posts = await this.storage.get("POSTS")
    }
    if(post){
      posts.push(post)
    }else{
      posts.push(this.openPost)
    }
    await this.storage.set("POSTS", posts)
  }
  async getPostsSaved(){
    await this.storage.create()
    const posts = await this.storage.get("POSTS")
    return posts
  }
  getOneEvaluetion(userid,token){
    return this.http.get(`${apiAddress}/${this.openPost.id}/${this.openPost.author.id}/evaluetion/${userid}`, {headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
  commentPublication(user, content, token){
    console.log(this.openPost)
    return this.http.post(`${this.apiAddress}/${this.openPost.author.id}/publication/${this.openPost.id}/comments`, {UserId: user, PubId: this.openPost.id, Content: content},{headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
  upvoteComment(user,commentId, token){
    return this.http.post(`${apiAddress}/${this.openPost.author.id}/publication/${this.openPost.id}/comment/${commentId}/upvote`,{
      UserId:user,
      CommentId:commentId
    },{headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
}
