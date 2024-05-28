import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../model/restaurant';
import { MerchantService } from '../services/merchant.service';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dish-menu',
  templateUrl: './dish-menu.component.html',
  styleUrls: ['./dish-menu.component.css']
})
export class DishMenuComponent {
  cartButton=false
  show=false;
  searchText:any;
  selectedDishes: { name: string, price: number, quantity: number }[] = [];
  billAmount: number = 0;

  restaurant:any;
  constructor(private activeRoute:ActivatedRoute ,merchantService:MerchantService, location:Location ,private userService:UserService,private snackBar:MatSnackBar){
    this.restaurant = location.getState();
    // this.getFev()
  }
  addDishToCart(dish: { name: string, price: number }) {
    this.show=true

    const existingDish = this.selectedDishes.find(item => item.name === dish.name);

    if (existingDish) {

      existingDish.quantity++;
    } else {

      this.selectedDishes.push({ ...dish, quantity: 1 });
    }


    this.calculateBillAmount();
  }
  calculateBillAmount() {
    this.billAmount = this.selectedDishes.reduce((total, dish) => {
      return total + (dish.price * dish.quantity);
    }, 0);
  }


  sort(sort:any){
    if(sort==('asc')){
      this.restaurant.dishes.sort(
        (p1:any, p2:any)=>{
          return p1.price >p2.price ? 1 : -1;
        }
      )
    }
    else{
      this.restaurant.dishes.sort(
        (p1:any, p2:any)=>{
          return p1.price >p2.price ? -1 : 1;
        }
      )

    }

  }

  addDishtoFav(dish:any){
    alert("dish added")
    this.userService.addDishToFavotite(dish).subscribe(
      data=>{

      })

  }
  favDishes:any=[];

  getFev(){

    this.userService.getFovoriteDish().subscribe(
      data=>{
        this.favDishes=data
        alert(data)

      }
    )
  }


  addToMethod(dish:any){
    this.userService.addDishTobill(dish)
    this.cartButton=true;

    this.snackBar.open('Dish added To Cart!!', 'success', {​
      duration: 1000,​
       panelClass: ['mat-toolbar', 'mat-primary']

       ​
     });

  }

filterdDishes:any={};
dishFilter:boolean=false

  sortType(type:string) {
    if(type==='Veg'){
      this.filterdDishes=this.restaurant.dishes.filter((dish:any)=>dish.type==='Veg')
      this.dishFilter=true
    }
    else if(type==='NonVeg'){
      this.filterdDishes=this.restaurant.dishes.filter((dish:any)=>dish.type==='NonVeg')
      this.dishFilter=true
    }
    else{
      this.dishFilter=false
    }
  }

  showMenu=false

  getMenu(){
    this.showMenu=true
  }
  closePopUp(){
    this.showMenu=false
  }
  closeOverlay(event:any){
    if(event.target.classList.contains('menuCard')){
      this.showMenu=false
    }
  }

  userData:any;
  ngOnInit(){
    this.userService.getUser().subscribe(data=>{
      this.userData=data;
      console.log("user data "+data);
    })
  }

}


