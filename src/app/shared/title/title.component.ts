import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1 class="font-lexend text-3xl font-medium">
      {{ title }}
    </h1>
    <div class="h-2 bg-yellow-400 rounded-2xl"></div>
  `,
  styles: [],
})
export class TitleComponent {
  @Input() title: string = '';
}
