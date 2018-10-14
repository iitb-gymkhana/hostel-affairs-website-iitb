import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAccomodationComponent } from './guest-accomodation.component';

describe('GuestAccomodationComponent', () => {
  let component: GuestAccomodationComponent;
  let fixture: ComponentFixture<GuestAccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestAccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
