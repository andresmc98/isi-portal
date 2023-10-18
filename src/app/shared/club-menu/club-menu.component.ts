import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Doc } from 'src/app/interfaces/Clubes';
import { Clubes } from 'src/app/interfaces/Clubes';

@Component({
  selector: 'app-club-menu',
  templateUrl: './club-menu.component.html',
  styleUrls: ['./club-menu.component.css'],
})
export class ClubMenuComponent {
  @Input() clubName: string = '';
  clubUrl: string = '';

  clubes: Doc[] = [];

  constructor(
    private apiservice : ApiService
  ) {}

  clubMap: { [key: string]: string } = {
    CSTI: 'assets/csti.png',
    CSI: 'assets/csi.png',
  };
  ngOnInit() {
    this.clubName = this.clubName;
    this.clubUrl = this.clubMap[this.clubName];
    this.getClubes();

  }

  getClubes() {
    this.apiservice.getClubes().subscribe({
      next: (data: Clubes) => {
        this.clubes = data.docs;
      },
      error: (err) => {
        this.clubes = [];
      },
    });
  }
}
