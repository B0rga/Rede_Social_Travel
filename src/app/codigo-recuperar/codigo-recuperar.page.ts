import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-codigo-recuperar',
  templateUrl: './codigo-recuperar.page.html',
  styleUrls: ['./codigo-recuperar.page.scss'],
})
export class CodigoRecuperarPage implements OnInit {

  isDisabled = true;
  codigo = 4;

  constructor(
  private router: Router
  ) { }

  ngOnInit() {
  }

  btnRetornarLogin(){
    this.router.navigate(['login']);
  }

  onCodeChanged(code: string) {
    this.isDisabled = true;
  }

  onCodeCompleted(code: string) {
    this.isDisabled = false;
  }

  public submit(){
    this.router.navigate(['redefinir-senha'])
  }

}
