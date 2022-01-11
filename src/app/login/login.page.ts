import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthServiceService} from '../services/auth/auth-service.service'
import { HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPassword = false;
  passwordToggleIcon = 'eye-outline';
  User:Object = {}
  get email(){
    return this.loginForm.get('Email');
  }

  get senha(){
    return this.loginForm.get('Password');
  }

  public errorMessages ={
    Email: [
      {type: 'required', message: 'Email é obrigatório'},
      {type: 'pattern', message: 'Por favor insira um email válido'}
    ],
    Password: [
      {type: 'required', message: 'Senha é obrigatória'},
      {type: 'minlength', message: 'Senha não poder ter menos que 8 caracteres'}
    ]
  }

  loginForm = this.FormBuilder.group({
    Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    Password:  ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(
    private router: Router,
    private FormBuilder: FormBuilder,
    private auth:AuthServiceService,
    private toastController:ToastController
  ) { }

  ngOnInit() {
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

  btnSemConta(){
    this.router.navigate(['cadastro']);
  }
  LoginWithFb(){
    this.auth.loginWithFacebook()
  }
  LoginWithGoogle(){
    this.auth.loginWithGoogle()
  }
  async errorMessage(message){
    const toast = await this.toastController.create({
      cssClass: 'publicado',
      message: message,
      duration: 1000,
      translucent: true
    });
    toast.present();
  }
  public submit(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(()=>{},(err:HttpErrorResponse)=>{
        if(err.status == 500){
          this.errorMessage('Problemas no servidor')
        }else if(400){
          this.loginForm.setErrors({loginInvalid:true})
        }
      })

    }else {
      alert("Preencha os campos corretamente!");
    }
  }

}
