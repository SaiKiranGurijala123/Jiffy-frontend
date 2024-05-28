import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MerchantService } from 'src/app/services/merchant.service';
import { Dish } from '../model/dish';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.component.html',
  styleUrls: ['./add-dishes.component.css']
})
export class AddDishesComponent {


   constructor(private merchantService:MerchantService,private formBuilder:FormBuilder,private activatedRouter:ActivatedRoute,private router:Router,private snackBar:MatSnackBar){}

  merchantdetails:any;

  ngOnInit(){
    this.merchantService.getMerchant().subscribe(
      data=>{
        this.merchantdetails=data;
        console.log("restaurant details "+this.merchantdetails);




      }
    )
  }


  addDishForm:any = this.formBuilder.group({
    name: [null, [Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+') ]],
    cuisine: [null, [Validators.required]],
    price: [null, [Validators.required,Validators.pattern(/^[1-9]\d*$/)]],
    category: [null, [Validators.required]],
    imageUrl:['',],
    // discription: [null, [Validators.required]],
    type: [null, [Validators.required]],


  });
  get name() {
    return this.addDishForm.get('name');
  }
  get cuisine() {
    return this.addDishForm.get('cuisine');
  }
  get price() {
    return this.addDishForm.get('price');
  }
  get category() {
    return this.addDishForm.get('category');
   }
   get type() {
    return this.addDishForm.get('type');
  }


  url:string="../../../assets/BackgroundImages/image-not-found-scaled-1150x647.png"


  selectedFile:any=File;
  converter(file: any) {
    if(file.target.files){
      const reader= new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      };
    }
    // const fileData=file.target.files[0];
  }





  dish: any={};
  dishList:any={};
  addDish(dishObj:any){
    console.log("mini restaurant name"+dishObj);

    this.addDishForm.value.imageUrl=this.url;
    this.merchantService.addDishesToRestaurant(dishObj,this.addDishForm.value).subscribe({
      next:(data)=>{
        this.dishList=data;
        if(this.dishList.value===data.propertyIsEnumerable){
          alert("Dish already exists!")
        }else{
          this.snackBar.open('Dish Added', 'success', {​
            duration: 5000,​
             panelClass: ['mat-toolbar', 'mat-primary']

           });
          this.router.navigateByUrl("/get-restaurant")

        }
      },
      error:(erroe)=>{
        alert(erroe.error)
      }
    })

  }
  foodType = ["Veg","NonVeg"]

  cuisines = ["SouthIndian","NorthIndian","Punjabi","Bengali","Mughlai","Hyderabadi","Chinese","Continental","Western","French","Italian","Spanish"]


  categories=["Soups","Starters","Main Course", "Beverages","Desserts"]


}
