import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Doc } from 'src/app/interfaces/Clubes';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  clubes: Doc[] = [];
  apiUrl = environment.baseMediaUrl; //server
  clubNombre: string = '';

  constructor(private route: ActivatedRoute, private apiservice: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.clubNombre = (params.get('nombre') ?? '').toUpperCase();
      this.getClubes();
    });
  }

  getClubes() {
    console.log('getClubesPayload');
    this.apiservice.getClubes().subscribe(res => {
      console.log('getClubesResponse', res);
      // Filtrar la lista de clubes para mostrar solo el club con el ID correspondiente
      this.clubes = res.docs.filter(club => club.nombre === this.clubNombre);
      console.log('Filtered Clubs:', this.clubes);
    }, error => {
      console.log('getClubesError', error);
    })
  }
}
