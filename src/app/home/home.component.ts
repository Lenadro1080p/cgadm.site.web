import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  slides = [
    { img: 'container' },
  ];
  slide = [
    { img: 'container' },
  ];
  slid = [
    { img: 'container' },
  ];
  slideConfig = { dots: true,
    arrows: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ], 
  };
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor() {}
  ngOnInit(): void {}
}
