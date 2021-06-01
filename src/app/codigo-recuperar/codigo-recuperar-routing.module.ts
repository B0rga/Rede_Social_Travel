import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoRecuperarPage } from './codigo-recuperar.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoRecuperarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoRecuperarPageRoutingModule {}
