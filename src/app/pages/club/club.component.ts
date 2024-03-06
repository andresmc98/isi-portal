import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Club } from 'src/app/interfaces/Clubes';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  clubes: Club[] = [];
  apiUrl = environment.baseMediaUrl; //server
  clubNombre: string = '';

  constructor(private route: ActivatedRoute, private apiservice: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const clubNombre = params.get('nombre');
      if (clubNombre) {
        console.log("Nombre del club:", clubNombre);
        this.getClubes(clubNombre);
      } else {
        console.log("No se proporcionó un nombre de club válido en la URL.");
      }
    });
  }

  getClubes(clubNombre: string) {
    console.log('getClubesPayload');
    this.apiservice.getClubes().subscribe(res => {
      console.log('getClubesResponse', res);
      // Convertir el nombre del club y el parámetro de búsqueda a minúsculas
      const lowercaseClubNombre = clubNombre.toLowerCase();
      // Filtrar la lista de clubes para mostrar solo el club con el nombre correspondiente
      this.clubes = res.Club.filter(club => club.nombre.toLowerCase() === lowercaseClubNombre);
      console.log('Filtered Clubs:', this.clubes);
    }, error => {
      console.log('getClubesError', error);
    });
  }
}
