import { Component, Input, OnInit } from '@angular/core';
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

  apiUrl = environment.baseMediaUrl; //server

  club: Club = {} as Club;
  nombreClub: string = '';

  constructor(private route: ActivatedRoute, private apiservice: ApiService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.nombreClub = params['id'] ?? '';
    });
    this.getClubById(this.nombreClub);
  }

  getClubById(id: string) {
    console.log('getClubByIdPayload');
    this.apiservice.getClubById(id).subscribe(res => {
      console.log('getClubByIdResponse', res);
      this.club = res;
    }, error => {
      console.log('getClubByIdError', error);
    })
  }
}
