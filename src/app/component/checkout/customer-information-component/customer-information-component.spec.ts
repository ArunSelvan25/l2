import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInformationComponent } from './customer-information-component';

describe('CustomerInformationComponent', () => {
  let component: CustomerInformationComponent;
  let fixture: ComponentFixture<CustomerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
