import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoRecuperarPageRoutingModule } from './codigo-recuperar-routing.module';

import { CodigoRecuperarPage } from './codigo-recuperar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoRecuperarPageRoutingModule
  ],
  declarations: [CodigoRecuperarPage]
})
export class CodigoRecuperarPageModule {}
