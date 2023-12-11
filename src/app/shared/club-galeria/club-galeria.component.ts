import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-club-galeria',
  templateUrl: './club-galeria.component.html',
  styleUrls: ['./club-galeria.component.scss']
})
export class ClubGaleriaComponent {
  @Input() images: string[] = [];
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }


}
