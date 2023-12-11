import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  articles = [
    {
      title:
        'Foro de Innovación Educativa: Explorando Nuevas Estrategias para el Aprendizaje en Línea',
      img: 'https://img.freepik.com/fotos-premium/equipo-estudiantes-que-completan-tarea_23-2147666610.jpg',
      id: 1,
    },
    {
      title:
        'Inauguración del Nuevo Edificio de Ciencias: Un Paso Adelante en la Excelencia Académica',
      img: 'https://mtau.us/wp-content/uploads/2021/07/motivacion-y-esfuerzo.jpg',
      id: 2,
    },
    {
      title:
        'Estudiante Destacado de Nuestra Universidad Premiado con Beca Fulbright para Estudios en el Extranjero',
      img: 'https://www.ucq.edu.mx/uc/images/post/6dd704c85a.jpg',
      id: 3,
    },
  ];

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigate(['/noticias', id]);
  }
}
