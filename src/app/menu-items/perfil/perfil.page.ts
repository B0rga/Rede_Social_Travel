import { NavigationEnd, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {userProfile} from './userProfile'
import {Post} from '../../post-interface'
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements AfterViewInit {
  userPosts:Array<Post>
  userId:string
  userProfile:userProfile
  constructor(
    private router: Router,
    private post:PostService,
    private auth:AuthServiceService,
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

  ngAfterViewInit() {
    if(this.user.otherUser){
      this.userProfile = this.user.otherUser
      this.user.consultUser(this.userProfile.id).subscribe((res:any)=>{
        this.userProfile = res
      })
      this.post.getAllPublications(this.userProfile.id).then((getPublications)=>{
        getPublications.subscribe((res:Array<Post>)=>{
          this.userPosts = res
          this.userPosts.forEach((post)=>{
            post.author = this.userProfile
          })
        })
      })
    }else{
      this.user.getUser().then(user=>{
        this.userProfile = user
        this.user.consultUser(user.id).subscribe((res:any)=>{
          this.userProfile = res
        })
        this.post.getAllPublications(user.id).then((getPublications)=>{
          getPublications.subscribe((res:Array<Post>)=>{
            this.userPosts = res
            this.userPosts.forEach((post)=>{
              post.author = user
            })
          })
        })
      })
    }
    
    
  }

}
