import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GulmoharMenuComponent } from './gulmohar-menu.component';

describe('GulmoharMenuComponent', () => {
  let component: GulmoharMenuComponent;
  let fixture: ComponentFixture<GulmoharMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GulmoharMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GulmoharMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
