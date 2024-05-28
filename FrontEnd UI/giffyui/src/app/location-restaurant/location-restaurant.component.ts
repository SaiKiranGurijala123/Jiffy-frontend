import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantServiceService } from '../services/restaurant-service.service';
import { UserService } from '../services/user.service';
import { MerchantService } from '../services/merchant.service';

@Component({
  selector: 'app-location-restaurant',
  templateUrl: './location-restaurant.component.html',
  styleUrls: ['./location-restaurant.component.css']
})
export class LocationRestaurantComponent  {

  chosenLocation : any| undefined;
  restaurantLocation : any;

  constructor(private us : UserService, private router : Router, private ac : ActivatedRoute ){}

  ngOnInit(){
    this.ac.paramMap.subscribe((parameter)=>{
      this. restaurantLocation = parameter.get('location')??0;

       this.us.getRestaurantBasedOnLocation(this.restaurantLocation).subscribe(data=>{this.chosenLocation=data});
     })
  }


  displayMessage(){

    if(this.chosenLocation==null || this.chosenLocation==""){
      return false;
    }else
    return true;
    }


}
