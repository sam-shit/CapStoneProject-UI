import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentListComponent } from './view-payment-list.component';

describe('ViewPaymentListComponent', () => {
  let component: ViewPaymentListComponent;
  let fixture: ComponentFixture<ViewPaymentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaymentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
