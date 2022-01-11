import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from  '@angular/common/http'
import { tap } from  'rxjs/operators'
import { Observable, BehaviorSubject } from  'rxjs'
import {User} from './user'
import { AuthResponse } from  './auth-response'
import { Storage } from '@ionic/storage-angular'
import {Router} from '@angular/router'
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus'
import {Login} from './login'
import {apiAddress} from '../api-address'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  apiAdress:  string  =  apiAddress
  authSubject  =  new  BehaviorSubject(false)
  cookie:string
  user:User
  constructor(
    private router: Router,
    private  httpClient:  HttpClient,
    private storage:Storage,
    private fb:Facebook
    ) { 
  }
  login(user: Login): Observable<AuthResponse>  {
    return this.httpClient.post(`${this.apiAdress}/login`, user).pipe(
      tap(async (res:  AuthResponse ) => {
        if(res){
          await this.storage.create()
          await this.storage.set("ACCESS_TOKEN", res.token)
          await this.storage.set("REFRESH_TOKEN", res.refreshToken)
          await this.storage.set("USER", res.user)
          this.router.navigate(['tabs'])
          this.authSubject.next(true)
        }
      })

    )
  }
  emailIsRegistered(email){
    return this.httpClient.get(`${this.apiAdress}/user/validate/email/${email}`)
  }
  idIsRegistered(id){
    return this.httpClient.get(`${this.apiAdress}/user/validate/id/${id}`)
  }
  clearUser(){
    this.user = null
  }
  errorHandling(err:HttpErrorResponse){
    if(err.status == 404){
      alert('Servidor indisponivel')
    }
  }
  createUser(user:User){
    this.user = user
  }
  singIn(): Observable<AuthResponse>  {
    console.log(this.user)
    return this.httpClient.post<AuthResponse>(`${this.apiAdress}/user/create`, this.user).pipe(
      tap(async (res:  AuthResponse ) => {
        if(res){
            await this.storage.create()
            await this.storage.set("ACCESS_TOKEN", res.token)
            await this.storage.set("REFRESH_TOKEN", res.refreshToken)
            await this.storage.set("USER", res.user)
            this.router.navigate(['tabs'])
            this.authSubject.next(true)
        }
      })

    )
  }
  sendMail(code){
    return this.httpClient.get(`${this.apiAdress}/user/verify/email/${this.user.Email}&${code}`)
    .pipe(
      tap(async (res)=>{
        
    }))
    
  }
  loginWithFacebook(){
    this.fb.login(['email','public_profile']).then(async (res:FacebookLoginResponse)=>{
      //this.httpClient.post(`${this.apiAdress}/loginFb`,res).subscribe()
      await this.storage.create()
      await this.storage.set('ACCESS_TOKEN',res.authResponse.accessToken)
      await this.storage.set('EXPIRES_IN',res.authResponse.expiresIn)
      this.router.navigate(['tabs'])
    })
  }
  getUser(userId){
    return this.httpClient.get(`${this.apiAdress}/user/${userId}`)
  }
  setUserInterest(interest){
    this.user.Interests = interest
  }
  setUserLocation(country, locality, countrycode?){
    this.user.Location = {
      Country: country,
      CountryCode: countrycode,
      Locality: locality
    }
  }
  loginWithGoogle(){
    GooglePlus.login({'webClientId':'251518684476-md8hta1ij3eqceu459mumbflf48n5l8v.apps.googleusercontent.com', 'offiline':true})
    .then(res=>console.log(res)).catch(err=>console.log(err))
  }
  async logado(){
    await this.storage.create()
    let token =  await this.storage.get("ACCESS_TOKEN")
    if(token){
      this.router.navigate(['tabs'])
    }else{
      this.router.navigate(['home'])
    }
      
  }
  async logout(){
    await this.storage.create()
    await this.storage.remove("ACCESS_TOKEN")
    await this.storage.remove("REFRESH_TOKEN")
    await this.storage.remove("EXPIRES_IN")
    await this.storage.remove("POSTS")
    await this.storage.remove("USER")
    this.authSubject.next(false)  
  }
 
}
