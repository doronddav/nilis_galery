import { Component, Input } from '@angular/core';
interface Product {
  name: string;
  price: string;
  photoUrl: string;
}
@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() selectedProduct: Product = { name: '', price: '', photoUrl: '' };
  @Input() productSelected: boolean = false;
  onProductSelectedChange(productSelected: boolean) {
    this.productSelected = productSelected;
  }
  @Input() allProducts: Product[] = [
    {
      name: 'ספינה בים סוער',
      price: '500',
      photoUrl: '../../assets/allPaintings/bout_in_storm.jpeg',
    },
    {
      name: 'steen on a canal',
      price: '500',
      photoUrl: '../../assets/allPaintings/canal_street.jpeg',
    },
    {
      name: "צ'יטה",
      price: '500',
      photoUrl: '../../assets/allPaintings/cheetah.jpeg',
    },
    {
      name: 'ילדה וחתול',
      price: '500',
      photoUrl: '../../assets/allPaintings/girl_with_cat.jpeg',
    },
    {
      name: 'בחורה',
      price: '500',
      photoUrl: '../../assets/allPaintings/half_eye_lady.jpeg',
    },
    {
      name: 'סוסים',
      price: '500',
      photoUrl: '../../assets/allPaintings/hourses.jpeg',
    },
    {
      name: 'בית על הים',
      price: '500',
      photoUrl: '../../assets/allPaintings/hourses.jpeg',
    },
    {
      name: 'חלון ירושלמי',
      price: '500',
      photoUrl: '../../assets/allPaintings/jerusalem_window.jpeg',
    },
    {
      name: ' מקטרת',
      price: '500',
      photoUrl: '../../assets/allPaintings/man_with_pipe.jpeg',
    },
    {
      name: 'אמא ובת',
      price: '',
      photoUrl: '../../assets/allPaintings/mother_duter.jpeg',
    },
    {
      name: 'כנרית',
      price: '',
      photoUrl: '../../assets/allPaintings/violinist.jpeg',
    },
  ];
}
