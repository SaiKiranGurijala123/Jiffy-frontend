import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from '../services/merchant.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  userData:any;
  showFiller = false;
  constructor(private merchantService:MerchantService,private router:Router,private userService:UserService){this.getUser();}
  getUser(){
    this.userService.getUser().subscribe(data=>{
      this.userData=data;
      console.log("user data "+data);
    })
  }
  logout(){
    this.merchantService.removeToken();
    this.router.navigateByUrl("");
  }
}
