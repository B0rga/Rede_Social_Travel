import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AlterarNomePageRoutingModule } from './alterar-nome-routing.module';

import { AlterarNomePage } from './alterar-nome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarNomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlterarNomePage]
})
export class AlterarNomePageModule {}
