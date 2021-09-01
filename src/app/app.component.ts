import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private auth:AuthServiceService, private router:Router) {}

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
