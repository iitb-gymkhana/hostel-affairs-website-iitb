import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaCouncilComponent } from './ha-council.component';

describe('HaCouncilComponent', () => {
  let component: HaCouncilComponent;
  let fixture: ComponentFixture<HaCouncilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaCouncilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
