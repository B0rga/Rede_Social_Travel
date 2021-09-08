import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../components/popover/popover.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input('user_name')name:string
  @Input('post_content')content:string
  @Input('post_city')city:string
  @Input('post_country')country:string
  constructor(
    public popoverController: PopoverController,
    public router: Router
    ) { }

  async openPopover(ev: any) {
    event.stopPropagation();
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'customPopover',
      event: ev,
    });
    return await popover.present();
  }

  entrarPost(){
    this.router.navigate(['post-completo'])
  }

}
