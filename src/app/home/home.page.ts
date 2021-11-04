import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // dependência para passar de uma página para outra
import { AuthServiceService } from '../services/auth/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    private router: Router, // !!!!!!!
    private auth:AuthServiceService
  ) {}
  ngOnInit(){
    this.auth.logado()
  }
  btnEntrar(){ // função
    this.router.navigate(['login'])
  }

  btnCadastrar(){
    this.router.navigate(['cadastro'])
  }
}
