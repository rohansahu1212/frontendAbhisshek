import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCustomerDetailsComponent } from './insurance-customer-details.component';

describe('InsuranceCustomerDetailsComponent', () => {
  let component: InsuranceCustomerDetailsComponent;
  let fixture: ComponentFixture<InsuranceCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceCustomerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
