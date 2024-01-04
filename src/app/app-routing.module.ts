import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages components
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { ClubMenuComponent } from './components/club-menu/club-menu.component';

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
    component: ClubMenuComponent
  },
  { path: 'noticias/:id', component: NoticiaComponent },
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
