import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@azure/core-http';
import { Storage } from '@ionic/storage-angular'
import { tap } from 'rxjs/operators';
import {apiAddress} from './api-address'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiAddress:string = apiAddress
  otherUser:any
  stars:number = 0
  newEmail:string = ''
  constructor(private storage:Storage, private http:HttpClient) { }
  async getToken(){
    await this.storage.create()
    return await this.storage.get('ACCESS_TOKEN') 
  }
  async getUser(){
    await this.storage.create()
    return await this.storage.get('USER') 
  }
  consultUser(userId){
    return this.http.get(`${this.apiAddress}/user/${userId}`)
  }
  async updateUser(user){
    console.log(user)
    await this.storage.create()
    await this.storage.set("USER", user)
  }
  updateProfileImage(imageName, userId, token){
    console.log('sla')
    return this.http.put(`${apiAddress}/user/update/profileimage`, {userId:userId, ImageUrl:imageName}, {headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
  updateBannerImage(imageName, userId, token){
    return this.http.put(`${apiAddress}/user/update/profileBanner`, {userId:userId, ImageUrl:imageName}, {headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
  
  followUser(user, followed, token){
    return this.http.post(`${this.apiAddress}/user/follow`, {followerId: user, followedId:followed}, {headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
  getFolloweds(user, token){
    return this.http.get(`${this.apiAddress}/user/${user}/followeds`, {headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
  unFollowUser(user, followed, token){

    return this.http.delete(`${this.apiAddress}/user/follow`)
  }
  getNewNotifications(user, token){
    return this.http.get(`${apiAddress}/home/notifications/${user.id}`, {headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
  updateId(currentId,newId,token){
    return this.http.put(`${apiAddress}/user/update/id`, {CurrentId:currentId, NewId:newId}, {headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
  updateName(id, newName, token){
    return this.http.put(`${apiAddress}/user/update/name`, {id:id, NewName:newName}, {headers:{
      "Authorization": `Bearer ${token}`
    }})
  }
  updateEmail(userId, password, token){
    return this.http.put(`${apiAddress}/user/update/email`, {Id:userId, Password:password, NewEmail:this.newEmail},{ headers:{
      "Authorization": `Bearer ${token}`
    }
    })
  }
  async setNotificationsVisualised(visualised){
    await this.storage.create()
    const notifications = await this.storage.get("NOTIFICATIONS")
    if(notifications){
      notifications.concat(visualised)
      await this.storage.set("NOTIFICATIONS", notifications)
    }else{
      await this.storage.set("NOTIFICATIONS", visualised)
    }

  }
  async getNotificationsVisualised(){
    await this.storage.create()
    const notifications = await this.storage.get("NOTIFICATIONS")
    return notifications
  }
}
