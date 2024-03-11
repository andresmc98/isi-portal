import { Component, Input } from '@angular/core';

interface sections {
  label: string;
  imgPath: string;
  desc: string;
  route: string;
}

@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
})
export class IconMenuComponent {
  @Input() iconName: string = '';

  sections: sections[] = [
    {
      label: 'Profesores',
      imgPath: 'assets/camisa.png',
      desc: 'lorem ipsum dolor sit amet, consectetur adip temp tincidunt et justo',
      route: '/maestros',
    },
    {
      label: 'Alumnos',
      imgPath: 'assets/gorro-de-graduacion.png',
      desc: 'lorem ipsum dolor sit amet, consectetur adip temp tincidunt et justo',
      route: '/profesores',
    },
    {
      label: 'Historia',
      imgPath: 'assets/cronologia.png',
      desc: 'lorem ipsum dolor sit amet, consectetur adip temp tincidunt et justo',
      route: '/profesores',
    },
    {
      label: 'Preguntas',
      imgPath: 'assets/salvavidas.png',
      desc: 'lorem ipsum dolor sit amet, consectetur adip temp tincidunt et justo',
      route: '/profesores',
    },
  ];
}

// Icons atributions
// https://www.flaticon.es/icono-gratis/cronologia_11352405
// https://www.flaticon.es/icono-gratis/gorro-de-graduacion_9711024
// https://www.flaticon.es/icono-gratis/podrido_9711063
// https://www.flaticon.es/icono-gratis/salvavidas_12284542
