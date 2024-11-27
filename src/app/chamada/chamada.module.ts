import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChamadaPageRoutingModule } from './chamada-routing.module';

import { ChamadaPage } from './chamada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChamadaPageRoutingModule
  ],
  declarations: [ChamadaPage]
})
export class ChamadaPageModule {}
