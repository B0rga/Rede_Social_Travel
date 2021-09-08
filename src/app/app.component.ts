import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  thisPage:string = ''
  showMenu:Boolean = false
  
  constructor(private auth:AuthServiceService, private router:Router) {

  }
  onLoad(ev){
    this.thisPage = this.router.url
    switch(this.thisPage){
      case '/home':
        this.showMenu = false
      break
      case '/login':
        this.showMenu = false
      break
      this.showMenu = true
    }
    
  }
  toggleTema(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark')
    }else{
      document.body.setAttribute('color-theme', 'light')
    }
  }
  logOut(){
    this.auth.logout()
    this.router.navigate(["home"])
  }
}
