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

    // Actualizar los indicadores después de que Angular haya completado la detección de cambios
    setTimeout(() => {
      this.updateIndicators();
    }, 0);


  }

  nextSlide() {
    clearInterval(this.intervalId);
    const nextIndex = (this.currentSlideIndex + 1) % this.slides.length;
    //this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length; //Modificar el número 3 por la cantidad de slides que tengas
    this.currentSlideIndex = nextIndex;
    this.updateIndicators();
    this.showCurrentSlide();

    // Remover la clase de animación de la imagen actual
    const currentSlide = document.querySelector('.carousel-slide:not(.hidden) img');
    if (currentSlide) {
      currentSlide.classList.remove('animate-fade-right');
      currentSlide.classList.remove('animate-fade-left');
    }

    // Agregar la clase de animación a la siguiente imagen
    const nextSlide = document.querySelector(`.carousel-slide:nth-child(${nextIndex + 1}) img`);
    if (nextSlide) {
      nextSlide.classList.add('animate-fade-right');
    }
  }

  prevSlide() {
    clearInterval(this.intervalId);
    const prevIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.currentSlideIndex = prevIndex;
    //this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.updateIndicators();
    this.showCurrentSlide();

    // Remover la clase de animación de la imagen actual
    const currentSlide = document.querySelector('.carousel-slide:not(.hidden) img');
    if (currentSlide) {
      currentSlide.classList.remove('animate-fade-right');
      currentSlide.classList.remove('animate-fade-left');
    }

    // Agregar la clase de animación a la siguiente imagen
    const prevSlide = document.querySelector(`.carousel-slide:nth-child(${prevIndex + 1}) img`);
    if (prevSlide) {
      prevSlide.classList.add('animate-fade-left');
    }
  }

  goToSlide(index: number) {
    clearTimeout(this.intervalId); // Cancela el temporizador actual
    this.currentSlideIndex = index;
    this.updateIndicators();
    this.showCurrentSlide();
    this.secondsRemaining = 8; // Reinicia el contador de segundos
    this.manualInteraction = true; // Establece que ha habido interacción manual
    setTimeout(() => {
      this.manualInteraction = false; // Restablece la interacción manual después de un breve retraso
      this.autoNextSlide(); // Reinicia el temporizador
    }, 100); // Se espera un breve retraso antes de reiniciar el temporizador
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
  private secondsRemaining = 8; // El intervalo se establece en 8 segundos  
  private manualInteraction = false;
  autoNextSlide() {
    const interval = () => {
      this.intervalId = setTimeout(() => {
        this.secondsRemaining--; // Reduce el número de segundos restantes
        if (this.secondsRemaining <= 0) {
          this.nextSlide(); // Cambia de diapositiva automáticamente
          this.secondsRemaining = 8; // Reinicia el contador de segundos
        }
        if (!this.manualInteraction) {
          interval(); // Llama recursivamente a la función para mantener el temporizador activo
        }
      }, 1000); // Se ejecuta cada segundo (1000 ms)
    };
    interval(); // Inicia la recursión
  }

  manualNextSlide() {
    clearTimeout(this.intervalId); // Cancela el temporizador actual
    this.nextSlide(); // Cambia de diapositiva manualmente
    this.secondsRemaining = 8; // Reinicia el contador de segundos
    this.manualInteraction = true; // Establece que ha habido interacción manual
    setTimeout(() => {
      this.manualInteraction = false; // Restablece la interacción manual después de un breve retraso
      this.autoNextSlide(); // Reinicia el temporizador
    }, 100); // Se espera un breve retraso antes de reiniciar el temporizador
  }

  manualPrevSlide() {
    clearTimeout(this.intervalId); // Cancela el temporizador actual
    this.prevSlide(); // Cambia de diapositiva manualmente
    this.secondsRemaining = 8; // Reinicia el contador de segundos
    this.manualInteraction = true; // Establece que ha habido interacción manual
    setTimeout(() => {
      this.manualInteraction = false; // Restablece la interacción manual después de un breve retraso
      this.autoNextSlide(); // Reinicia el temporizador
    }, 100); // Se espera un breve retraso antes de reiniciar el temporizador
  }
}