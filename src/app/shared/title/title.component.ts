import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1>
      {{ title }}
    </h1>
    <div class="divider"></div>
  `,
  styles: [
    `
      h1 {
        margin-top: 2rem;
      }
      .divider {
        height: 0.5rem;
        background-color: var(--amarillo-principal);
        border-radius: 1rem;
      }
    `,
  ],
})
export class TitleComponent {
  @Input() title: string = '';
}
