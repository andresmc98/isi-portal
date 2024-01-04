import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Doc } from 'src/app/interfaces/Clubes';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  club: Doc | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const nombreClub = this.route.snapshot.params['nombre'];
    if (nombreClub){
      this.getClubInfo(nombreClub)
    }

  }

  getClubInfo(nombreClub: string): void{
    this.apiService.getClubByName(nombreClub).subscribe({
      next: (clubResponse: Doc | null) => {
        this.club = clubResponse;
      },
      error: (err) => {
        console.error('Error de clubes', err)
      }
    })
  }

  
}
