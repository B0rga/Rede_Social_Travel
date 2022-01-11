import { NavigationEnd, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {userProfile} from './userProfile'
import {Post} from '../../post-interface'
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { UserService } from 'src/app/services/user.service';
import { CameraService } from 'src/app/services/camera.service';
import { BlobStorageService } from 'src/app/services/blob-storage.service';
import {profilephotos, bannerimages} from '../../api-keys'
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements AfterViewInit {
  userPosts:Array<Post>
  userId:string
  userProfile:userProfile
  imageNames:Array<string>
  constructor(
    private router: Router,
    private post:PostService,
    private auth:AuthServiceService,
    private user:UserService,
    private cam:CameraService,
    private blobService:BlobStorageService
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
    this.user.getUser().then(user=>{
      this.userProfile = user
      this.user.consultUser(user.id).subscribe((res:any)=>{
        this.userProfile = res
        this.user.updateUser(res)
      })
      this.post.getAllPublications(user.id).then((getPublications)=>{
        getPublications.subscribe((res:Array<Post>)=>{
          this.userPosts = res
          this.userPosts.forEach((post)=>{
            post.author = this.userProfile
          })
        })
      })
    })
    
  }
  updateUser(){
    this.user.consultUser(this.userProfile.id).subscribe((res:any)=>{
      this.userProfile = res
      this.user.updateUser(res)
    })
  }
  async updateProfileImage(){
    const user = await this.user.getUser()
    const token = await this.user.getToken()
    this.cam.getPhotos().then((photo)=>{
     console.log(photo)
      this.imageNames = this.blobService.upload(photo, 'profilephotos', profilephotos, () => {
        this.cam.clearPhotos()
        this.user.updateProfileImage(this.imageNames[0], user.id,token).subscribe(res=>{
         
        })
        this.updateUser()
      })
      
    })
    
      
      
    
  }
  async updateBannerImage(){
    const user = await this.user.getUser()
    const token = await this.user.getToken()
    this.cam.getPhotos().then((photo)=>{
       this.imageNames = this.blobService.upload(photo, 'bannerimg', bannerimages, () => {
          this.cam.clearPhotos()
          this.user.updateBannerImage(this.imageNames[0], user.id,token).subscribe(res=>{
           
          })
          this.updateUser()
       })
       
     })
  }


}
