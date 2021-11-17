import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth/auth-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  get Name(){
    return this.cadastroForm.get('Name');
  }

  get Email(){
    return this.cadastroForm.get('Email');
  }

  get Password(){
    return this.cadastroForm.get('Password');
  }

  get ConfirmPassword(){
    return this.cadastroForm.get('ConfirmPassword');
  }

  public errorMessages ={
    Name: [
      {type: 'required', message: 'Nome de usuário é obrigatório'},
      {type: 'pattern', message: 'Por favor insira um nome de usuário válido'}
    ],
    Email: [
      {type: 'required', message: 'Email é obrigatório'},
      {type: 'pattern', message: 'Por favor insira um email válido'}
    ],
    Password: [
      {type: 'required', message: 'Senha é obrigatória'},
      {type: 'minlength', message: 'Senha não poder ter menos que 8 caracteres'}
    ],
  }

  cadastroForm = this.FormBuilder.group({
    Name:  ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]],
    Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    Password:  ['', [Validators.required, Validators.minLength(8)]],
    ConfirmPassword:  new FormControl('', Validators.compose([Validators.required])),
  }, {validators:this.matchPassword.bind(this)})

  constructor(
    private router: Router,
    private FormBuilder: FormBuilder,
    private auth:AuthServiceService
  ) { }
  matchPassword(formGroup: FormGroup){
    const { value: password } = formGroup.get('Password');
    const { value: confirmPassword } = formGroup.get('ConfirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  ngOnInit() {
  }

  public submit(){
    if(this.cadastroForm.valid){
      this.auth.createUser(this.cadastroForm.value)
      this.router.navigate(['confirmar-email'])
    }else {
      alert("Preencha os campos corretamente!");
    }
  }

}
