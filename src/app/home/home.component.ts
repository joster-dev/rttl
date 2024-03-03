import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'rttl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
    'assets/photo_2023-09-17_14-00-32.jpg',
    'assets/photo_2023-09-18_23-06-17.jpg',
    'assets/photo_2023-09-29_17-22-21.jpg',
    'assets/photo_2023-09-29_17-34-30.jpg',
    'assets/photo_2023-09-29_18-13-14.jpg',
    'assets/photo_2023-09-29_18-13-54.jpg',
  ];
  imageIndex = 0;
  imageInterval?: number;

  ngOnInit() {
    this.startImageInterval();
  }

  open(element: HTMLDialogElement) {
    window.clearInterval(this.imageInterval);
    element.showModal();
  }

  close(element: HTMLDialogElement) {
    this.startImageInterval();
    element.close();
  }

  changeImageIndex(index: number) {
    if (index < 0) {
      this.imageIndex = this.images.length - 1;
      return;
    }
    this.imageIndex = index % this.images.length;
  }

  private startImageInterval() {
    this.imageInterval = window.setInterval(() => {
      this.changeImageIndex(this.imageIndex + 1);
    }, 10000);
  }
}
