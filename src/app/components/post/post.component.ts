import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../components/popover/popover.component';
import { PostService } from 'src/app/services/post.service';
import {Post} from '../../post-interface'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit{
  @Input('post_data')data:Post
  private _images:Array<string>
  set images(images){
    this._images = images
  }
  get images(){
    return this._images
  }

  constructor(
    public popoverController: PopoverController,
    public router: Router,
    private post:PostService
    ) { }
  ngOnInit(){
    this.images = this.data.images
    if(this.images){
      this.images.map((image,i,arr)=>{
        arr[i]=`https://storageapptravel.blob.core.windows.net/postimages/${image}`
      })
    }
    
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

  entrarPost(){
    this.post.openPost = {author: this.data.author, id: this.data.id}
    this.router.navigate(['post-completo'])
  }

}
