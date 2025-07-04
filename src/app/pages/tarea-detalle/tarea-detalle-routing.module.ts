import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareaDetallePage } from './tarea-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: TareaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareaDetallePageRoutingModule {}
