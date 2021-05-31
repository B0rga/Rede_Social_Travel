import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ultimo-passo',
  templateUrl: './ultimo-passo.page.html',
  styleUrls: ['./ultimo-passo.page.scss'],
})
export class UltimoPassoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnVoltar(){
    this.router.navigate(['confirmar-email']);
  }

}
