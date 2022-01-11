import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-alterar-nome',
  templateUrl: './alterar-nome.page.html',
  styleUrls: ['./alterar-nome.page.scss'],
})
export class AlterarNomePage implements OnInit {
  alterForm = this.formBuilder.group({
    NewName: ['', Validators.required]
  })
  name:string = ''
  User
  get newName(){
    return this.alterForm.get('NewName')
  }
  constructor(
    private user:UserService,
    private formBuilder:FormBuilder,
    private auth:AuthServiceService,
    private router:Router

  ) { }

  ngOnInit() {
    this.getUser()
  }
  async getUser(){
    this.User = await this.user.getUser()
    this.name = this.User.name
  }
  async submit(){
    const token = await this.user.getToken()
    this.user.updateName(this.User.id,this.newName.value, token).subscribe(res=>{
      this.user.consultUser(this.User.id).subscribe(user=>{
        this.user.updateUser(user)
      })
      this.router.navigate(['tabs'])
    })
  }
}
