import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltimoPassoPageRoutingModule } from './ultimo-passo-routing.module';

import { UltimoPassoPage } from './ultimo-passo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UltimoPassoPageRoutingModule
  ],
  declarations: [UltimoPassoPage]
})
export class UltimoPassoPageModule {}
