import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  slidesPohtos = [
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
