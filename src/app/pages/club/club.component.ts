import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Doc } from 'src/app/interfaces/Clubes';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  @Input() clubName: string = '';
  clubUrl: string = '';
  club: Doc | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  clubMap: { [key: string]: string } = {
    CSTI: 'assets/csti.png',
    CSI: 'assets/csi.png',
  };

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clubName = params['nombre'];
      this.clubUrl = this.clubMap[this.clubName];
      this.getClubInfo();
    });
  }

  getClubInfo() {
    this.apiService.getClubByName(this.clubName).subscribe({
      next: (data: Doc | null) => {
        this.club = data;
        //verificar si club y descripción están definidos antes de acceder a ellos
        if (this.club && this.club.descripcion && this.club.descripcion[0].children) {

        }
      },
      error: (err) => {
        console.error('Error al obtener información del club', err);
      },
    });
  }
}



