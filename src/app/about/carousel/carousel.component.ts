import { Component, Input } from '@angular/core';

interface caruselImages {
  url: string;
  photoName: string;
}
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() images: caruselImages[] = [];
  @Input() indicators = true;
  @Input() autoSlider = false;
  @Input() sliderInterval = 3000;

  selectedIndex: number = 1;
  ngOnInit(): void {
    if (this.autoSlider) {
      this.autoSliderImages();
    }
  }
  autoSliderImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.sliderInterval);
  }
  ngOnChanges() {
    console.log('Selected Index:', this.selectedIndex);
  }

  selectedImage(index: number) {
    this.selectedIndex = index;
  }
  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick() {
    if (this.selectedIndex == this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
