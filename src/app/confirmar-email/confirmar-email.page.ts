import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirmar-email',
  templateUrl: './confirmar-email.page.html',
  styleUrls: ['./confirmar-email.page.scss'],
})
export class ConfirmarEmailPage implements OnInit {

  isDisabled = true;
  codigo = 4;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCodeChanged(code: string) {
    this.isDisabled = true;
  }

  onCodeCompleted(code: string) {
    this.isDisabled = false;
  }

  public submit(){
    this.router.navigate(['ultimo-passo'])
  }

}
