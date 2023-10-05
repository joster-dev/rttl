import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'rttl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    'assets/photo_2023-09-17_14-00-32.jpg',
    'assets/photo_2023-09-18_23-06-17.jpg'
  ]
  imageIndex = 0;

  scroll(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
