import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

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
