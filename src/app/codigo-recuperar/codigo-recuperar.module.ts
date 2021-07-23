import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoRecuperarPageRoutingModule } from './codigo-recuperar-routing.module';

import { CodigoRecuperarPage } from './codigo-recuperar.page';

import { CodeInputModule } from 'angular-code-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoRecuperarPageRoutingModule,
    CodeInputModule
  ],
  declarations: [CodigoRecuperarPage]
})
export class CodigoRecuperarPageModule {}
