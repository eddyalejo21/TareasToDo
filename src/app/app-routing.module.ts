import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tarea-detalle/:tareaId',
    loadChildren: () => import('./pages/tarea-detalle/tarea-detalle.module').then( m => m.TareaDetallePageModule)
  },
  {
    path: 'tarea-detalle',
    loadChildren: () => import('./pages/tarea-detalle/tarea-detalle.module').then( m => m.TareaDetallePageModule)
  },
  {
    path: 'tarea-nueva',
    loadChildren: () => import('./pages/tarea-nueva/tarea-nueva.module').then( m => m.TareaNuevaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
