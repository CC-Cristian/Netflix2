// app-routing.module.ts

import { NuevaPaginaPage } from './nueva-pagina/nueva-pagina.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'nueva-pagina', loadChildren: () => import('./nueva-pagina/nueva-pagina.module').then(m => m.NuevaPaginaPageModule) },
  {
    path: 'tercerapagina',
    loadChildren: () => import('./tercerapagina/tercerapagina.module').then( m => m.TercerapaginaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
