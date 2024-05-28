import { Component } from '@angular/core';
import { MerchantService } from '../services/merchant.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
restaurant:any={}
restaurantList:any=[]
message:any;
emailDetail:any={
  recipient: '',
  msgBody: 'Your Restaurant Is Registerd With Us Please Wain For Conformation ::',
  subject: 'Restaurant Registrated '
}


constructor(private merchantService:MerchantService ,private formBuilder:FormBuilder,private router:Router,private userService:UserService ,private snackBar:MatSnackBar){



}


addRestaurantForm:any = this.formBuilder.group({
  name: [null, [Validators.required ]],
  location: [null, [Validators.required]],
  imageUrl: ['',],
  status: ['false', []],

  
});

get name() {
  return this.addRestaurantForm.get('name');
}
get location() {
  return this.addRestaurantForm.get('location');
}


url:string="../../../assets/BackgroundImages/image-not-found-scaled-1150x647.png"

selectedFile:any=File
converter(file: any){
  if(file.target.files){
    const reader=new FileReader();
    reader.readAsDataURL(file.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
  }
  //const filedata=file.target.files[0];


}


addrestaurantToList(){
  this.addRestaurantForm.value.imageUrl=this.url;
  this.merchantService.addRestaurant(this.addRestaurantForm.value).subscribe({
    next:(data)=>{
      this.restaurantList=data;
      if(this.restaurantList.value===data.propertyIsEnumerable){
        alert("Restaurant already exists");

      }else{
        this.snackBar.open('Restaurant added!!', 'success', {​
          duration: 5000,​
           panelClass: ['mat-toolbar', 'mat-primary']
           
           ​
         });
        this.router.navigateByUrl("/add-dishes")
      }
    },
    error:(error)=>{
      alert("unable to add Restaurant")
    }
  })

  this.emailDetail.recipient=this.merchantRestaurants.emailId
    this.userService.sendMail(this.emailDetail).subscribe(data=>{
    this.message=data
    },error=>{
      
    }
    )
}




merchantRestaurants:any;

  ngOnInit(){
    this.merchantService.getMerchant().subscribe(
      data=>{
        this.merchantRestaurants=data;
        

      }
    )
  }


    logOut(){
      this.merchantService.removeToken();
      this.router.navigateByUrl('/')
      

    }
    locations = [
      "Amritsar","Bengaluru","Bhopal","Chennai","Delhi","Dehradun","Goa","Hyderabad","Kolkata","Lucknow","Mumbai","Pune",
    ]
    
  

}

