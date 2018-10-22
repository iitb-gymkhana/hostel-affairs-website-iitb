import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityGuidlinesComponent } from './security-guidlines.component';

describe('SecurityGuidlinesComponent', () => {
  let component: SecurityGuidlinesComponent;
  let fixture: ComponentFixture<SecurityGuidlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityGuidlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityGuidlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
