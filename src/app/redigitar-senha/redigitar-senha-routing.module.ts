import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedigitarSenhaPage } from './redigitar-senha.page';

const routes: Routes = [
  {
    path: '',
    component: RedigitarSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedigitarSenhaPageRoutingModule {}
