import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ClubesComponent } from './components/clubes/clubes.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  {
    path: 'clubes',
    component: ClubesComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
