import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'rttl-october-event',
  templateUrl: './october-event.component.html',
  styleUrls: ['./october-event.component.scss']
})
export class OctoberEventComponent implements AfterViewInit {
  @ViewChild('scriptHolder') element!: { nativeElement: HTMLDivElement };

  constructor(
    private renderer2: Renderer2,
  ) { }

  ngAfterViewInit(): void {
    const script = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/241425561489058';
    this.renderer2.appendChild(this.element.nativeElement, script);
  }
}
