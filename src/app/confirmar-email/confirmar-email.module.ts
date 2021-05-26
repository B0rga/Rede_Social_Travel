import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarEmailPageRoutingModule } from './confirmar-email-routing.module';

import { ConfirmarEmailPage } from './confirmar-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarEmailPageRoutingModule
  ],
  declarations: [ConfirmarEmailPage]
})
export class ConfirmarEmailPageModule {}
