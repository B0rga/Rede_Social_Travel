import { Component, OnInit, Output } from '@angular/core';
import {AuthServiceService} from '../auth/auth-service.service'
import { SearchService } from '../search/search.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  selectedTab:string = '';

  constructor( private auth:AuthServiceService, private search:SearchService ) { }
  ngOnInit() {
    //this.auth.logado()
  }

  setCurrentTab(ev) {
    this.selectedTab = ev.tab
  }
  onSearch(ev:any):void{
    if(ev.key == "Enter"){
      this.search.onSearch(ev.path[0].value)
    }
  }
  filter(ev):void{
    this.search.filterOptions(ev.detail.value)
  }

}
