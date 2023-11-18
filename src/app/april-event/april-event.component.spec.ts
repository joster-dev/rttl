import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprilEventComponent } from './april-event.component';

describe('AprilEventComponent', () => {
  let component: AprilEventComponent;
  let fixture: ComponentFixture<AprilEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprilEventComponent]
    });
    fixture = TestBed.createComponent(AprilEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
