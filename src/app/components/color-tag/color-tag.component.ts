import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-tag',
  template: `
    <p class="{{ colorClass }} rounded-2xl px-3 py-1">
      {{ tag }}
    </p>
  `,
})
export class ColorTagComponent {
  @Input() tag: string = '';

  colorClass: string = '';

  ngOnInit() {
    this.setTagColor();
  }

  private setTagColor() {
    switch (this.tag) {
      case 'Prácticas':
        this.colorClass = 'bg-red-600/80 hover:bg-red-600';
        break;

      case 'Ceneval':
        this.colorClass = 'bg-blue-600/80 hover:bg-blue-600';
        break;

      case 'Materias':
        this.colorClass = 'bg-yellow-600/80 hover:bg-yellow-600';
        break;

      case 'Servicio':
        this.colorClass = 'bg-purple-600/80 hover:bg-purple-600';
        break;

      case 'Titulación':
        this.colorClass = 'bg-green-600/80 hover:bg-green-600';
        break;

      default:
        this.colorClass = 'bg-gray-600/80 hover:bg-gray-600';
        break;
    }
  }
}
