import { Component, AfterViewInit } from '@angular/core';

interface Slide {
  imageUrl: string;
  text: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements AfterViewInit {

  currentSlideIndex: number = 0;
  indicators: boolean[] = []; //indica si cada slider esta activo
  slides: Slide[] = [
    {
      imageUrl: 'https://mtau.us/wp-content/uploads/2021/07/motivacion-y-esfuerzo.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      imageUrl: 'https://img.freepik.com/fotos-premium/equipo-estudiantes-que-completan-tarea_23-2147666610.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      imageUrl: 'https://www.ucq.edu.mx/uc/images/post/6dd704c85a.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    }
  ];

  private intervalId: any;
  ngAfterViewInit() {
    this.showCurrentSlide();
    this.autoNextSlide();

  }

  nextSlide() {
    clearInterval(this.intervalId);
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length; //Modificar el número 3 por la cantidad de slides que tengas
    this.updateIndicators();
    this.showCurrentSlide();
  }

  prevSlide() {
    clearInterval(this.intervalId);
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.updateIndicators();
    this.showCurrentSlide();
  }

  goToSlide(index: number){
    this.currentSlideIndex = index;
    this.updateIndicators();
    this.showCurrentSlide();
  }

  updateIndicators() {
    this.indicators = Array(this.slides.length).fill(false);
    this.indicators[this.currentSlideIndex] = true;
  }

  showCurrentSlide() {
    const slides = document.querySelectorAll('.carousel-slide') as NodeListOf<HTMLElement>;
    slides.forEach((slide: HTMLElement, index: number) => {
      if (index === this.currentSlideIndex) {
        slide.classList.remove('hidden');
      } else {
        slide.classList.add('hidden');
      }
    });
  }

  autoNextSlide(){
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }


}