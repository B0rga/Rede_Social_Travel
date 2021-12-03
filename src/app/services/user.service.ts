import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import {apiAddress} from './api-address'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiAddress:string = apiAddress
  otherUser:any
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
    await this.storage.create()
    await this.storage.set("USER", user)
  }
}
