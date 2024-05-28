import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from '../model/dish';
import { Merchant } from '../model/merchant';
import { Restaurant } from '../model/restaurant';
import { User } from '../model/user';
import { Login } from '../model/merchantLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
constructor(private http:HttpClient) {
}

 isLoggedIn:boolean=false;
 logged:Login={};
 userloginCheck(merchant:Merchant){
  return this.http.post('http://localhost:9002/userAuth/login', merchant)
}
  addUser(user:User) {
    return this.http.post<Merchant>("http://localhost:9002/userOrder/registerUser", user);
  }
  getUser(){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.get("http://localhost:9002/userOrder/user/getExistingUser",requestOption)
  }
  getrestaurants(){

    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.get("http://localhost:9002/merchantZomato/getAllRestaurants",requestOption)

  }
  getDish(){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.get<Dish>("user/getDishes",requestOption)
  }
  deleteRestaurant(name:string){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.delete("user/restaurants/"+name,requestOption)
  }
  deleteDish(name:string){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.delete("user/dishes/"+name,requestOption)
  }
  addToFavrite(restaurant:Restaurant){
    this.http.post
  }


  getRestaurantBasedOnLocation(restaurantLocation:any){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.get("http://localhost:9002/merchantZomato/getRestaurantBasedOnLocation/"+restaurantLocation)

  }



  addDishToFavotite(dish:any){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.post("http://localhost:9002/userOrder/user/addDishToFavourites",dish,requestOption);

  }

  getFovoriteDish(){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.get("http://localhost:9002/userOrder/user/getDishes",requestOption);

  }

  deleteFavDish(dishName:any){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.delete("http://localhost:9002/userOrder/user/deleteDishFromFavourites/"+dishName,requestOption);

  }






  addRestaurantToFev(restaurant:any){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.post("http://localhost:9002/userOrder/user/addRestaurantToFavourites",restaurant,requestOption);

  }

  deleteFavRestaurant(restaurantName:any){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.delete("http://localhost:9002/userOrder/user/deleteRestaurantFromFavourites/"+restaurantName,requestOption);

  }

  updateUser(user:any){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.put("http://localhost:9002/userOrder/user/updateUser",user,requestOption);
  }

  emptyList=[]
cancelOrder(){
  alert("afaf")
  this.selectedDish=this.emptyList;

}
dishNull(){
  this.selectedDish=[]
}

  selectedDish: { name: string, price: number, quantity: number,cuisine:string,imageUrl:string }[] = [];
  billAmount: number = 0;
  addDishTobill(dish: { name: string, price: number,cuisine:string,imageUrl:string }) {
    const existingDish = this.selectedDish.find(item => item.name === dish.name);
    if (existingDish) {
      existingDish.quantity++;
    } else {
      this.selectedDish.push({ ...dish, quantity: 1 });
    }
  this.calculateBillAmount()
  }
  calculateBillAmount() {
    this.billAmount = this.selectedDish.reduce((total, dish) => {
      return total + (dish.price * dish.quantity);
    }, 0);
  }

  sendMail( details:any){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.post("http://localhost:9002/mail/sendMail",details);
  }




addOrder(order:any,date:any,bill:any){
  let httpHeaders = new HttpHeaders({
    'authorization': 'Bearer ' +localStorage.getItem('token'),
  })
  let requestOption={headers:httpHeaders}
  console.log(order);

  return this.http.post("http://localhost:9002/userOrder/user/addOrder/"+date+"/"+bill ,order,requestOption);

}
getAllOrder(){
  let httpHeaders = new HttpHeaders({
    'authorization': 'Bearer ' +localStorage.getItem('token'),
  })
  let requestOption={headers:httpHeaders}

  return this.http.get("http://localhost:9002/userOrder/user/getAllOrders",requestOption);

}

deleteOrder(orderId:any){
  let httpHeaders = new HttpHeaders({
    'authorization': 'Bearer ' +localStorage.getItem('token'),
  })
  let requestOption={headers:httpHeaders}
  return this.http.delete("http://localhost:9002/userOrder/user/deleteOrder/"+orderId,requestOption);

}








}
