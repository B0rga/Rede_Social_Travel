import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/search/search.service';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})

export class Tab5Page implements OnInit{
  constructor(private search:SearchService){

  }
  ngOnInit(){
    
  }
  excluir(op){
    this.search.excluir(op)
  }
  limparHistorico(){
    this.search.limparHistorico()
  }
  Search(op){
    this.search.setSearch(op)
  }
}
