import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NoticiasComponent } from './noticias/noticias.component';
import { MapaCurricularInteractivoComponent } from './mapa-curricular-interactivo/mapa-curricular-interactivo.component';
import { ClubesComponent } from './clubes/clubes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    GaleriaComponent,
    SliderComponent,
    NoticiasComponent,
    MapaCurricularInteractivoComponent,
    ClubesComponent,
  ],
  imports: [CommonModule, RouterModule, CarouselModule.forRoot(), SharedModule],
  exports: [HomeComponent],
})
export class ComponentsModule {}
