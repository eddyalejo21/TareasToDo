import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareaDetallePageRoutingModule } from './tarea-detalle-routing.module';

import { TareaDetallePage } from './tarea-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareaDetallePageRoutingModule
  ],
  declarations: [TareaDetallePage]
})
export class TareaDetallePageModule {}
