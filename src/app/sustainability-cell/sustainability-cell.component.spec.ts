import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityCellComponent } from './sustainability-cell.component';

describe('SustainabilityCellComponent', () => {
  let component: SustainabilityCellComponent;
  let fixture: ComponentFixture<SustainabilityCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustainabilityCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainabilityCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
