import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages components
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { ClubComponent } from './pages/club/club.component';
import { MaestrosComponent } from './pages/maestros/maestros.component';
import { MaestroComponent } from './pages/maestro/maestro.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  {
    path: 'clubes/:nombre',
    component: ClubComponent,
  },
  { path: 'noticias/:id', component: NoticiaComponent },
  { path: 'maestros', component: MaestrosComponent },
  { path: 'maestros/:maestro', component: MaestroComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
