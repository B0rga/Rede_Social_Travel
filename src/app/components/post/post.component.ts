import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../components/popover/popover.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {

  constructor(
    public popoverController: PopoverController,
    public router: Router
    ) { }

  async openPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'customPopover',
      event: ev,
      translucent: true
    });

    return await popover.present();
  }
}
