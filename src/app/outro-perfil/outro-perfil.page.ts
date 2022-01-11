import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CameraService } from 'src/app/services/camera.service';
import { BlobStorageService } from 'src/app/services/blob-storage.service';
import {profilephotos, bannerimages} from '../blob-sas'
import {Post} from '../post-interface'
import {userProfile} from '../menu-items/perfil/userProfile'
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-outro-perfil',
  templateUrl: './outro-perfil.page.html',
  styleUrls: ['./outro-perfil.page.scss'],
})
export class OutroPerfilPage implements OnInit {
  userProfile
  userPosts
  followed:boolean = false
  constructor(
    private user:UserService,
    private post:PostService,
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

  ngOnInit() {
    this.loadUser()
    this.getFolloweds()
  }
  async getFolloweds(){
    const user = await this.user.getUser()
    const token = await this.user.getToken()
    this.user.getFolloweds(user.id,token).subscribe((res:Array<any>)=>{
      res.map(followed=>{
        console.log(followed)
        if(followed.id == this.userProfile.id){
          this.followed = true
        }
      })
    })
  }
  loadUser(){
    const user =  this.user.otherUser
    console.log(user)
    this.user.consultUser(user.id).subscribe((res:any)=>{
      this.userProfile = res
      this.post.getAllPublications(this.userProfile.id).then((getPublications)=>{
        getPublications.subscribe((res:Array<Post>)=>{
          this.userPosts = res
          this.userPosts.forEach((post)=>{
            post.author = this.userProfile
          })
        })
      })
    })
  }
  async followUser(){
    if(!this.followed){
      const user = await this.user.getUser()
      const token = await this.user.getToken()
      this.user.followUser(user.id, this.userProfile.id, token).subscribe(res=>{
        this.followed = true
        this.loadUser()
      })
    }else{
      
    }
  }

}
