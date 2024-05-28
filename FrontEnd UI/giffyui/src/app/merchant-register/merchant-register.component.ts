import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Merchant } from '../model/merchant';
import { MerchantService } from '../services/merchant.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-merchant-register',
  templateUrl: './merchant-register.component.html',
  styleUrls: ['./merchant-register.component.css']
})
export class MerchantRegisterComponent {

  merchant: Merchant = {}
  register: FormGroup;

  constructor(private formBulder: FormBuilder, private merchantService: MerchantService, private router: Router, private _snackBar: MatSnackBar, private userService: UserService) {
    this.register = this.formBulder.group({
      emailId: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      merchantName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      )]),
    })
  }

  get emailId() {
    return this.register.get('emailId');
  }

  get password() {
    return this.register.get('password');
  }
  get merchantName() {
    return this.register.get('merchantName');
  }

  message: any;
  emailDetail: any = {
    recipient: '',
    msgBody: 'Congratulations on joining Jiffy Food Delivery! We are thrilled to have you on board.Get ready to showcase your offerings to our wide customer base and increase your visibility in the food delivery market.Our team is here to support you throughout the setup process. If you need any assistance, feel free to reach out.Welcome to Jiffy Food Delivery! ::',
    subject: 'Registration Confirmation '
  }


  onSubmit() {
    this.merchant = this.register.value;
    this.merchantService.addMerchant(this.merchant).subscribe({
      next: () => {

        this.router.navigateByUrl("/merchant-login");

      },
      error: (error) => {
        alert(error + "UserID already exist Please Login ");
        this.router.navigateByUrl("/merchant-login");
        this.register.reset();
      }

    });
    this._snackBar.open('Congrats, you have submitted the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']


    });

    this.emailDetail.recipient = this.register.value.emailId
    this.userService.sendMail(this.emailDetail).subscribe(data => {
      this.message = data
    }, error => {

    }
    )


  }




}


