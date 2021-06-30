import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [PostComponent]
})
export class SharedComponentsModule { }
