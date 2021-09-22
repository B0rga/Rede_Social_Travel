import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutroPerfilPage } from './outro-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: OutroPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutroPerfilPageRoutingModule {}
