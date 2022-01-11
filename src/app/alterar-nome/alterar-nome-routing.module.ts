import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarNomePage } from './alterar-nome.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarNomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarNomePageRoutingModule {}
