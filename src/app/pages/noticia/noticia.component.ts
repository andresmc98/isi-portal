import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {
  newsId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el parámetro 'id' de la URL
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.newsId = +id;
      }
    });
  }
}
