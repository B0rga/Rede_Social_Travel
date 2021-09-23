import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  userInfo:Object = {}
  constructor(private auth:AuthServiceService) { }

  ngOnInit() {
    this.userInfo = {
      userName: "@jesse",
      email: "jesse@jesse.com",
      phone: "11 91280-4222",
      place: "São Paulo SP Brasil"
    }
  }


}

