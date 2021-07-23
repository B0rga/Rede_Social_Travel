import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth/auth-service.service'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {


  homeToggleIcon = 'home';
  starToggleIcon = 'star-outline';
  addToggleIcon = 'add-outline';
  notiToggleIcon = 'notifications-outline';
  searchToggleIcon = 'search-outline';

  constructor( private auth:AuthServiceService) { }

  ngOnInit() {
    //this.auth.logado()
  }

  btnHome(): void{
    this.homeToggleIcon = 'home';
    this.starToggleIcon = 'star-outline';
    this.addToggleIcon = 'add-outline';
    this.notiToggleIcon = 'notifications-outline';
    this.searchToggleIcon = 'search-outline';
  }
  btnStar(): void{
    this.homeToggleIcon = 'home-outline';
    this.starToggleIcon = 'star';
    this.addToggleIcon = 'add-outline';
    this.notiToggleIcon = 'notifications-outline';
    this.searchToggleIcon = 'search-outline';
  }

  btnAdd(): void{
    this.homeToggleIcon = 'home-outline';
    this.starToggleIcon = 'star-outline';
    this.addToggleIcon = 'add';
    this.notiToggleIcon = 'notifications-outline';
    this.searchToggleIcon = 'search-outline';
  }

  btnNoti(): void{
    this.homeToggleIcon = 'home-outline';
    this.starToggleIcon = 'star-outline';
    this.addToggleIcon = 'add-outline';
    this.notiToggleIcon = 'notifications';
    this.searchToggleIcon = 'search-outline';
  }

  btnSearch(): void{
    this.homeToggleIcon = 'home-outline';
    this.starToggleIcon = 'star-outline';
    this.addToggleIcon = 'add-outline';
    this.notiToggleIcon = 'notifications-outline';
    this.searchToggleIcon = 'search';
  }

}
