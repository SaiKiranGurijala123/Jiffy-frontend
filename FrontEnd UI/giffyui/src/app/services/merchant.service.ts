
import { Injectable } from '@angular/core';
import { Merchant } from '../model/merchant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  getMerchant(){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.get("http://localhost:9002/merchantZomato/merchant/getMerchant",requestOption)

  }
  
  updateMerchant(merchant:any){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.put("http://localhost:9002/merchantZomato/merchant/updateMerchant",merchant,requestOption);
  }

  deleteDishFromRestaurant(name:any,dishObj:any) {
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.delete("http://localhost:9002/merchantZomato/merchant/deleteDish/"+name+"/"+dishObj,requestOption)
  }
  updateDish(restaurantName:any,dish:any){

    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.put("http://localhost:9002/merchantZomato/merchant/updateDish/"+restaurantName,dish,requestOption)

  }

   constructor(private http:HttpClient) { }
  addMerchant(merchant: Merchant) {
    return this.http.post<Merchant>("http://localhost:9002/merchantZomato/registerMerchant", merchant);
  }




  addRestaurant(restaurant: Restaurant) {
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.post("http://localhost:9002/merchantZomato/merchant/addRestaurant",restaurant,requestOption)
  }

  addDishesToRestaurant(restaurant:any,dish:any) {
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.post("http://localhost:9002/merchantZomato/merchant/addDishes/"+restaurant,dish,requestOption)
  }

  deleteRestaurant(name:any) {
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.delete("http://localhost:9002/merchantZomato/merchant/"+name,requestOption)
  }

  getDishesFromRestaurant(name:any) {

    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.get("http://localhost:9002/merchantZomato/merchant/getAllDishesFromRestaurant"+name,requestOption)
  }


  getAllDishes(){

    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.get("http://localhost:9002/merchantZomato/getAllDishes",requestOption)

  }
  getDishByName(name:any){

    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.get("http://localhost:9002/merchantZomato/getdishes/"+name,requestOption)

  }

  removeToken(){
    localStorage.removeItem('token');
  }



  getAllMerchants(){
    let httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' +localStorage.getItem('token'),
    })
    let requestOption={headers:httpHeaders}
    return this.http.get("http://localhost:9002/merchantZomato/allMerchants");

  }

  setStatus(merchantId:any,restaurant:any){
    return this.http.put("http://localhost:9002/merchantZomato/setStatus/"+merchantId,restaurant);
  }


}
