import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { GetMerchantRestuantsComponent } from './get-merchant-restuants/get-merchant-restuants.component';
import { AddDishesComponent } from './add-dishes/add-dishes.component';
import { ShowRestaurantDishesComponent } from './show-restaurant-dishes/show-restaurant-dishes.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DishMenuComponent } from './dish-menu/dish-menu.component';
import { LocationRestaurantComponent } from './location-restaurant/location-restaurant.component';
import { UserGuard } from './user.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BillAmountComponent } from './bill-amount/bill-amount.component';

import { AdminServiceComponent } from './admin-service/admin-service.component';
import { FavoriteRestaurantComponent } from './favorite-restaurant/favorite-restaurant.component';
import { FavoriteDishComponent } from './favorite-dish/favorite-dish.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MerchantProfileComponent } from './merchant-profile/merchant-profile.component';
import { UpdateMerchantComponent } from './update-merchant/update-merchant.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:LandingPageComponent},
  {path:'merchant-register',component:MerchantRegisterComponent},
  {path:'merchant-login',component:MerchantLoginComponent},
  {path:'user-register',component:UserRegisterComponent},
  {path:'user-logIn',component:UserLoginComponent},
  {path:'add-restaurant',component:AddRestaurantComponent},
  {path:'get-restaurant',component:GetMerchantRestuantsComponent},
  {path:'add-dishes',component:AddDishesComponent},
  {path:'show-dishes',component:ShowRestaurantDishesComponent},
  {path:'add-dishes/:name',component:AddDishesComponent},
  {path:'main-menu',component:MainMenuComponent},
  {path:'dish-menu/:name',component:DishMenuComponent},
  {path:'locationRestaurant',component:LocationRestaurantComponent},
  {path:'locationRestaurant/:location',component:LocationRestaurantComponent},
  {path:'bill-Amount',component:BillAmountComponent},
  {path: 'admin-service',component:AdminServiceComponent},
  {path: 'fav-restaurant',component:FavoriteRestaurantComponent},
  {path: 'fav-dish',component:FavoriteDishComponent},
  {path: 'order-History',component:OrderHistoryComponent},
  {path:'bill-Amount/:order',component:LocationRestaurantComponent},
  {path:'view-profile',component:ViewProfileComponent},
  {path:'edit-profile',component:EditProfileComponent},
  {path:'merchant-profile',component:MerchantProfileComponent},
  {path:'update-merchant',component:UpdateMerchantComponent},



  {path: '**',component:PageNotFoundComponent},













];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
