import { Component } from '@angular/core';
import { MerchantService } from '../services/merchant.service';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  searchText:string="";
  show=false;

  dishdata={name:'',cuisine:'',price:0,category:'',imageUrl:'',description:''}

  constructor(private userService:UserService,private merchantService:MerchantService,private router:Router,private snackBar:MatSnackBar) {
    // this.defaultLOcation();
    // this.allRestaurants();
    // this.getMerchantData();
    this.getUser();
  }



  userData:any;
  getUser(){
    this.userService.getUser().subscribe(data=>{
      this.userData=data;
      console.log("user data "+data);
      this.selectedRestaurant=this.userData.city;
      this.userService.getRestaurantBasedOnLocation(this.selectedRestaurant).subscribe(
        data=>{
          this.restaurantList=data;
        }
      )
    })
  }


allDishes:any;
getAllDishes(){
  this.merchantService.getAllDishes().subscribe(data=>{
    this.allDishes=data;

  })

}

allRestaurantData:any;

menu(){
  this.show=true
}


getDishes(restaurant:any){
  this.dishdata=restaurant;
}



// addRestaurant(){

// locations = [
//   "Amritsar","Bengaluru","Bhopal","Chennai","Delhi","Dehradun","Goa","Hyderabad","Kolkata","Lucknow","Mumbai","Pune",
// ]
restaurantList:any=[];

selectedRestaurant:any;


onRestaurantSelected(selectedRestaurantlocation:any){
  this.userService.getRestaurantBasedOnLocation(selectedRestaurantlocation).subscribe({
    next:(data)=>{
      this.restaurantList=data;
    },
    error:(error)=>{
      alert("we are not providing services in "+this.selectedRestaurant)
    }
  }

  )


}
// defaultLOcation(){
//   this.userService.getRestaurantBasedOnLocation(this.selectedRestaurant).subscribe(
//     data=>{
//       this.restaurantList=data;

//     }
//   )

// }


// window: any.addEventListener(‘resize’, function() {
//   var searchBar = document.getElementById(‘search-bar’);
//   if (window.innerWidth <= 400) {
//     searchBar.style.display = ‘none’;
//   } else {
//     searchBar.style.display = ‘block’;
//   }
// });

imgCollection: Array<object> = [
  {

    image: 'assets/sliderImages/Burger king - new logo.png',
    thumbImage: 'assets/sliderImages/Burger king - new logo.png',
    alt: 'Burgar King',
    title: 'Burgar King'
  }, {
    image: 'assets/sliderImages/McDonald’s paper straws revealed to be unrecyclable.png',
    thumbImage: 'assets/sliderImages/McDonald’s paper straws revealed to be unrecyclable.png',
    title: 'McDonald',
    alt: 'McDonald'
  }, {
    image: 'assets/sliderImages/download (1).jpeg',
    thumbImage: 'assets/sliderImages/download (1).jpeg',
    title: 'Dominos',
    alt: 'Dominos '
  }, {
    image: 'assets/sliderImages/Star bucks.jpeg',
    thumbImage: 'assets/sliderImages/Star bucks.jpeg',
    title: 'Star bucks',
    alt: 'Star bucks'
  },
  {
    image: 'assets/sliderImages/SUBWAY UI_UX Design.png',
    thumbImage: 'assets/sliderImages/SUBWAY UI_UX Design.png',
    title: 'SUBWAY',
    alt: 'SUBWAY'
  },

  {
    image: 'assets/sliderImages/DUNKIN DONUTS.jpeg',
    thumbImage: 'assets/sliderImages/DUNKIN DONUTS.jpeg',
    title: 'DUNKIN DONUTS',
    alt: 'DUNKIN DONUTS'
  },
  {
    image: 'assets/sliderImages/KFC ready to serve up South Africa’s most loved fried chicken.png',
    thumbImage: 'assets/sliderImages/KFC ready to serve up South Africa’s most loved fried chicken.png',
    title: 'KFC',
    alt: 'KFC'
  },
  {
    image: 'assets/sliderImages/Food Stickers for Sale.jpeg',
    thumbImage: 'assets/sliderImages/Food Stickers for Sale.jpeg',
    title: 'TACO BELL',
    alt: 'TACO BELL '
  }
];


fevResturant:any=[];

addrestaurantToFev(fevrestaurant:any){

  this.userService.addRestaurantToFev(fevrestaurant).subscribe(
    data=>{
      this.fevResturant=data;
      this.snackBar.open('Restaurant Added To Favorite', 'success', {​
        duration: 3000,​
         panelClass: ['mat-toolbar', 'mat-primary']

       });

    }
  )

}

logOut(){
  this.merchantService.removeToken()
  this.router.navigateByUrl("")

}












}
