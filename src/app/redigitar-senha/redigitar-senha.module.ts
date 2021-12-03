import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RedigitarSenhaPageRoutingModule } from './redigitar-senha-routing.module';

import { RedigitarSenhaPage } from './redigitar-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedigitarSenhaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RedigitarSenhaPage]
})
export class RedigitarSenhaPageModule {}
