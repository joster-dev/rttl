import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'rttl-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
    public authService: AuthService,
  ) { }

  scroll(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onClickLogin(element: HTMLDialogElement) {
    this.authService.isAuthenticated = true;
    element.close();
  }
}
