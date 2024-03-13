import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Noticias, Noticia } from 'src/app/interfaces/Noticias';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
})
export class NoticiasComponent implements OnInit {
  noticias: Noticia[] = [];
  apiUrl = environment.baseMediaUrl;

  constructor(private apiservice: ApiService) {}

  ngOnInit() {
    this.apiservice.getNoticias().subscribe((data) => {
      this.noticias = data.docs;
      console.log(this.noticias);
    });
  }
}
