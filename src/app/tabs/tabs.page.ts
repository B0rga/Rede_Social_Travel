import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth/auth-service.service'
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  search:String = ''
  selectedTab:String = '';
  homeToggleIcon:String = 'home';
  starToggleIcon:String = 'star-outline';
  addToggleIcon:String = 'add-outline';
  notiToggleIcon:String = 'notifications-outline';
  searchToggleIcon:String = 'search-outline';

  constructor( private auth:AuthServiceService, private storage:Storage) { }

  ngOnInit() {
    //this.auth.logado()
  }
  setCurrentTab(ev) {
    this.selectedTab = ev.tab

    this.homeToggleIcon = 'home-outline';
    this.starToggleIcon = 'star-outline';
    this.addToggleIcon = 'add-outline';
    this.notiToggleIcon = 'notifications-outline';
    this.searchToggleIcon = 'search-outline';
    switch(this.selectedTab){
      case "tab1":
        this.homeToggleIcon = 'home';
      break
      case "tab2":
        this.starToggleIcon = 'star';
      break
      case "tab3":
        this.addToggleIcon = 'add'; 
      break
      case "tab4":
        this.notiToggleIcon = 'notifications';
      break
      case "tab5":
        this.searchToggleIcon = 'search';
      break
    }
  }
  onSearch(ev:any):void{
    this.search = ev.detail.value
  }

}
