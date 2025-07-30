import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlacedStatus } from './order-placed-status';

describe('OrderPlacedStatus', () => {
  let component: OrderPlacedStatus;
  let fixture: ComponentFixture<OrderPlacedStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderPlacedStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPlacedStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
