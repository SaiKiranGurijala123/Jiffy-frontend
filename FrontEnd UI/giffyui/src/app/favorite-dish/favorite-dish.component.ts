import { Component } from '@angular/core';
import { MerchantService } from '../services/merchant.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-favorite-dish',
  templateUrl: './favorite-dish.component.html',
  styleUrls: ['./favorite-dish.component.css']
})
export class FavoriteDishComponent {



  constructor(private userService:UserService,private merchantService:MerchantService){}

  userData:any;
  favouriteDishList:any=[]
  ngOnInit(){
    this.userService.getUser().subscribe(data=>{
      this.userData=data;
      this.favouriteDishList=this.userData.favouriteDish
      console.log("user data "+this.favouriteDishList);
    })
  }
  logOut(){
    this.merchantService.removeToken();
  }

  deleteDish(dishName:any){
    this.userService.deleteFavDish(dishName).subscribe(
      data=>{
        alert("deleted")
        this.ngOnInit();
      }
    )

  }

  favDish=true;

  displayMessage(){
    if(this.favouriteDishList==null || this.favouriteDishList==""){
      this.favDish=false;
      return false;
      
    }else
    this.favDish=true;

    return true;
    }

}
