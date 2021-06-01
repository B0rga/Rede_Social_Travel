import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-codigo-recuperar',
  templateUrl: './codigo-recuperar.page.html',
  styleUrls: ['./codigo-recuperar.page.scss'],
})
export class CodigoRecuperarPage implements OnInit {

  constructor(
  private router: Router
  ) { }

  ngOnInit() {
  }

  btnVoltar(){
    this.router.navigate(['esqueceu-senha']);
  }

  btnContinuar(){
    this.router.navigate(['redefinir-senha'])
  }

  btnRetornarLogin(){
    this.router.navigate(['login']);
  }

}
