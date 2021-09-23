import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';
import { PopoverComponent } from './popover/popover.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { EstrelasComponent } from './estrelas/estrelas.component';

@NgModule({
  declarations: [
    PostComponent,
    PopoverComponent,
    ComentarioComponent,
    EstrelasComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    PostComponent,
    PopoverComponent,
    ComentarioComponent,
    EstrelasComponent
  ]
})
export class SharedComponentsModule { }
