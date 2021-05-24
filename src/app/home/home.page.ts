import { Component } from '@angular/core';
import {Router} from '@angular/router'; // dependência para passar de uma página para outra

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router // !!!!!!!
  ) {}

  btnEntrar(){ // função
    this.router.navigate(['login'])
  }

  btnCadastrar(){
    this.router.navigate(['cadastro'])
  }
}
