import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-estrelas',
  templateUrl: './estrelas.component.html',
  styleUrls: ['./estrelas.component.scss'],
})
export class EstrelasComponent implements OnInit {

  filledStar = false;
  star1 = 'star-outline';
  star2 = 'star-outline';
  star3 = 'star-outline';
  star4 = 'star-outline';
  star5 = 'star-outline';

  constructor(private popoverController: PopoverController) { }

  btnStar1(): void{
    this.filledStar = !this.filledStar;

    if(this.star1 == 'star-outline'){
      this.star1 = 'star';
      this.star2 = 'star-outline';
      this.star3 = 'star-outline';
      this.star4 = 'star-outline';
      this.star5 = 'star-outline';
    }else if(this.star2 == 'star'){
      this.star1 = 'star';
      this.star2 = 'star-outline';
      this.star3 = 'star-outline';
      this.star4 = 'star-outline';
      this.star5 = 'star-outline';
    }else{
      this.star1 = 'star-outline';
      this.star2 = 'star-outline';
      this.star3 = 'star-outline';
      this.star4 = 'star-outline';
      this.star5 = 'star-outline';
    }
  }

  btnStar2(): void{
    this.filledStar = !this.filledStar;

    if(this.star2 == 'star-outline'){
      this.star1 = 'star';
      this.star2 = 'star';
      this.star3 = 'star-outline';
      this.star4 = 'star-outline';
      this.star5 = 'star-outline';
    }else if(this.star3 == 'star'){
      this.star1 = 'star';
      this.star2 = 'star';
      this.star3 = 'star-outline';
      this.star4 = 'star-outline';
      this.star5 = 'star-outline';
    }else{
      this.star1 = 'star-outline';
      this.star2 = 'star-outline';
      this.star3 = 'star-outline';
      this.star4 = 'star-outline';
      this.star5 = 'star-outline';
    }
  }

  btnStar3(): void{
    this.filledStar = !this.filledStar;

    if(this.star3 == 'star-outline'){
      this.star1 = 'star';
      this.star2 = 'star';
      this.star3 = 'star';
      this.star4 = 'star-outline';
      this.star5 = 'star-outline';
    }else if(this.star4 == 'star'){
      this.star1 = 'star';
      this.star2 = 'star';
      this.star3 = 'star';
      this.star4 = 'star-outline';
      this.star5 = 'star-outline';
    }else{
      this.star1 = 'star-outline';
      this.star2 = 'star-outline';
      this.star3 = 'star-outline';
      this.star4 = 'star-outline';
      this.star5 = 'star-outline';
    }
  }

  btnStar4(): void{
    this.filledStar = !this.filledStar;

    if(this.star4 == 'star-outline'){
      this.star1 = 'star';
      this.star2 = 'star';
      this.star3 = 'star';
      this.star4 = 'star';
      this.star5 = 'star-outline';
    }else if(this.star5 == 'star'){
      this.star1 = 'star';
      this.star2 = 'star';
      this.star3 = 'star';
      this.star4 = 'star';
      this.star5 = 'star-outline';
    }
    else{
      this.star1 = 'star-outline';
      this.star2 = 'star-outline';
      this.star3 = 'star-outline';
      this.star4 = 'star-outline';
      this.star5 = 'star-outline';
    }
  }

  btnStar5(): void{
    this.filledStar = !this.filledStar;

    if(this.star5 == 'star-outline'){
      this.star1 = 'star';
      this.star2 = 'star';
      this.star3 = 'star';
      this.star4 = 'star';
      this.star5 = 'star';
    }
    else{
      this.star1 = 'star-outline';
      this.star2 = 'star-outline';
      this.star3 = 'star-outline';
      this.star4 = 'star-outline';
      this.star5 = 'star-outline';
    }
  }

  ngOnInit() {}

}
