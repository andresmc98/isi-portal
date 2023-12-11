import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TitleComponent } from './title/title.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { ClubMenuComponent } from './club-menu/club-menu.component';
import { ClubPresentationComponent } from './club-presentation/club-presentation.component';
import { ClubquienessomosComponent } from './clubquienessomos/clubquienessomos.component';
import { ClubLideresComponent } from './club-lideres/club-lideres.component';
import { ClubServiciosComponent } from './club-servicios/club-servicios.component';
import { ClubGaleriaComponent } from './club-galeria/club-galeria.component';
import { ClubContactoComponent } from './club-contacto/club-contacto.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TitleComponent,
    IconMenuComponent,
    ClubMenuComponent,
    ClubPresentationComponent,
    ClubquienessomosComponent,
    ClubLideresComponent,
    ClubServiciosComponent,
    ClubGaleriaComponent,
    ClubContactoComponent,
  ],
  imports: [CommonModule, AppMaterialModule, RouterModule, MatToolbarModule],
  exports: [
    AppMaterialModule,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    TitleComponent,
    IconMenuComponent,
    ClubMenuComponent,
    ClubPresentationComponent,
    ClubquienessomosComponent,
    ClubLideresComponent,
    ClubServiciosComponent,
    ClubGaleriaComponent,
    ClubContactoComponent,
  ],
})
export class SharedModule {}
