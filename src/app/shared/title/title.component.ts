import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1>Lorem it</h1>
    <div class="divider"></div>
  `,
  styles: [
    `
      .divider {
        height: 0.5rem;
        background-color: var(--amarillo-principal);
        border-radius: 1rem;
      }
    `,
  ],
})
export class TitleComponent {}
