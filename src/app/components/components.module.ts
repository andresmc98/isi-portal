import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SliderComponent } from './slider/slider.component';

import { SharedModule } from '../shared/shared.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ColorTagComponent } from './color-tag/color-tag.component';

@NgModule({
  declarations: [SliderComponent, CarouselComponent, ColorTagComponent],
  imports: [CommonModule, RouterModule, CarouselModule.forRoot(), SharedModule],
  exports: [SliderComponent, CarouselComponent, ColorTagComponent],
})
export class ComponentsModule {}
