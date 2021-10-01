import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  autoComplete = new google.maps.places.AutocompleteService()
  places:Array<Object>=[]
  constructor() {
   //
   }

  ngOnInit() {

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
