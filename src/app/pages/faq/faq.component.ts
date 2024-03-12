import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FAQ } from 'src/app/interfaces/Faqs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
})
export class FaqComponent implements OnInit {
  textoConSaltos: string = '';

  faqs: FAQ[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getFAQs();
  }

  getFAQs() {
    this.apiService.getFAQs().subscribe(
      (res: any) => {
        this.faqs = res.docs;
        this.faqs.forEach((faq: FAQ) => {
          //faq.respuesta = faq.respuesta.replace(/­/g, '<br>');
          return faq;
        });
        console.log(this.faqs)
      },
      (error) => {
        console.error('Error fetching FAQs:', error);
      }
    );
  }






  toggleContent(index: number) {
    const contenido = document.getElementById('contenido-' + index);
    const arrowIcon = document.getElementById('arrow-icon-' + index);
    if (contenido && arrowIcon) {
      contenido.classList.toggle('max-h-0');
      contenido.classList.toggle('max-h-full');
      arrowIcon.classList.toggle('rotate-180');
    }
  }

}
