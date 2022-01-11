import { Component, ViewChild, OnInit } from '@angular/core';
import { AlertController, IonTextarea, PopoverController, ToastController,  } from '@ionic/angular';
import { EstrelasComponent } from './../components/estrelas/estrelas.component';
import { PopoverComponent } from './../components/popover/popover.component';
import { PostService } from '../services/post.service';
import { ActionSheetController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
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
  comments:Array<any> = []
  postLoaded:boolean = false
  commentLines:number = 1
  evalueted:boolean = false
  evaluetion:any
  @ViewChild('content') content:IonTextarea
  constructor(public popoverController: PopoverController, 
    private post:PostService,
    public actionSheetController: ActionSheetController,
    private alert:AlertController,
    private user:UserService,
    private router: Router,
    private toastController:ToastController
    ) {
   }
  getPost(){
    this.post.getPost().then((post)=>{
      post.subscribe(async (res:any)=>{
        this.thread = res.publication
        this.replacedThread = []
        await this.getComments()
        if(this.thread.complement){
          this.replaceThread(this.thread.complement)
        }
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
    thread.author = this.thread.author
    this.replacedThread.push(thread)
    if(thread.complement){
      this.replaceThread(thread.complement)
    }
  }
  updateRows(ev){
    let num_caracter_linha = 30
    const lines = Math.round(ev.detail.value.length/num_caracter_linha) 
    if(lines>1){
      this.commentLines = lines
    }
  }
  async comentar(){
    const user = await this.user.getUser()
    if(this.evalueted && this.thread.author.id != user.id){
      const token = await this.user.getToken()
      this.post.commentPublication(user.id,this.content.value,token).subscribe((res)=>{
        console.log(res)
        this.getPost()
        this.content.value = ''
      }, err=>{
        console.log(err)
      })
    }else if(this.thread.author.id == user.id){
      this.toast('Você não pode comentar sua propria publicação!')
    }else{
      this.toast('Você precisa avaliar a publicação para poder comentar!')
    }
  }
  async toast(message:string){
    const toast = await this.toastController.create({
      cssClass: 'publicado',
      message: message,
      duration: 1000,
      translucent: true
    });
    toast.present();
  }
  async openStars(ev: any) {
    const user = await this.user.getUser()
    if(this.thread.author.id != user.id){
      event.stopPropagation();
      const popover = await this.popoverController.create({
        component: EstrelasComponent,
        cssClass: 'estrelaPopover',
        event: ev,
      });
      popover.onDidDismiss().then(()=>{
        this.getPost()
        this.evalueted = true
      })
      return await popover.present();
    }else{
      this.toast('Você não pode avaliar sua propria publicação!')
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
  }
  btnSavePost(): void{
    this.post.savePost(this.thread).then(()=>{
      if(this.savePostIcon == 'bookmark-outline'){
        this.savePostIcon = 'bookmark';
      }
      else{
        this.savePostIcon = 'bookmark-outline';
      }
    })
    
  }
  commentPublication(){

  }
  async getComments(){
    console.log(this.thread)
     this.post.getComments(this.thread.author.id,this.thread.id).then(res=>{
       res.subscribe((res:any)=>{
        this.comments = res
      })
     })
  }
  ngOnInit() {
    this.getPost()
   
  }
  async getOneEvaluation(){
    const token = await this.user.getToken()
    const user = await this.user.getUser()
    this.post.getOneEvaluetion(user.id,token).subscribe(res=>{
      console.log(res)
      this.evalueted = true
      this.evaluetion = res
    }, (err)=>{
      if(err.status == 404){
        this.evalueted = false
      }
    })
  }
  async openProfile(){
    this.user.otherUser = this.thread.author
    this.router.navigate(['outro-perfil'])
  }
}
