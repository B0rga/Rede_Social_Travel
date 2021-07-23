import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
})
export class EsqueceuSenhaPage implements OnInit {

  get email(){
    return this.recuperarForm.get('email');
  }

  public errorMessages ={
    email: [
      {type: 'required', message: 'É preciso que você insira seu email'},
      {type: 'pattern', message: 'Por favor insira um email válido'}
    ]
  }

  recuperarForm = this.FormBuilder.group({
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  })

  constructor(
    private router: Router,
    private FormBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  btnVoltar(){
    this.router.navigate(['login'])
  }

  public submit(){
    if(this.recuperarForm.valid){
      //this.auth.recuperar(this.recuperarForm.value).subscribe(res=>{
        //if(res.user)
          this.router.navigate(['codigo-recuperar'])
        //else
        //alert('Preencha os campos corretamente!')
      //})

    }else {
      alert("Preencha os campos corretamente!");
    }
  }

}
