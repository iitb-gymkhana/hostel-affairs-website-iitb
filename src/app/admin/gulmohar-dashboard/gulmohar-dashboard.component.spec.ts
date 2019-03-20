import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GulmoharDashboardComponent } from './gulmohar-dashboard.component';

describe('GulmoharDashboardComponent', () => {
  let component: GulmoharDashboardComponent;
  let fixture: ComponentFixture<GulmoharDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GulmoharDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GulmoharDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
