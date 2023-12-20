import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SliderComponent } from './slider/slider.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule, RouterModule, CarouselModule.forRoot(), SharedModule],
  exports: [SliderComponent],
})
export class ComponentsModule {}
