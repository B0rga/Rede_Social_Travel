import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ultimo-passo',
  templateUrl: './ultimo-passo.page.html',
  styleUrls: ['./ultimo-passo.page.scss'],
})
export class UltimoPassoPage implements OnInit {

  isDisabled1 = false;
  isDisabled2 = false;
  option1 = undefined;
  option2 = undefined;
  option3 = undefined;
  option4 = undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnVoltar(){
    this.router.navigate(['confirmar-email']);
  }

  onCheckboxChange1(e) {
    if (e.target.checked){
      this.isDisabled1 = true;
      this.option1 = null;
      this.option2 = null;
    }else{
      this.isDisabled1 = false;
    }
  }

  onCheckboxChange2(e) {
    if (e.target.checked){
      this.isDisabled2 = true;
      this.option3 = null;
      this.option4 = null;
    }else{
      this.isDisabled2 = false;
    }
  }
}
