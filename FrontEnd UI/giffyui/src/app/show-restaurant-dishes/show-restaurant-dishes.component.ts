import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MerchantService } from '../services/merchant.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-restaurant-dishes',
  templateUrl: './show-restaurant-dishes.component.html',
  styleUrls: ['./show-restaurant-dishes.component.css']
})
export class ShowRestaurantDishesComponent {

  show=false;
  dishToUpdate={name:'',cuisine:'',price:0,category:'',imageUrl:'',description:''}

  constructor(private merchantService:MerchantService,private us:UserService,private snackBar:MatSnackBar,private router:Router){}
  userData:any;
  merchantdetails:any;

  ngOnInit(){
    this.merchantService.getMerchant().subscribe(
      data=>{
        console.log("mercahntData"+data);
        this.merchantdetails=data;

      }
    )
    
  }

  getdishesFromRestaurant(){

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




}
