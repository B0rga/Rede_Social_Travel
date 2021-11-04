import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { GestureController, Gesture, IonItem, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements AfterViewInit{
  @ViewChildren(IonItem, {read:ElementRef}) cache
  gestureSeted:Boolean = false
  longPressActive:Boolean = false
  constructor(
    private search:SearchService,
    private gestureCtrl:GestureController,
    private alertCtrl:AlertController
     ){
    
  }
  
  ngAfterViewInit(){
   
  }
  setGesture(){
    const array = this.cache.toArray()
    this.longPress(array)
  }
  mouseDown(){
    console.log('mouse down')
  }
  longPress(cacheArray:Array<ElementRef>){
    cacheArray.forEach((el:ElementRef,pos)=>{
      if(pos>0){
        const element:HTMLElement = el.nativeElement
        let cached = element.firstElementChild.innerHTML
        const gesture:Gesture =  this.gestureCtrl.create({
          el:el.nativeElement,
          gestureName: 'longPress',
          onStart: ev=>{
            this.longPressActive = !this.longPressActive
            this.onLongPress(cached)
          },
          onEnd: ev=>{
            this.longPressActive = !this.longPressActive
          }
        })
        gesture.enable(true)
      }
    })
    
  }
  onLongPress(cached){
    setTimeout(async ()=>{
      if(this.longPressActive){
        const opts = {
          cssClass: 'clearOne',
          header: 'Apagar do historico de pesquisa',
          subHeader: '',
          message: 'Tem certeza que deseja apagar?',
          buttons: ['Cancelar',{text: "Ok", handler:()=>this.clearOne(cached)}]
        }
        const alert = await this.alertCtrl.create(opts)
        alert.present()
      }
    },200)
  }
  clearOne(op){
    this.search.clearOne(op)
  }
  clearCache(){
    this.search.clearCache()
  }
  Search(op){
    this.search.setSearch(op)
  }
}
