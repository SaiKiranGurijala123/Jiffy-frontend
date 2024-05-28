import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMerchantRestuantsComponent } from './get-merchant-restuants.component';

describe('GetMerchantRestuantsComponent', () => {
  let component: GetMerchantRestuantsComponent;
  let fixture: ComponentFixture<GetMerchantRestuantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMerchantRestuantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMerchantRestuantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
