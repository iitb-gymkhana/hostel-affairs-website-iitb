import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneCommitteeFoodOutletsComponent } from './hygiene-committee-food-outlets.component';

describe('HygieneCommitteeFoodOutletsComponent', () => {
  let component: HygieneCommitteeFoodOutletsComponent;
  let fixture: ComponentFixture<HygieneCommitteeFoodOutletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HygieneCommitteeFoodOutletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HygieneCommitteeFoodOutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
