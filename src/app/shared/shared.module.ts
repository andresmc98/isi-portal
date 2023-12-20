import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TitleComponent } from './title/title.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { ClubMenuComponent } from './club-menu/club-menu.component';

@NgModule({
  declarations: [
    FooterComponent,
    TitleComponent,
    IconMenuComponent,
    ClubMenuComponent,
  ],
  imports: [CommonModule, AppMaterialModule, RouterModule, MatToolbarModule],
  exports: [
    AppMaterialModule,
    CommonModule,
    FooterComponent,
    TitleComponent,
    IconMenuComponent,
    ClubMenuComponent,
  ],
})
export class SharedModule {}
