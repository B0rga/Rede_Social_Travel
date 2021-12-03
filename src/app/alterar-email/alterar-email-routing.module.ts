import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarEmailPage } from './alterar-email.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarEmailPageRoutingModule {}
