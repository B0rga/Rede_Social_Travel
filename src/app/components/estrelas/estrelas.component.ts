import { AfterViewInit, Component,ContentChild,ElementRef,ViewChild, ViewChildren } from '@angular/core';
import {  PopoverController, Gesture, GestureController, IonIcon } from '@ionic/angular';
@Component({
  selector: 'app-estrelas',
  templateUrl: './estrelas.component.html',
  styleUrls: ['./estrelas.component.scss'],
})
export class EstrelasComponent implements AfterViewInit {
  filledStar = false;
  stars:Number = 0
  @ViewChild('star') divStar:ElementRef
  @ViewChildren('stars') Stars
  constructor(
    private popoverController: PopoverController,
    private gestureCtrl: GestureController
    ) { 
      
  }
  star(n){
    this.filledStar = !this.filledStar
    this.stars = n
  }
  ngAfterViewInit() {
    const gesture:Gesture = this.gestureCtrl.create({
      el: this.divStar.nativeElement,
      onMove: (detail) => { this.onMove(detail); },
      onEnd: ()=>this.onEnd(),
      gestureName: 'bigStar'
    })
    gesture.enable()
  }
  onEnd(){
    const stars = this.Stars._results
    stars.forEach(star => {
      star.size = 'small' //diminui todos os ion-icons quando termina o gesto
    });
  }
  onMove(detail){
    const currentX = detail.currentX;
    const stars = this.Stars._results //pega o array com os ion-icons
    //muda o tamanho e o preenchimento dos ion-icons
    stars.forEach((star,pos)=>{
      if(currentX >= 110+(30*pos) && currentX <= 140+(30*pos)){
        star.size = 'large'
        star.name = 'star'
      }else if(currentX>140+(30*pos)){
        star.size = 'small'
        star.name = 'star'
      }else{
        star.size = 'small'
        star.name = 'star-outline'
      }
    })
  }
}
