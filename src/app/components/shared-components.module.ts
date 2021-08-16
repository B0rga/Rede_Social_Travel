import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [
    PostComponent,
    PopoverComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    PostComponent,
    PopoverComponent
  ]
})
export class SharedComponentsModule { }
