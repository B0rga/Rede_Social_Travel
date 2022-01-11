import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public router: Router,
    private popoverController: PopoverController,
    private post:PostService
    ) { }

  async btnPerfil(){
    this.router.navigate(['outro-perfil']);
    await this.popoverController.dismiss();
  }

  async btnSalvar(){
    this.post.savePost()
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
