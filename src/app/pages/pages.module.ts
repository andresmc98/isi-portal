import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components imports
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { ClubComponent } from './club/club.component';

// Components from module
import { HomeComponent } from '../pages/home/home.component';
import { NoticiasComponent } from '../pages/noticias/noticias.component';
import { NoticiaComponent } from '../pages/noticia/noticia.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { MaestroComponent } from './maestro/maestro.component';

@NgModule({
  declarations: [
    HomeComponent,
    NoticiasComponent,
    NoticiaComponent,
    ClubComponent,
    MaestrosComponent,
    MaestroComponent,
  ],
  imports: [CommonModule, SharedModule, ComponentsModule, RouterModule],
  exports: [HomeComponent, NoticiasComponent, NoticiaComponent, ClubComponent],
})
export class PagesModule {}
