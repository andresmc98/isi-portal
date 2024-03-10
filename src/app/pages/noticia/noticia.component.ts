import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {
  apiUrl = environment.baseMediaUrl; //server
  newsId!: string;
  news: any;
  newsContent: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService ) {}

  ngOnInit() {
    // Obtener el parámetro 'id' de la URL
    this.route.paramMap.subscribe((params) => {
      this.newsId = params.get('id')!;
      this.getNoticiaById();
    });
  }

  getNoticiaById() {
    this.apiService.getNoticiaById(this.newsId).subscribe((data) => {
      console.log(data);
      console.log(data.contenido);
      this.news = data;
      this.newsContent = data.contenido;
    });
  }
}
