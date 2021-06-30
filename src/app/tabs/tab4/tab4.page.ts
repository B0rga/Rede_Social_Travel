import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  notifications:Array<object> = []
  constructor() {
  }

  ngOnInit() {
    /*
    this.notifications.push({
      id:1,
      texto:"Matheus almeida comentou na sua publicação",
      tempo:"3 minutos atras",
      conteudo:null
    },{
      id:2,
      texto:"Matheus almeida respondeu seu comentario",
      tempo:"3 minutos atras",
      conteudo:"Essa foi minha primeira viagem para o Brasil, e foi incrivel"
    },
    {
      id:3,
      texto:"Matheus almeida respondeu seu comentario",
      tempo:"3 minutos atras",
      conteudo:"Essa foi minha primeira viagem para o Brasil, e foi incrivel"
    })
    */
  }


}
