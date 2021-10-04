import { AfterViewInit, Component,ElementRef,ViewChild } from '@angular/core';
import {  PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-estrelas',
  templateUrl: './estrelas.component.html',
  styleUrls: ['./estrelas.component.scss'],
})
export class EstrelasComponent implements AfterViewInit {
  filledStar = false;
  stars:Number = 0
  constructor(
    private popoverController: PopoverController,
    ) { 
      
  }
  star(n){
    this.filledStar = !this.filledStar
    this.stars = n
  }
  ngAfterViewInit() {

  }


}
