import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AlterarIdPageRoutingModule } from './alterar-id-routing.module';

import { AlterarIdPage } from './alterar-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarIdPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlterarIdPage]
})
export class AlterarIdPageModule {}
