import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaCouncilCardComponent } from './ha-council-card.component';

describe('HaCouncilCardComponent', () => {
  let component: HaCouncilCardComponent;
  let fixture: ComponentFixture<HaCouncilCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaCouncilCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaCouncilCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
