import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzarksComponent } from './ozarks.component';

describe('OzarksComponent', () => {
  let component: OzarksComponent;
  let fixture: ComponentFixture<OzarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OzarksComponent]
    });
    fixture = TestBed.createComponent(OzarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
