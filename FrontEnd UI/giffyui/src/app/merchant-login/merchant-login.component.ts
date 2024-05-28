import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Route, Router } from '@angular/router';
import { Merchant } from '../model/merchant';
import { MerchantService } from '../services/merchant.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.css']
})
export class MerchantLoginComponent {

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router,private merchantService:MerchantService,private snackBar:MatSnackBar) {
  }



  

  merchant: any = {}

  logInForm = this.formBuilder.group({
    emailId: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),

  });

  get emailId() {
    return this.logInForm.get('emailId');
  }
  get password() {
    return this.logInForm.get('password');
  }

  logged: any;
  onSubmit() {
    this.merchant = this.logInForm.value;
    console.log(this.logInForm.value);
    this.loginService.loginCheck(this.merchant).subscribe({
      next: (data) => {
        console.log(data)
        this.logged = data;
        localStorage.setItem('token', this.logged.token);
        if (this.logged != null) {
          this.loginService.isLoggedIn = true;
          this.snackBar.open('LoggedIn !!', 'success', {​
            duration: 5000,​
             panelClass: ['mat-toolbar', 'mat-primary']​
           });
          this.router.navigateByUrl('/get-restaurant');
          // this.checkRestaurant();

        }
      },
      error: (error) => {
        alert("Please recheck password & email ID");
      }

    });
  }


  // checkRestaurant() {
  //   if (this.merchantData.restaurants === null || this.merchantData.restaurants === undefined) {
  //     this.router.navigateByUrl('/add-restaurant');
  //     alert("get into addrestaurant");
  //   } else {
  //     this.router.navigateByUrl('/get-restaurant');
  //   }
  // }


}
