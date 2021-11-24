import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth/auth-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  get UserId(){
    return this.cadastroForm.get('UserId')
  }
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
  confirmEmail:Boolean = false
  public errorMessages ={
    UserId: [
      {type:'required', message:'UserId é obrigatorio'}
    ],
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
    UserId: ['',Validators.required],
    Name:  ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]],
    Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    Password:  ['', [Validators.required, Validators.minLength(8)]],
    ConfirmPassword:  new FormControl('', Validators.compose([Validators.required])),
  }, {validators:[this.matchPassword.bind(this), this.emailIsUsed.bind(this)]})

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
  emailIsUsed(formGroup:FormGroup){
    const campoEmail = formGroup.get('Email')
    const {value:email} = campoEmail
    if(campoEmail.valid){
      this.auth.emailIsRegistered(email).subscribe((res:boolean)=>{
        this.confirmEmail = res
      })
      return this.confirmEmail?{emailUsed:true}:null
    }
    
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
