import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  posts:Array<Object>=[]
  constructor() { 
    this.posts.push({
      user_name:"Melkson Albuquerque",
      post_content: "viajei para paris e foi incrivel",
      city:"Paris",
      country:"França"
    },{
      user_name:"Julio Cezar",
      post_content: "viajei para Roma e foi incrivel",
      city:"Roma",
      country:"Italia"
    },{
      user_name:"Melkson Albuquerque",
      post_content: "viajei para paris e foi incrivel",
      city:"Paris",
      country:"França"
    },{
      user_name:"Melkson Albuquerque",
      post_content: "viajei para paris e foi incrivel",
      city:"Paris",
      country:"França"
    })
  }

  ngOnInit() {
  }

}
