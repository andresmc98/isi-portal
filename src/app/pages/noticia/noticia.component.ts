import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {
  newsId!: string;
  newsContent: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService ) {}

  ngOnInit() {
    // Obtener el parámetro 'id' de la URL
    this.route.paramMap.subscribe((params) => {
      this.newsId = params.get('id')!;
      this.getNoticia();
    });
  }

  getNoticia() {
    this.apiService.getNoticiaById(this.newsId).subscribe((data) => {
      console.log(data);
      console.log(data.contenido);
      this.newsContent = data.contenido;
    });
  }
}
