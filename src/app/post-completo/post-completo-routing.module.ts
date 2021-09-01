import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostCompletoPage } from './post-completo.page';

const routes: Routes = [
  {
    path: '',
    component: PostCompletoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostCompletoPageRoutingModule {}
