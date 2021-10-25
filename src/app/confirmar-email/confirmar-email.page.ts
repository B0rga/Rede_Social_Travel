import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-email',
  templateUrl: './confirmar-email.page.html',
  styleUrls: ['./confirmar-email.page.scss'],
})
export class ConfirmarEmailPage implements OnInit {
  seconds = 0
  minutes = 5
  isDisabled = true;
  codigo = 4;
  interval:any
  private code:Number
  constructor(
    private router: Router,
    private auth:AuthServiceService,
    private alertCtrl:AlertController
  ) { }

  ngOnInit() {
    this.code = Math.floor((Math.random()*9999))
    console.log(this.code)
    //this.auth.sendMail(this.code).subscribe()
    this.interval = setInterval(()=>{this.clock()},1000)
  }

  onCodeChanged(code: string) {
    this.isDisabled = true;
  }
  async clock(){
    this.seconds--
    if(this.seconds < 0 && this.minutes>0){
      this.minutes--
      this.seconds = 59
    }else if(this.seconds <= 0 && this.minutes<=0){
      const opts = {
        cssClass: 'reSendMail',
        header: 'Tempo esgotado',
        subHeader: '',
        message: 'Deseja que reenviemos o email de confirmação?',
        buttons: [{text:'Cancelar', role:'Cancelar', handler:()=>this.router.navigate(['cadastro'])} 
        ,{text:'Reenviar', role:'Reenviar', handler:()=>this.reSendMail()}],
      }
      const alert = await this.alertCtrl.create(opts)
      alert.present()
      clearInterval(this.interval)
    }
  }
  reSendMail(){    
    this.code = Math.floor(Math.random()*9999)
    this.auth.sendMail(this.code).subscribe()
    this.minutes = 5
  }
  onCodeCompleted(code: string) {
    if(this.code === Number(code)){
      this.isDisabled = false;
    }
  }

  public submit(){
    this.router.navigate(['ultimo-passo'])
  }

}
