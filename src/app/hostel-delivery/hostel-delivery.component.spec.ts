import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelDeliveryComponent } from './hostel-delivery.component';

describe('HostelDeliveryComponent', () => {
  let component: HostelDeliveryComponent;
  let fixture: ComponentFixture<HostelDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
