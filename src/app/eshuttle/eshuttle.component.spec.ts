import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EshuttleComponent } from './eshuttle.component';

describe('EshuttleComponent', () => {
  let component: EshuttleComponent;
  let fixture: ComponentFixture<EshuttleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EshuttleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EshuttleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
