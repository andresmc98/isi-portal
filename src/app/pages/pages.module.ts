import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components from module
import { HomeComponent } from '../pages/home/home.component';
import { NoticiasComponent } from '../pages/noticias/noticias.component';
import { NoticiaComponent } from '../pages/noticia/noticia.component';

// Components imports
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, NoticiasComponent, NoticiaComponent],
  imports: [CommonModule, SharedModule, ComponentsModule, RouterModule],
  exports: [HomeComponent, NoticiasComponent, NoticiaComponent],
})
export class PagesModule {}
