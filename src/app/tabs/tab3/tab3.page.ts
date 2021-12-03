import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInput } from '@ionic/angular';
import { CameraService } from 'src/app/services/camera.service';
import { BlobStorageService } from 'src/app/services/blob-storage.service';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit, AfterViewInit {
  autoComplete = new google.maps.places.AutocompleteService()
  placesService:google.maps.places.PlacesService
  search
  places:Array<Object>=[]
  photo:Array<any>=[]
  images:Array<string> = []
  locality:any
  countrySelected:string=''
  countrys:Array<string> = ['Brasil', "Reino Unido", "EUA", "Japão", "Portugal", "Italia", "Espanha"]
  citySelected:string=''
  linkRote:string
  sas:string = 'sp=racwdl&st=2021-11-22T20:41:46Z&se=2022-01-01T04:41:46Z&spr=https&sv=2020-08-04&sr=c&sig=pHqODLIvQX%2BFPFcb6TiOggwJetm1smZavHmnsNuIMpk%3D'
  @ViewChild('local') local:IonInput
  @ViewChild('teste',{read:ElementRef}) div:ElementRef
  
  get Title(){
    return this.postForm.get('Title')
  }
  get Content(){
    return this.postForm.get('Content')
  }
  get Locality(){
    return this.postForm.get('Locality')
  }
  get Rote(){
    return this.postForm.get('Rote')
  }
  postForm = this.formBuilder.group({
    Title: ['', Validators.required],
    Content: ['', Validators.required],
    Rote: ['']
  })
  constructor(
      private cam:CameraService,
      private blobService:BlobStorageService,
      private post:PostService,
      private formBuilder:FormBuilder,
      private alert:AlertController
      ) {
   //
   }
   ngAfterViewInit(){
    this.placesService = new google.maps.places.PlacesService(this.div.nativeElement)
    this.post.getToken().then((token)=>console.log(token))
   }
  ngOnInit() {
    this.locality = {
      "Brasil": ["São Paulo", "Belo Horizonte", "Rio de Janeiro","Curitiba"],
      "Reino Unido": ["London", "Liverpool", "Manchester"],
      "EUA": ["San Francisco", "Las Vegas", "Los Angeles", "New York", "Orlando"],
      "Japão": ["Tokyo", "Kyoto", "Hiroshima"],
      "Portugal": ["Lisbon", "Coimbra", "Porto"],
      "Italia": ["Rome", "Venice", "Milan", "Florence"],
      "Espanha": ["Barcelona", "Valencia", "Madrid"]
    }
  }
  selectCountry(country){
    if(this.countrySelected == country){
      this.countrySelected = ''
    }else{
      this.countrySelected = country
    }
    this.citySelected = ''
   
  }
  camera(){
    this.photo = this.cam.takePhoto()
  }
  galery(){
   //
   this.photo = this.cam.getPhotos()
  }
  clearPlaces(){
    this.places = []
  }
  async postThread(){
    if(this.citySelected.trim().length && this.postForm.valid){
      const thread = this.createThread()
      this.post.createPost(thread).then(post=>{
        post.subscribe((res)=>{
          
        })
      })
      this.clearPost()
    }
    
  }
  selectCity(city){
    if(this.citySelected == city){
      this.citySelected = ''
    }else{
      this.citySelected = city
    }
    
  }
  addPost(){
    if(this.citySelected.trim().length  && this.postForm.valid){
      const thread = this.createThread()
      this.post.addPost(thread)
      this.clearPost()
    }
  }
  createThread(){
    if(this.photo.length>0){
      this.images = this.blobService.upload(this.photo,'postimages',this.sas,()=>{
        console.log('imagens upadas')
      })
    }
    return {
      Locality: this.citySelected,
      Business: null,
      Rote: this.Rote.value as string,
      Title: this.Title.value as string,
      Content: this.Content.value as string, 
      Images: this.images,
      Complement:null
    }
  }
  clearPost(){
    this.postForm.reset({Title:'', Locality:'', Content:'', Rote:''})
    this.countrySelected = ''
    this.citySelected = ''
    this.images = []
    this.photo = []
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
