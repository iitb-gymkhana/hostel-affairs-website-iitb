import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniAffairsComponent } from './alumni-affairs.component';

describe('AlumniAffairsComponent', () => {
  let component: AlumniAffairsComponent;
  let fixture: ComponentFixture<AlumniAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
