import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { CameraService } from 'src/app/services/camera.service';
import { BlobStorageService } from 'src/app/services/blob-storage.service';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  autoComplete = new google.maps.places.AutocompleteService()
  places:Array<Object>=[]
  photo:Array<any>=[]
  images:Array<string> = []
  sas:string = 'sp=racwdl&st=2021-10-20T16:02:46Z&se=2021-10-21T00:02:46Z&spr=https&sv=2020-08-04&sr=c&sig=i5OpqJ5eQebI60MPDDZzJGg8zrZ99V1WzDtK3LtW080%3D'
  @ViewChild('local') local:IonInput
  @ViewChild('title') title:IonInput
  @ViewChild('content') content:IonInput
  constructor(
      private cam:CameraService,
      private blobService:BlobStorageService,
      private post:PostService,
      private formBuilder:FormBuilder
      ) {
   //
   }

  ngOnInit() {
  
  }
  camera(){
    this.photo = this.cam.takePhoto()
  }
  galery(){
    this.photo = this.cam.getPhotos()
  }
  clearPlaces(){
    this.places = []
  }
  addPost(){
    this.images = this.blobService.upload(this.photo,'postimages',this.sas,()=>{
      console.log('imagens upadas')
    })
    const thread = {
      Locality: this.local.value as string,
      Rote: null,
      Title: this.title.value as string,
      Content: this.content.value as string, 
      Images: this.images,
      Complement:null
    }
    this.post.addPost(thread)
  }
  searchLocalization(ev:any){
    const local = ev.target.value as string
    if(!local.trim().length){
      this.places = []
      return false 
    }else{
      this.autoComplete.getPlacePredictions({input:local},(places)=>{
        console.log(places)
        this.places = places
      })
    }

  }
  selectPlace(ev:any){
    this.local.value = ev.description
    this.places = []
  }

}
