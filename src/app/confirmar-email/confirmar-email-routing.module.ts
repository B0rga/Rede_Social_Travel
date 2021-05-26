import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarEmailPage } from './confirmar-email.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarEmailPageRoutingModule {}
