import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoberEventComponent } from './october-event.component';

describe('OctoberEventComponent', () => {
  let component: OctoberEventComponent;
  let fixture: ComponentFixture<OctoberEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OctoberEventComponent]
    });
    fixture = TestBed.createComponent(OctoberEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
