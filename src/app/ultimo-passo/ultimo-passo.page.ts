import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-ultimo-passo',
  templateUrl: './ultimo-passo.page.html',
  styleUrls: ['./ultimo-passo.page.scss'],
})
export class UltimoPassoPage implements OnInit {

  btnDisabled = true;
  isDisabled1 = false;
  isDisabled2 = false;
  meu_pais = undefined;
  minha_cidade = undefined;
  outro_pais = undefined;
  outra_cidade = undefined;

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
      this.meu_pais = null;
      this.minha_cidade = null;

      if(this.isDisabled2 == true){
        this.btnDisabled = false;
      }

    }else{
      this.isDisabled1 = false;
      this.btnDisabled = true;
    }
  }

  onCheckboxChange2(e) {
    if (e.target.checked){
      this.isDisabled2 = true;
      this.outro_pais = null;
      this.outra_cidade = null;

      if(this.isDisabled1 == true){
        this.btnDisabled = false;
      }

    }else{
      this.isDisabled2 = false;
      this.btnDisabled = true;
    }
  }

  itemSelected1(meu_pais: any){
    this.btnDisabled = false;
  }
  itemSelected2(minha_cidade: any){
    this.btnDisabled = false;
  }
  itemSelected4(outro_pais: any){
    this.btnDisabled = false;
  }
  itemSelected5(outra_cidade: any){
    this.btnDisabled = false;
  }

  public submit(){
    this.router.navigate(['tabs'])
  }
}
