import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { MerchantService } from '../services/merchant.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favorite-restaurant',
  templateUrl: './favorite-restaurant.component.html',
  styleUrls: ['./favorite-restaurant.component.css']
})
export class FavoriteRestaurantComponent {
  constructor(private userService:UserService,private merchantService:MerchantService,private snackBar:MatSnackBar){}

  userData:any;
  favResturantList:any=[]
  ngOnInit(){
    this.userService.getUser().subscribe(data=>{
      this.userData=data;
      this.favResturantList=this.userData.favouriteRestaurant
      console.log("user data "+this.favResturantList);
    })
  }
  logOut(){
    this.merchantService.removeToken();
  }

  deleteRestaurant(restaurantName:any){
    this.userService.deleteFavRestaurant(restaurantName).subscribe(
      data=>{
        alert("deleted")
        this.ngOnInit();
      }
    )

  }
  displayMessage(){
    if(this.favResturantList==null || this.favResturantList==""){
      return false;
    }else
    return true;
    }
}
