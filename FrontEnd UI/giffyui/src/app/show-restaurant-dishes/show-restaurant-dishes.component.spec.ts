import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRestaurantDishesComponent } from './show-restaurant-dishes.component';

describe('ShowRestaurantDishesComponent', () => {
  let component: ShowRestaurantDishesComponent;
  let fixture: ComponentFixture<ShowRestaurantDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRestaurantDishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRestaurantDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
