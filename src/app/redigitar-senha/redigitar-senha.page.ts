import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    private FormBuilder:FormBuilder
  ) { }

  ngOnInit() {
  }
  public submit(){
    
  }
}
