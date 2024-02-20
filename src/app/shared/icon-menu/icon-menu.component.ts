import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
})
export class IconMenuComponent {
  @Input() iconName: string = '';
  iconUrl: string = '';

  iconMap: { [key: string]: string } = {
    profesores: 'assets/camisa.png',
    alumnos: 'assets/gorro-de-graduacion.png',
    historia: 'assets/cronologia.png',
    preguntas: 'assets/salvavidas.png',
  };
  ngOnInit() {
    this.iconUrl = this.iconMap[this.iconName];
  }
}

// Icons atributions
// https://www.flaticon.es/icono-gratis/cronologia_11352405
// https://www.flaticon.es/icono-gratis/gorro-de-graduacion_9711024
// https://www.flaticon.es/icono-gratis/podrido_9711063
// https://www.flaticon.es/icono-gratis/salvavidas_12284542
