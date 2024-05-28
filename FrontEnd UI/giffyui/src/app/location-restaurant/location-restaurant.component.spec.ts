import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationRestaurantComponent } from './location-restaurant.component';

describe('LocationRestaurantComponent', () => {
  let component: LocationRestaurantComponent;
  let fixture: ComponentFixture<LocationRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
