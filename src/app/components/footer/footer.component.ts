import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  info = [
    {
      enlace: 'https://maps.app.goo.gl/zq7ETmXosQ7tJ6Nb7',
      icono: 'location_on',
      info: 'Avenida Universidad con Calle de la Sabiduría, Edificio 5J, Planta Baja. Hermosillo, Son.',
    },
    {
      enlace: 'mailto:rene.navarro@unison.mx',
      icono: 'email',
      info: 'rene.navarro@unison.mx',
    },
    {
      enlace: 'tel:662-259-2283 ',
      icono: 'call',
      info: '662-259-2283 ',
    },
  ];
  social = [
    {
      enlace: 'https://www.facebook.com/profile.php?id=100002092122881',
      icono: 'facebook',
      hoverColor: 'hover:text-blue-700',
    },
    {
      enlace: 'https://twitter.com/ISIUNISON',
      icono: 'x',
      hoverColor: 'hover:text-black/30',
    },
    {
      enlace: 'https://www.instagram.com/',
      icono: 'instagram',
      hoverColor: 'hover:text-pink-600',
    },
    {
      enlace: 'https://www.youtube.com/',
      icono: 'youtube',
      hoverColor: 'hover:text-red-600',
    },
  ];
}
