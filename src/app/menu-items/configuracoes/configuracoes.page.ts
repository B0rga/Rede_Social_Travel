import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  userInfo:Object
  constructor(private auth:AuthServiceService, private router:Router, private user:UserService) { }

  ngOnInit() {
    this.getUser()
  }
  async getUser(){
    this.userInfo = await this.user.getUser()
  }
  alterarEmail(){
    this.router.navigate(['alterar-email'])
  }
  alterarId(){
    this.router.navigate(['alterar-id'])
  }
  alterarNome(){
    this.router.navigate(['alterar-nome'])
  }
}

