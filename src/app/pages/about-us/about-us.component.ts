import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Dev } from 'src/app/interfaces/Devs';
import { Media } from 'src/app/interfaces/Media';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environment/environment';
import { Devs } from '../../interfaces/Devs';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{

  mediaUs: Media = {} as Media;
  devs: Dev [] = [];
  usPhoto = '65dfa8d92fdc50ead6b582d4'
  apiUrl = environment.baseMediaUrl; //server

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void{
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMediaByID(this.usPhoto)
    console.log('MediaUs', this.mediaUs);
    this.getDevs();
  }

  getMediaByID(id: string) {
    this.apiservice.getMediaByID(id).subscribe(res => {
      console.log('getMediaByIDResponse', res);
      this.mediaUs = res;
    }, error => {
      console.log('getMediaByIDError', error);
    });
  }

  getDevs() {
    this.apiservice.getDevs().subscribe(res => {
      console.log('getDevsResponse', res);
      this.devs = res.docs;
      console.log('Devs:', this.devs);
    }, error => {
      console.log('getDevsError', error);
    });
  }
}


