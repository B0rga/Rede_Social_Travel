import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltimoPassoPage } from './ultimo-passo.page';

const routes: Routes = [
  {
    path: '',
    component: UltimoPassoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltimoPassoPageRoutingModule {}
