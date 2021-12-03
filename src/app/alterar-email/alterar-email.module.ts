import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AlterarEmailPageRoutingModule } from './alterar-email-routing.module';

import { AlterarEmailPage } from './alterar-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarEmailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlterarEmailPage]
})
export class AlterarEmailPageModule {}
