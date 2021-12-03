import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { EstrelasComponent } from './../components/estrelas/estrelas.component';
import { PopoverComponent } from './../components/popover/popover.component';
import { PostService } from '../services/post.service';
interface Thread{
  locality:string,
  business:string,
  rote:string,
  link:string
  title:string,
  content:string,
  images:Array<string>,
  complement:Thread
}
@Component({
  selector: 'app-post-completo',
  templateUrl: './post-completo.page.html',
  styleUrls: ['./post-completo.page.scss'],
})

export class PostCompletoPage implements OnInit {
  savePostIcon = 'bookmark-outline';
  thread:any = null
  replacedThread:Array<Thread> = []
  linkRote:string 
  comments:Array<any>
  postLoaded:boolean = false
  constructor(public popoverController: PopoverController, private post:PostService) {
   }
  getPost(){
    this.post.getPost().then((post)=>{
      post.subscribe((res:any)=>{
        
        this.thread = res.publication
        this.replaceThread(this.thread.complement)
      })
    })
    this.replacedThread.map((post,i,arr)=>{
      const rote = post.rote.replace(/ /g, '+').replace(/,/g, '%2C').replace(/\|/g, '+')
      arr[i].link = `https://www.google.com/maps/dir/?api=1&query=${rote}`
      console.log(arr[i].link)
    })
    this.ultimoPost()
  }
  replaceThread(thread){
    console.log(thread)
    this.replacedThread.push(thread)
    if(thread.complement){
      this.replaceThread(thread.complement)
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
  ultimoPost(){
    
    this.replacedThread.map((post,i,arr)=>{
      //codificação da url
      const rote = post.rote.replace(/ /g, '+').replace(/,/g, '%2C').replace(/\|/g, '+')
      if(i == 0){
        this.linkRote = `https://www.google.com/maps/dir/?api=1&origin=${rote}`
      }else if(i == arr.length - 1){
        this.linkRote += `&destination=${rote}`
      }else{
        this.linkRote += `&waypoints=${rote}%7C`
      }
      
    })
    console.log(this.linkRote)
  }
  btnSavePost(): void{

    if(this.savePostIcon == 'bookmark-outline'){
      this.savePostIcon = 'bookmark';
    }
    else{
      this.savePostIcon = 'bookmark-outline';
    }
  }
  getComments(){
    this.post.getComments('','').then(getComments=>{
      if(getComments){
        getComments.subscribe((res:any)=>{
          this.comments = res.comments
        })
      }
    })
  }
  ngOnInit() {
    this.getPost()
  }

}
