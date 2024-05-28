import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteDishComponent } from './favorite-dish.component';

describe('FavoriteDishComponent', () => {
  let component: FavoriteDishComponent;
  let fixture: ComponentFixture<FavoriteDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
