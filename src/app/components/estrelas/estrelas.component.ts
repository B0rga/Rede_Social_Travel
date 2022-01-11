import { AfterViewInit, Component,ElementRef,QueryList,ViewChild, ViewChildren } from '@angular/core';
import {  PopoverController, Gesture, GestureController, IonIcon, IonRow } from '@ionic/angular';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-estrelas',
  templateUrl: './estrelas.component.html',
  styleUrls: ['./estrelas.component.scss'],
})
export class EstrelasComponent implements AfterViewInit {
  filledStar = false;
  stars:Number = 0
  @ViewChild(IonRow, {read:ElementRef}) divStar:ElementRef
  @ViewChildren(IonIcon) Stars:QueryList<IonIcon>
  constructor(
    private popoverController: PopoverController,
    private gestureCtrl: GestureController,
    private user:UserService,
    private post:PostService
    ) { 
      
  }
  star(n){
    this.filledStar = !this.filledStar
    this.stars = n
    this.onEnd()
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
    const stars = this.Stars.toArray()
    stars.forEach(star => {
      star.size = 'small' //diminui todos os ion-icons quando termina o gesto
    });
    this.evaluetePublication()
    this.popoverController.dismiss()
  }
  async evaluetePublication(){
    const token = await this.user.getToken()
    const user = await this.user.getUser()
    this.post.evaluetePublication(user,this.stars,token).subscribe((res)=>{
      console.log(res)
    })
  }
  onMove(detail){
    const currentX = detail.currentX;
    const stars = this.Stars.toArray() //pega o array com os ion-icons
    //percorre o array com os ion-icons
    stars.forEach((star,pos)=>{
      //muda o tamanho e o preenchimento dos ion-icons
      if(currentX >= 100+(30*pos) && currentX <= 140+(30*pos)){
        star.size = 'large'
        star.name = 'star'
        this.stars = pos +1
      }else if(currentX>140+(30*pos)){
        star.size = 'small'
        star.name = 'star'
      }else{
        star.size = 'small'
        star.name = 'star-outline'
      }
    })
    console.log(this.stars)
  }
}
