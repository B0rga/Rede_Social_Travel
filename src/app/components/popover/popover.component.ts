import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public router: Router, private popoverController: PopoverController) { }

  async btnPerfil(){
    this.router.navigate(['perfil']);
    await this.popoverController.dismiss();
  }

  async btnSalvar(){
    await this.popoverController.dismiss();
  }

  async btnReport(){
    await this.popoverController.dismiss();
  }

  async btnRemover(){
    await this.popoverController.dismiss();
  }

  ngOnInit() {}

}
