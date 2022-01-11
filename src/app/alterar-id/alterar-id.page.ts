import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-alterar-id',
  templateUrl: './alterar-id.page.html',
  styleUrls: ['./alterar-id.page.scss'],
})
export class AlterarIdPage implements OnInit {
  alterForm = this.formBuilder.group({
    newId: ['', Validators.required]
  })
  confirmId:boolean = false
  userId:string = ''
  get newId(){
    return this.alterForm.get('newId')
  }
  constructor(
    private user:UserService,
    private formBuilder:FormBuilder,
    private auth:AuthServiceService,
    private router:Router

  ) { }
  idIsUsed(){
    this.auth.idIsRegistered(this.newId.value).subscribe((res:any)=>{
      this.confirmId = res.result
    })
  }

  ngOnInit() {
    this.getUser()
  }
  async getUser(){
    const user = await this.user.getUser()
    console.log(user)
    this.userId = user.id
  }
  async submit(){
    const token = await this.user.getToken()
    this.user.updateId(this.userId, this.newId.value, token).subscribe(res=>{
      this.router.navigate(['tabs'])
    })
  }
}
