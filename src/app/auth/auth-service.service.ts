import { Injectable } from '@angular/core'
import { HttpClient } from  '@angular/common/http'
import { tap } from  'rxjs/operators'
import { Observable, BehaviorSubject } from  'rxjs'
import {User} from './user'
import { AuthResponse } from  './auth-response'
import { Storage } from '@ionic/storage-angular'
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:8081'
  authSubject  =  new  BehaviorSubject(false)
  cookie:string
  public user:object
  search:String
  constructor(private router: Router,private  httpClient:  HttpClient, private storage:Storage) { 
  }
  login(user: User): Observable<AuthResponse>  {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
      tap(async (res:  AuthResponse ) => {
        if (res.user) {
            await this.storage.create()
            await this.storage.set("ACCESS_TOKEN", res.user.access_token)
            await this.storage.set("EXPIRES_IN", res.user.expires_in)
            this.authSubject.next(true)
        }
      })

    )
  }
  cadastro(user: User): Observable<AuthResponse>  {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/cadastro`, user).pipe(
      tap(async (res:  AuthResponse ) => {
        if (res.user) {
            await this.storage.create()
            await this.storage.set("ACCESS_TOKEN", res.user.access_token)
            await this.storage.set("EXPIRES_IN", res.user.expires_in)
            this.authSubject.next(true)
        }
      })

    )
  }
  logado(){
    this.storage.create()
    let token =  this.storage.get("ACCESS_TOKEN")
    token.then((token)=>{
      if(token){
        this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/logado`, {token:token}).subscribe((res:AuthResponse)=>{
          if(!res.user){
            this.router.navigate(['home'])
          }
        })
      }else{
        this.router.navigate(['home'])
      }
      
    })
  }
  async logout(){
    await this.storage.create()
    await this.storage.remove("ACCESS_TOKEN")
    await this.storage.remove("EXPIRES_IN")
    this.authSubject.next(false)  
  }
 
}
