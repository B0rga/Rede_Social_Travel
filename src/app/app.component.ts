import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './services/auth/auth-service.service';
import { MenuController } from '@ionic/angular';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit{
  thisPage:string = ''
  userProfile:any
  constructor(
    private auth:AuthServiceService,
    private router:Router,
    private menu:MenuController,
    private post:PostService,
    private user:UserService
    ) {
      this.userProfile = {
        followersCount: null,
        followingCount: null,
        id: null,
        location: {country: null, countryCode: null, locality:null},
        name: null,
        profileBannerUrl: null,
        profileImageUrl: null,
        publicationCount: null,
        registeredAt: null
      }
  }
  ngAfterViewInit(){
    this.user.getUser().then(user=>{
      this.userProfile = user
      this.user.consultUser(user.id).subscribe(res=>{
        this.userProfile = user
        this.user.updateUser(user)
      })
    })
  }
  onLoad(){
    if(this.thisPage != this.router.url){
      this.thisPage = this.router.url
      if(this.thisPage == '/home' || this.thisPage == '/login' || this.thisPage == '/cadastro' || this.thisPage == '/confirmar-email' || this.thisPage == '/ultimo-passo'){
        this.menu.enable(false,'main-menu')
      }else{
        this.menu.enable(true, 'main-menu')
      }
    }
    
  }
  toggleTema(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark')
    }else{
      document.body.setAttribute('color-theme', 'light')
    }
  }
  logOut(){
    this.auth.logout()
    this.router.navigate(["home"])
  }

}
