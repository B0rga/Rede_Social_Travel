import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViagensPageRoutingModule } from './viagens-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { ViagensPage } from './viagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViagensPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ViagensPage]
})
export class ViagensPageModule {}
