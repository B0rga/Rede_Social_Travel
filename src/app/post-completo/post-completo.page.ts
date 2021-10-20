import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { EstrelasComponent } from './../components/estrelas/estrelas.component';
import { PopoverComponent } from './../components/popover/popover.component';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post-completo',
  templateUrl: './post-completo.page.html',
  styleUrls: ['./post-completo.page.scss'],
})
export class PostCompletoPage implements OnInit {
  thread:Object = {}
  replacedThread:Array<Object> = []
  constructor(public popoverController: PopoverController, private post:PostService) { }
  getPost(){
    this.post.getPost().subscribe((res)=>{
      this.thread = res
      this.replaceThread(res['complement'][0])
      console.log(this.replacedThread)
    })
    
  }
  replaceThread(thread){
    this.replacedThread.push(thread)
    if(thread.complement){
      this.replaceThread(thread.complement[0])
    }
  }
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
    this.getPost()
  }

}
