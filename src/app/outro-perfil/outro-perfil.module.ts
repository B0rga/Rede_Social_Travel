import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutroPerfilPageRoutingModule } from './outro-perfil-routing.module';

import { OutroPerfilPage } from './outro-perfil.page';

import { SharedComponentsModule } from './../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutroPerfilPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [OutroPerfilPage]
})
export class OutroPerfilPageModule {}
