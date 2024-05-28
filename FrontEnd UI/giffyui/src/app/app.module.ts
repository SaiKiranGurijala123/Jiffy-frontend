import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, NgSelectOption, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { GetMerchantRestuantsComponent } from './get-merchant-restuants/get-merchant-restuants.component';
import { AddDishesComponent } from './add-dishes/add-dishes.component';
import { ShowRestaurantDishesComponent } from './show-restaurant-dishes/show-restaurant-dishes.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DishMenuComponent } from './dish-menu/dish-menu.component';
import { LocationRestaurantComponent } from './location-restaurant/location-restaurant.component';

import { NextDirective } from './next.directive';
import { PreviousDirective } from './previous.directive';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatMenuModule} from '@angular/material/menu';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BillAmountComponent } from './bill-amount/bill-amount.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminServiceComponent } from './admin-service/admin-service.component';
import {MatTableModule} from '@angular/material/table';
import { FavoriteRestaurantComponent } from './favorite-restaurant/favorite-restaurant.component';
import { FavoriteDishComponent } from './favorite-dish/favorite-dish.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MerchantProfileComponent } from './merchant-profile/merchant-profile.component';
import { UpdateMerchantComponent } from './update-merchant/update-merchant.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    MerchantRegisterComponent,
    MerchantLoginComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AddRestaurantComponent,
    GetMerchantRestuantsComponent,
    AddDishesComponent,
    ShowRestaurantDishesComponent,
    MainMenuComponent,
    DishMenuComponent,
    LocationRestaurantComponent,
    NextDirective,
    PreviousDirective,
    PageNotFoundComponent,
    BillAmountComponent,
    AdminServiceComponent,
    FavoriteRestaurantComponent,
    FavoriteDishComponent,
    OrderHistoryComponent,
    LandingPageComponent,
    MainHeaderComponent,
    ViewProfileComponent,
    EditProfileComponent,
    MerchantProfileComponent,
    UpdateMerchantComponent,
    FooterComponent,
    



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    HttpClientModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    LayoutModule,
    MatListModule,
    NgImageSliderModule,
    Ng2SearchPipeModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
