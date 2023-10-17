import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, AppMaterialModule, RouterModule, MatToolbarModule],
  exports: [AppMaterialModule, CommonModule, FooterComponent, HeaderComponent],
})
export class SharedModule {}
