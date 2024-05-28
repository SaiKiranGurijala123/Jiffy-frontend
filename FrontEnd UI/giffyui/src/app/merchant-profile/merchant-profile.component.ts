import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from '../services/merchant.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-merchant-profile',
  templateUrl: './merchant-profile.component.html',
  styleUrls: ['./merchant-profile.component.css']
})
export class MerchantProfileComponent {

  merchant:any;
  showFiller = false;
  constructor(private merchantService:MerchantService,private router:Router,private userService:UserService){}
  ngOnInit(){
    this.merchantService.getMerchant().subscribe(data=>{
      this.merchant=data;
      console.log("merchant data "+data);
    })

  }
  logout(){
    this.merchantService.removeToken();
    this.router.navigateByUrl("");
  }

}
