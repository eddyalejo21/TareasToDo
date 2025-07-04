import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareaNuevaPageRoutingModule } from './tarea-nueva-routing.module';

import { TareaNuevaPage } from './tarea-nueva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareaNuevaPageRoutingModule
  ],
  declarations: [TareaNuevaPage]
})
export class TareaNuevaPageModule {}
