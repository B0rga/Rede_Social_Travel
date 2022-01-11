import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-redigitar-senha',
  templateUrl: './redigitar-senha.page.html',
  styleUrls: ['./redigitar-senha.page.scss'],
})
export class RedigitarSenhaPage implements OnInit {
  alterForm = this.FormBuilder.group({
    Password: ['', [Validators.required,Validators.minLength(8)]],
  })
  get Password(){
    return this.alterForm.get('Password')
  }
  
  constructor(
    private FormBuilder:FormBuilder,
    private user:UserService,
    private router:Router,
    private toast:ToastController
  ) { }

  ngOnInit() {
  }
  async submit(){
    const user = await this.user.getUser()
    const token = await this.user.getToken()
    this.user.updateEmail(user.id,this.Password.value, token).subscribe(res=>{
      this.router.navigate(['tabs'])
    },(err:HttpErrorResponse)=>{
      if(err.status == 400){
        //informaç
      }
    })
  }
}
