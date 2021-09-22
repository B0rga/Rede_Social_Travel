import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';
import { PopoverComponent } from './popover/popover.component';
import { ComentarioComponent } from './comentario/comentario.component';

@NgModule({
  declarations: [
    PostComponent,
    PopoverComponent,
    ComentarioComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    PostComponent,
    PopoverComponent,
    ComentarioComponent
  ]
})
export class SharedComponentsModule { }
