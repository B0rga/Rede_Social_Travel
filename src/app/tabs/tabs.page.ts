import { Component, OnInit, Output } from '@angular/core';
import {AuthServiceService} from '../services/auth/auth-service.service';
import { SearchService } from '../services/search/search.service';
import { ActionSheetController } from '@ionic/angular';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  selectedTab:string = '';

  constructor(
    private auth:AuthServiceService,
    private search:SearchService,
    public actionSheetController: ActionSheetController,
    private post:PostService
    ) { }
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
  postThread(){
    this.post.createPost()
  }
  async btnConteudo(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Prefências de conteúdo',
      cssClass: 'customActionSheet',
      buttons: [{
        icon: 'swap-horizontal-outline',
        text: 'Mostrar mais recentes',
        role: 'destructive',
        handler: () => { }
      },
      {
        icon: 'swap-horizontal-outline',
        text: 'Mostrar recomendados',
        role: 'destructive',
        handler: () => { }
      },
      {
        icon: 'settings-outline',
        text: 'Configurar suas preferências',
        role: 'destructive',
        handler: () => { }
      }
    ]
    });
    await actionSheet.present();
  }

  async btnPesquisa(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Prefências de pesquisa',
      cssClass: 'customActionSheet',
      buttons: [{
        text: 'Mostrar resultados em sua localização',
        role: 'destructive',
        handler: () => { }
      },
      {
        text: 'Explorar localizações',
        role: 'destructive',
        handler: () => { }
      }
    ]
    });
    await actionSheet.present();
  }
}
