import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
})
export class RedefinirSenhaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnVoltar(){
    this.router.navigate(['codigo-recuperar']);
  }

  btnRetornarLogin(){
    this.router.navigate(['login']);
  }

}
