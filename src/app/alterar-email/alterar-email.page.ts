import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-alterar-email',
  templateUrl: './alterar-email.page.html',
  styleUrls: ['./alterar-email.page.scss'],
})
export class AlterarEmailPage implements OnInit {
  get email(){
    return this.alterForm.get('Email')
  }
  public errorMessages ={
    Email: [
      {type: 'required', message: 'Email é obrigatório'},
      {type: 'pattern', message: 'Por favor insira um email válido'}
    ],
  }
  alterForm = this.FormBuilder.group({
    Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  })
  emailAnt:string = ""
  constructor(private FormBuilder:FormBuilder, private user:UserService, private router:Router) { }
  
  ngOnInit() {
    this.user.getUser().then(user=>{
      console.log(user)
      this.emailAnt = user.email
    })
  }
  public submit(){
    this.user.newEmail = this.email.value
    this.router.navigate(['redigitar-senha'])
  }

}
