import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Doc } from 'src/app/interfaces/Clubes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-menu',
  templateUrl: './club-menu.component.html',
  styleUrls: ['./club-menu.component.scss'],
})
export class ClubMenuComponent implements OnInit {
  @Input() clubName: string = '';
  clubUrl: string = '';
  club: Doc | null = null;

  constructor(private apiservice: ApiService, private route: ActivatedRoute) {}

  clubMap: { [key: string]: string } = {
    CSTI: 'assets/csti.png',
    CSI: 'assets/csi.png',
  };

  ngOnInit() {
     this.route.params.subscribe((params) => {
      this.clubName = params['nombre'];
      this.clubUrl = this.clubMap[this.clubName];
      this.getClubInfo();
     })
  }

  getClubInfo() {
    this.apiservice.getClubByName(this.clubName).subscribe({
      next: (data: Doc | null) => {
        this.club = data;
        // Verificar si club y descripcion están definidos antes de acceder a ellos
        if (this.club && this.club.descripcion && this.club.descripcion[0]?.children) {
        }
      },
      error: (err) => {
        console.error('Error al obtener información del club', err);
      },
    });
  }
}
