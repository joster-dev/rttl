import { Component, Input } from '@angular/core';

@Component({
  selector: 'rttl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() isHome = true;
}
