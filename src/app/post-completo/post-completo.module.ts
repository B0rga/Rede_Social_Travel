import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostCompletoPageRoutingModule } from './post-completo-routing.module';

import { PostCompletoPage } from './post-completo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostCompletoPageRoutingModule
  ],
  declarations: [PostCompletoPage]
})
export class PostCompletoPageModule {}
