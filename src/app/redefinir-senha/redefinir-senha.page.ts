import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
})
export class RedefinirSenhaPage implements OnInit {

  get senha(){
    return this.redefinirForm.get('senha');
  }

  get confirmar_senha(){
    return this.redefinirForm.get('confirmar_senha');
  }

  public errorMessages ={
    senha: [
      {type: 'required', message: 'Senha é obrigatória'},
      {type: 'minlength', message: 'Senha não poder ter menos que 6 caracteres'}
    ],
    confirmar_senha: [
      {type: 'required', message: 'Você deve confirmar a senha'},
      {type: 'minlength', message: 'Senha não poder ter menos que 6 caracteres'}
    ]
  }

  redefinirForm = this.FormBuilder.group({
    senha:  ['', [Validators.required, Validators.minLength(6)]],
    confirmar_senha:  ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private router: Router,
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  btnVoltar(){
    this.router.navigate(['codigo-recuperar']);
  }

  btnRetornarLogin(){
    this.router.navigate(['login']);
  }

  public submit(){
    if(this.redefinirForm.valid){
      //this.auth.redefinir(this.redefinirForm.value).subscribe(res=>{
        //if(res.user)
          this.router.navigate(['login'])
        //else
        //alert('Preencha os campos corretamente!')
      //})

    }else {
      alert("Preencha os campos corretamente!");
    }
  }

}
