import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNotCompletedComponent } from './order-not-completed-component';

describe('OrderNotCompletedComponent', () => {
  let component: OrderNotCompletedComponent;
  let fixture: ComponentFixture<OrderNotCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderNotCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderNotCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
