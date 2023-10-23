import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule],
  exports: [CarouselComponent],
})
export class CarouselModule {
  // @Input() images = [];
  @Input() autoSlider: boolean = false;
  selectedIndex: number = 1;
  @Input() slidesPohtos = [
    { url: '../assets/paintings/coverEye.jpeg', photoName: 'coverEye' },
    { url: '../assets/paintings/lady.jpeg', photoName: 'lady' },
    {
      url: '../assets/paintings/mountainsView.jpeg',
      photoName: 'mountainsView',
    },
    { url: '../assets/paintings/sailsMan.jpeg', photoName: 'sailsMan' },
    { url: '../assets/paintings/ship.jpeg', photoName: 'ship' },
  ];
}
