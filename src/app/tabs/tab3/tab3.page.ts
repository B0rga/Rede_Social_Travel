import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CameraService } from 'src/app/services/camera.service';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  autoComplete = new google.maps.places.AutocompleteService()
  places:Array<Object>=[]
  photo:Array<any>=[]
  constructor(private cam:CameraService) {
   //
   }

  ngOnInit() {

  }
  galery(){
    this.photo = this.cam.getPhotos()
  }
  searchLocalization(ev:any){
    const local = ev.target.value as string
    if(!local.trim().length){
      this.places = []
      return false 
    }else{
      this.autoComplete.getPlacePredictions({input:local},(places,status)=>{
        console.log(places)
        this.places = places
      })
    }

  }
  selectPlace(ev){
    console.log(ev)
    //this.search.textSearch()
  }

}
