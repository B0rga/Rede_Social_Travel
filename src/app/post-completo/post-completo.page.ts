import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { EstrelasComponent } from './../components/estrelas/estrelas.component';

@Component({
  selector: 'app-post-completo',
  templateUrl: './post-completo.page.html',
  styleUrls: ['./post-completo.page.scss'],
})
export class PostCompletoPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  async openPopover(ev: any) {
    event.stopPropagation();
    const popover = await this.popoverController.create({
      component: EstrelasComponent,
      cssClass: 'estrelaPopover',
      event: ev,
    });
    return await popover.present();
  }

  ngOnInit() {
  }

}
