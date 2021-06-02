import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPassword = false;
  passwordToggleIcon = 'eye-outline';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnVoltar(){
    this.router.navigate(['home']);
  }

  btnShowHide(): void{
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon == 'eye-outline'){
      this.passwordToggleIcon = 'eye-off-outline';
    }
    else{
      this.passwordToggleIcon = 'eye-outline';
    }

  }

  btnRecuperarSenha(){
    this.router.navigate(['esqueceu-senha']);
  }

}
