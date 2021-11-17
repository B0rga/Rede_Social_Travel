import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { of } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ultimo-passo',
  templateUrl: './ultimo-passo.page.html',
  styleUrls: ['./ultimo-passo.page.scss'],
})
export class UltimoPassoPage implements OnInit {

  isClickedBR: boolean = false;
  isClickedES: boolean = false;
  isClickedPT: boolean = false;
  isClickedUS: boolean = false;
  isClickedUK: boolean = false;
  isClickedIT: boolean = false;
  isClickedJP: boolean = false;

  estadoClickedBR: boolean = false;

  showBR: boolean = false;
  showES: boolean = false;
  showPT: boolean = false;
  showUS: boolean = false;
  showUK: boolean = false;
  showIT: boolean = false;
  showJP: boolean = false;

  showBtnBR: boolean = true;
  showBtnES: boolean = true;
  showBtnPT: boolean = true;
  showBtnUS: boolean = true;
  showBtnUK: boolean = true;
  showBtnIT: boolean = true;
  showBtnJP: boolean = true;

  showBR1: boolean = false;
  showES1: boolean = false;
  showPT1: boolean = false;
  showUS1: boolean = false;
  showUK1: boolean = false;
  showIT1: boolean = false;
  showJP1: boolean = false;

  showBtnBR1: boolean = true;
  showBtnES1: boolean = true;
  showBtnPT1: boolean = true;
  showBtnUS1: boolean = true;
  showBtnUK1: boolean = true;
  showBtnIT1: boolean = true;
  showBtnJP1: boolean = true;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  btnBR(){
    this.showBR = ! this.showBR;
    this.isClickedBR = ! this.isClickedBR;

    this.showES = false;
    this.isClickedES = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUS = false;
    this.isClickedUS = false;
    this.showUK = false
    this.isClickedUK = false;
    this.showIT = false;
    this.isClickedIT = false;
    this.showJP = false;
    this.isClickedJP = false;
  }
  btnES(){
    this.showES = ! this.showES;
    this.isClickedES = ! this.isClickedES;

    this.showBR = false;
    this.isClickedBR = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUS = false;
    this.isClickedUS = false;
    this.showUK = false
    this.isClickedUK = false;
    this.showIT = false;
    this.isClickedIT = false;
    this.showJP = false;
    this.isClickedJP = false;
  }
  btnPT(){
    this.showPT = ! this.showPT;
    this.isClickedPT = ! this.isClickedPT;

    this.showBR = false;
    this.isClickedBR = false;
    this.showES = false;
    this.isClickedES = false;
    this.showUS = false;
    this.isClickedUS = false;
    this.showUK = false
    this.isClickedUK = false;
    this.showIT = false;
    this.isClickedIT = false;
    this.showJP = false;
    this.isClickedJP = false;
  }
  btnUS(){
    this.showUS = ! this.showUS;
    this.isClickedUS = ! this.isClickedUS;

    this.showBR = false;
    this.isClickedBR = false;
    this.showES = false;
    this.isClickedES = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUK = false
    this.isClickedUK = false;
    this.showIT = false;
    this.isClickedIT = false;
    this.showJP = false;
    this.isClickedJP = false;
  }
  btnUK(){
    this.showUK = ! this.showUK;
    this.isClickedUK = ! this.isClickedUK;

    this.showBR = false;
    this.isClickedBR = false;
    this.showES = false;
    this.isClickedES = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUS = false
    this.isClickedUS = false;
    this.showIT = false;
    this.isClickedIT = false;
    this.showJP = false;
    this.isClickedJP = false;
  }
  btnIT(){
    this.showIT = ! this.showIT;
    this.isClickedIT = ! this.isClickedIT;

    this.showBR = false;
    this.isClickedBR = false;
    this.showES = false;
    this.isClickedES = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUS = false
    this.isClickedUS = false;
    this.showUK = false;
    this.isClickedUK = false;
    this.showJP = false;
    this.isClickedJP = false;
  }
  btnJP(){
    this.showJP = ! this.showJP;
    this.isClickedJP = ! this.isClickedJP;

    this.showBR = false;
    this.isClickedBR = false;
    this.showES = false;
    this.isClickedES = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUS = false
    this.isClickedUS = false;
    this.showUK = false;
    this.isClickedUK = false;
    this.showIT = false;
    this.isClickedIT = false;
  }

  estadosBR(){
    this.estadoClickedBR = ! this.estadoClickedBR;
  }


  btnBR1(){
    this.showBR1 = ! this.showBR1;
    this.showBtnES1 = ! this.showBtnES1;
    this.showBtnPT1 = ! this.showBtnPT1;
    this.showBtnUS1 = ! this.showBtnUS1;
    this.showBtnUK1 = ! this.showBtnUK1;
    this.showBtnIT1 = ! this.showBtnIT1;
    this.showBtnJP1 = ! this.showBtnJP1;
  }
  btnES1(){
    this.showES1 = ! this.showES1;
    this.showBtnBR1 = ! this.showBtnBR1;
    this.showBtnPT1 = ! this.showBtnPT1;
    this.showBtnUS1 = ! this.showBtnUS1;
    this.showBtnUK1 = ! this.showBtnUK1;
    this.showBtnIT1 = ! this.showBtnIT1;
    this.showBtnJP1 = ! this.showBtnJP1;
  }
  btnPT1(){
    this.showPT1 = ! this.showPT1;
    this.showBtnBR1 = ! this.showBtnBR1;
    this.showBtnES1 = ! this.showBtnES1;
    this.showBtnUS1 = ! this.showBtnUS1;
    this.showBtnUK1 = ! this.showBtnUK1;
    this.showBtnIT1 = ! this.showBtnIT1;
    this.showBtnJP1 = ! this.showBtnJP1;
  }
  btnUS1(){
    this.showUS1 = ! this.showUS1;
    this.showBtnBR1 = ! this.showBtnBR1;
    this.showBtnPT1 = ! this.showBtnPT1;
    this.showBtnES1 = ! this.showBtnES1;
    this.showBtnUK1 = ! this.showBtnUK1;
    this.showBtnIT1 = ! this.showBtnIT1;
    this.showBtnJP1 = ! this.showBtnJP1;
  }
  btnUK1(){
    this.showUK1 = ! this.showUK1;
    this.showBtnBR1 = ! this.showBtnBR1;
    this.showBtnPT1 = ! this.showBtnPT1;
    this.showBtnES1 = ! this.showBtnES1;
    this.showBtnUS1 = ! this.showBtnUS1;
    this.showBtnIT1 = ! this.showBtnIT1;
    this.showBtnJP1 = ! this.showBtnJP1;
  }
  btnIT1(){
    this.showIT1 = ! this.showIT1;
    this.showBtnBR1 = ! this.showBtnBR1;
    this.showBtnPT1 = ! this.showBtnPT1;
    this.showBtnES1 = ! this.showBtnES1;
    this.showBtnUS1 = ! this.showBtnUS1;
    this.showBtnUK1 = ! this.showBtnUK1;
    this.showBtnJP1 = ! this.showBtnJP1;
  }
  btnJP1(){
    this.showJP1 = ! this.showJP1;
    this.showBtnBR1 = ! this.showBtnBR1;
    this.showBtnPT1 = ! this.showBtnPT1;
    this.showBtnES1 = ! this.showBtnES1;
    this.showBtnUS1 = ! this.showBtnUS1;
    this.showBtnUK1 = ! this.showBtnUK1;
    this.showBtnIT1 = ! this.showBtnIT1;
  }
}
