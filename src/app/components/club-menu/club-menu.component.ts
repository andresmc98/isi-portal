import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Doc } from 'src/app/interfaces/Clubes';

@Component({
  selector: 'app-club-menu',
  templateUrl: './club-menu.component.html',
  styleUrls: ['./club-menu.component.scss'],
})
export class ClubMenuComponent implements OnInit{

  clubes : Doc[] = [];

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void{
    this.getClubes();

  }

  getClubes(){
    console.log('getClubesPayload');
    this.apiservice.getClubes().subscribe(res=>{
      console.log('getClubesResponse', res);
      this.clubes = res.docs;
    },error =>{
      console.log('getClubesError', error);
    })
  }
}
