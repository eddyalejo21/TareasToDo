import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareaNuevaPage } from './tarea-nueva.page';

const routes: Routes = [
  {
    path: '',
    component: TareaNuevaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareaNuevaPageRoutingModule {}
