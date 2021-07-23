import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueceuSenhaPageRoutingModule } from './esqueceu-senha-routing.module';

import { EsqueceuSenhaPage } from './esqueceu-senha.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EsqueceuSenhaPageRoutingModule
  ],
  declarations: [EsqueceuSenhaPage]
})
export class EsqueceuSenhaPageModule {}
