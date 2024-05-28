import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private formBuilder: FormBuilder, private userService:UserService,private router:Router,private __snackBar:MatSnackBar) {
    

  }
 


  


  allRestaurantData:any;
  allRestaurants(){
  this.userService.getrestaurants().subscribe(data=>{
    this.allRestaurantData=data;

  })
 

}
locations = [
  "Amritsar",
  "Bengaluru",
  "Bhopal",
  "Chennai",
  "Delhi",
  "Dehradun",
  "Goa",
  "Hyderabad",
  "Kolkata",
  "Lucknow",
  "Mumbai",
  "Pune",
]


}
