import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirmar-email',
  templateUrl: './confirmar-email.page.html',
  styleUrls: ['./confirmar-email.page.scss'],
})
export class ConfirmarEmailPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnVoltar(){
    this.router.navigate(['cadastro']);
  }

}
