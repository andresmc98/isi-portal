import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles = [
    {
      title:
        'Foro de Innovación Educativa: Explorando Nuevas Estrategias para el Aprendizaje en Línea',
      img: 'https://img.freepik.com/fotos-premium/equipo-estudiantes-que-completan-tarea_23-2147666610.jpg',
    },
    {
      title:
        'Inauguración del Nuevo Edificio de Ciencias: Un Paso Adelante en la Excelencia Académica',
      img: 'https://mtau.us/wp-content/uploads/2021/07/motivacion-y-esfuerzo.jpg',
    },
    {
      title:
        'Estudiante Destacado de Nuestra Universidad Premiado con Beca Fulbright para Estudios en el Extranjero',
      img: 'https://www.ucq.edu.mx/uc/images/post/6dd704c85a.jpg',
    },
  ];
}
