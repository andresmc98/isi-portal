import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages components
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { ClubComponent } from './pages/club/club.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MaestrosComponent } from './pages/maestros/maestros.component';
import { MaestroComponent } from './pages/maestro/maestro.component';
import { MateriaComponent } from './pages/materia/materia.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { FaqComponent } from './pages/faq/faq.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clubes/:nombre',
    component: ClubComponent,
  },
  {
    path: 'nosotros',
    component: AboutUsComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  {
    path: 'noticias/:id',
    component: NoticiaComponent
  },
  {
    path: 'maestros',
    component: MaestrosComponent
  },
  {
    path: 'maestros/:maestro',
    component: MaestroComponent
  },
  {
    path: 'materias',
    component: MateriasComponent,
  },
  {
    path: 'materias/:materia',
    component: MateriaComponent,
  },
  {
    path: 'FAQ',
    component: FaqComponent,
  },
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
export class AppRoutingModule { }
