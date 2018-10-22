import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneCommitteeComponent } from './hygiene-committee.component';

describe('HygieneCommitteeComponent', () => {
  let component: HygieneCommitteeComponent;
  let fixture: ComponentFixture<HygieneCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HygieneCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HygieneCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
