import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(private hc:HttpClient) { }

  baseurl = "http://localhost:9002/merchantZomato/getAllRestaurants" ;

  getAllRestaurants(restaurant : string):Observable<any>{
    return this.hc.post<any>(this.baseurl,restaurant)
  }
}
