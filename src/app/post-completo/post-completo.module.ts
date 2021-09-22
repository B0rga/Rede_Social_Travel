import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostCompletoPageRoutingModule } from './post-completo-routing.module';

import { PostCompletoPage } from './post-completo.page';

import { SharedComponentsModule } from './../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostCompletoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [PostCompletoPage]
})
export class PostCompletoPageModule {}
