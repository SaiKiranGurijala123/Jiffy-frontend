import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from '../services/merchant.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-service',
  templateUrl: './admin-service.component.html',
  styleUrls: ['./admin-service.component.css']
})
export class AdminServiceComponent {
  constructor(private mercahntService:MerchantService,private userService:UserService,private router:Router){}
  allMerchantsData:any=[]
  statusCode:boolean=false;


  message:any;
emailApproval:any={
  recipient: '',
  msgBody: "Congratulations on joining Jiffy Food Delivery! We are thrilled to have you on board.Get ready to showcase your offerings to our wide customer base and increase your visibility in the food delivery market.Our team is here to support you throughout the setup process. If you need any assistance, feel free to reach out.Welcome to Jiffy Food Delivery!",
  subject: 'Registration Confirmation '
}
emailreject:any={
  recipient: '',
  msgBody: 'We regret to inform you that your restaurant registration with Jiffy Food Delivery has been rejected.We appreciate your interest in joining our platform, but after careful consideration, we have determined that your restaurant does not meet our current requirements.Thank you for your understanding, and we wish you the best in your future endeavors.If you have any questions or would like further clarification, please feel free to reach out to us. ::',
  subject: 'Registration Confirmation '
}



  ngOnInit(){

    this.mercahntService.getAllMerchants().subscribe(
      data=>{
        this.allMerchantsData=data;


      }

    )



  }
  restaurantAproval(merchantId:any,restaurant:any){
    this.mercahntService.setStatus(merchantId,restaurant).subscribe()


   this.emailApproval.recipient=merchantId
    this.userService.sendMail(this.emailApproval).subscribe(data=>{
    this.message=data
    }
    )
    this.ngOnInit();
}




  restaurantReject(merchantId:any,restaurant:any){
    this.mercahntService.setStatus(merchantId,restaurant).subscribe()
   this.ngOnInit();

   this.emailreject.recipient=merchantId
    this.userService.sendMail(this.emailreject).subscribe(data=>{
    this.message=data
    }
    )

    this.ngOnInit();
    this.ngOnInit();


  }
  logOut(){
    this.mercahntService.removeToken();
    this.router.navigateByUrl("")
  }

}
