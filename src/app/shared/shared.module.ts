import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TitleComponent } from './title/title.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { ClubMenuComponent } from '../components/club-menu/club-menu.component';
import { RichtextDisplayComponent } from './richtext-display/richtext-display.component';

@NgModule({
  declarations: [
    FooterComponent,
    TitleComponent,
    IconMenuComponent,
    ClubMenuComponent,
    RichtextDisplayComponent,
  ],
  imports: [CommonModule, AppMaterialModule, RouterModule, MatToolbarModule],
  exports: [
    AppMaterialModule,
    CommonModule,
    FooterComponent,
    TitleComponent,
    IconMenuComponent,
    ClubMenuComponent,
    RichtextDisplayComponent
  ],
})
export class SharedModule {}
