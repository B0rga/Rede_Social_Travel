import { Injectable } from '@angular/core'
import { HttpClient } from  '@angular/common/http'
import { tap } from  'rxjs/operators'
import { Observable, BehaviorSubject } from  'rxjs'
import {User} from './user'
import { AuthResponse } from  './auth-response'
import { Storage } from '@ionic/storage-angular'
import {Router} from '@angular/router'
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  AUTH_SERVER_ADDRESS:  string  =  'http://63a6-45-165-177-39.ngrok.io'
  authSubject  =  new  BehaviorSubject(false)
  cookie:string
  public user:object
  constructor(
    private router: Router,
    private  httpClient:  HttpClient,
    private storage:Storage,
    private fb:Facebook
    ) { 
  }
  login(user: User): Observable<AuthResponse>  {
    console.log(user)
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/user/login`, user).pipe(
      tap(async (res:  AuthResponse ) => {
        if (res) {
            alert(res)
            await this.storage.create()
            await this.storage.set("ACCESS_TOKEN", res.Access_token)
            await this.storage.set("EXPIRES_IN", res.Expires_in)
            await this.storage.set("USER", res.User)
            this.authSubject.next(true)
        }
      })

    )
  }
  singIn(user: User): Observable<AuthResponse>  {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/api/user/create`, user).pipe(
      tap(async (res:  AuthResponse ) => {
        if (res.User) {
            await this.storage.create()
            await this.storage.set("ACCESS_TOKEN", res.Access_token)
            await this.storage.set("EXPIRES_IN", res.Expires_in)
            this.authSubject.next(true)
        }
      })

    )
  }
  loginWithFacebook(){
    this.fb.login(['email','public_profile']).then(async (res:FacebookLoginResponse)=>{
      //this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/loginFb`,res).subscribe()
      await this.storage.create()
      await this.storage.set('ACESS_TOKEN',res.authResponse.accessToken)
      await this.storage.set('EXPIRES_IN',res.authResponse.expiresIn)
      this.router.navigate(['tabs'])
    })
  }
  getUser(username){
    this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/api/user/`)
  }
  loginWithGoogle(){
    GooglePlus.login({'webClientId':'251518684476-md8hta1ij3eqceu459mumbflf48n5l8v.apps.googleusercontent.com', 'offiline':true})
    .then(res=>console.log(res)).catch(err=>console.log(err))
  }
  async logado(){
    await this.storage.create()
    let token =  await this.storage.get("ACCESS_TOKEN")
    alert(token)
    if(token){
      this.router.navigate(['tabs'])
    }else{
      
      this.router.navigate(['home'])
    }
      
  }
  async logout(){
    await this.storage.create()
    await this.storage.remove("ACCESS_TOKEN")
    await this.storage.remove("EXPIRES_IN")
    this.authSubject.next(false)  
  }
 
}
