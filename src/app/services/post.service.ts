import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostService {
  post:Object

  constructor(private http:HttpClient) { }
  getPost(){
    return  this.http.get('http://localhost:8081/post')
  }
 
}
