import { Component } from '@angular/core';
import { MerchantService } from '../services/merchant.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-merchant-restuants',
  templateUrl: './get-merchant-restuants.component.html',
  styleUrls: ['./get-merchant-restuants.component.css']
})
export class GetMerchantRestuantsComponent {


  show=false;
  display(){
    this.show=true;

  }
  dishToUpdate={name:'',cuisine:'',price:0,category:'',imageUrl:'',description:'',type:''}
  constructor(private merchantService:MerchantService,private snackBar:MatSnackBar,private router:Router){
  }

  merchantdetails:any;

  ngOnInit(){
    this.merchantService.getMerchant().subscribe(
      data=>{
        this.merchantdetails=data;
        if(this.merchantdetails.restaurants===null){
          this.router.navigateByUrl("/add-restaurant")
        }

      }
    )
  }

  deleteRestaurant(name:any){
    this.merchantService.deleteRestaurant(name).subscribe(
      data=>{

      })
      this.snackBar.open('deleted','success',{
        duration:5000,
        panelClass:['mat-toolbar','mat-primary']
      })
  }

  logOut(){
    this.merchantService.removeToken()
    this.router.navigateByUrl("/")
  }
  

  deleteDishFromResstaurant(name:any,dishObj:any){
    this.merchantService.deleteDishFromRestaurant(name,dishObj).subscribe(data =>{
        this.merchantService.getMerchant().subscribe(
          data =>{
            this.merchantdetails=data;
          }
        )
      })

      this.snackBar.open('deleted ','success',{
        duration : 5000,panelClass:['mat-toobal','mat-primary']
      });


  }

  
  edit(dish:any){
    this.show=true
    this.dishToUpdate=dish;

  }

  updateDish(restaurantName:any){
    
    this.merchantService.updateDish(restaurantName,this.dishToUpdate,).subscribe(
      (resp)=>{
        console.log(resp);
        this.snackBar.open('Updated ','success',{
          duration : 5000,panelClass:['mat-toobal','mat-primary']
        });
        // alert("Updated")
        setTimeout(() => {
          this.show=false
          
        }, 1000);
      

        

      }
    )
  }

  closePopUp(){
    this.show=false;
  }
  closeOverlay(event:any){
    if(event.target.classList.contains('overlay')){
      this.show=false;

    }

  }
  // categories=["Soups","Starters","Main Course", "Beverages","Desserts"]

 
}
