import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { EstrelasComponent } from './../components/estrelas/estrelas.component';
import { PopoverComponent } from './../components/popover/popover.component';

@Component({
  selector: 'app-post-completo',
  templateUrl: './post-completo.page.html',
  styleUrls: ['./post-completo.page.scss'],
})
export class PostCompletoPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  async openStars(ev: any) {
    event.stopPropagation();
    const popover = await this.popoverController.create({
      component: EstrelasComponent,
      cssClass: 'estrelaPopover',
      event: ev,
    });
    return await popover.present();
  }

  async openPopover(ev: any) {
    event.stopPropagation();
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'customPopover',
      event: ev,
    });
    return await popover.present();
  }

  ngOnInit() {
  }

}
