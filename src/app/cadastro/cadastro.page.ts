import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  get nome(){
    return this.cadastroForm.get('nome');
  }

  get email(){
    return this.cadastroForm.get('email');
  }

  get senha(){
    return this.cadastroForm.get('senha');
  }

  get confirmar_senha(){
    return this.cadastroForm.get('confirmar_senha');
  }

  public errorMessages ={
    nome: [
      {type: 'required', message: 'Nome de usuário é obrigatório'},
      {type: 'pattern', message: 'Por favor insira um nome de usuário válido'}
    ],
    email: [
      {type: 'required', message: 'Email é obrigatório'},
      {type: 'pattern', message: 'Por favor insira um email válido'}
    ],
    senha: [
      {type: 'required', message: 'Senha é obrigatória'},
      {type: 'minlength', message: 'Senha não poder ter menos que 6 caracteres'}
    ],
    confirmar_senha: [
      {type: 'required', message: 'Você deve confirmar a senha'},
      {type: 'minlength', message: 'Senha não poder ter menos que 6 caracteres'}
    ]
  }

  cadastroForm = this.FormBuilder.group({
    nome:  ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    senha:  ['', [Validators.required, Validators.minLength(6)]],
    confirmar_senha:  ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private router: Router,
    private FormBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  btnVoltar(){
    this.router.navigate(['home']);
  }

  public submit(){
    if(this.cadastroForm.valid){
      //this.auth.cadastro(this.cadastroForm.value).subscribe(res=>{
        //if(res.user)
          this.router.navigate(['confirmar-email'])
        //else
        //alert('Preencha os campos corretamente!')
      //})

    }else {
      alert("Preencha os campos corretamente!");
    }
  }

}
