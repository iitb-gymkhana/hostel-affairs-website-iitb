import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelCardComponent } from './hostel-card.component';

describe('HostelCardComponent', () => {
  let component: HostelCardComponent;
  let fixture: ComponentFixture<HostelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
