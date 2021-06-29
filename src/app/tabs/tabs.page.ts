import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth/auth-service.service'
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor( private auth:AuthServiceService) { }

  ngOnInit() {
    //this.auth.logado()
  }

}
