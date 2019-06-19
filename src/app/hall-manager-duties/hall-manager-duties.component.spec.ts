import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallManagerDutiesComponent } from './hall-manager-duties.component';

describe('HallManagerDutiesComponent', () => {
  let component: HallManagerDutiesComponent;
  let fixture: ComponentFixture<HallManagerDutiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallManagerDutiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallManagerDutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
