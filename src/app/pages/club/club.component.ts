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

  }


}



