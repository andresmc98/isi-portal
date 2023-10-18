import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-club-menu',
  templateUrl: './club-menu.component.html',
  styleUrls: ['./club-menu.component.css'],
})
export class ClubMenuComponent {
  @Input() clubName: string = '';
  clubUrl: string = '';

  clubMap: { [key: string]: string } = {
    CSTI: 'assets/csti.png',
    CSI: 'assets/csi.png',
  };
  ngOnInit() {
    this.clubName = this.clubName;
    this.clubUrl = this.clubMap[this.clubName];
  }
}
