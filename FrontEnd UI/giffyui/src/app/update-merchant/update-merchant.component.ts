import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MerchantService } from '../services/merchant.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-merchant',
  templateUrl: './update-merchant.component.html',
  styleUrls: ['./update-merchant.component.css']
})
export class UpdateMerchantComponent {

  // merchant: any = {};

  // updatedMerchant!: FormGroup;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private userService: UserService,
  //   private merchantService : MerchantService,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {
  //   this.merchantService.getMerchant().subscribe((data: any) => {
  //     this.merchant = data;
  //     this.initializeForm();
  //   });
  // }

  // initializeForm(): void {
  //   this.updatedMerchant = this.formBuilder.group({
  //     emailId: new FormControl(this.merchant.emailId, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
  //     merchantName: new FormControl(this.merchant.merchantName, [Validators.minLength(3)]),
  //     location: new FormControl(this.merchant.location, [Validators.minLength(3)]),
  //   });
  // }

  // editMerchant(): void {
  //   const updatedValue = this.updatedMerchant.value;
  //   const updatedField: any = {};

  //   if (updatedValue.emailId || updatedValue.emailId === '') {
  //     updatedField['emailId'] = updatedValue.emailId || this.merchant.emailId;
  //   }

  //   if (updatedValue.merchantName || updatedValue.merchantName === '') {
  //     updatedField['merchantName'] = updatedValue.merchantName || this.merchant.merchantName;
  //   }

  //   if (updatedValue.location || updatedValue.location === '') {
  //     updatedField['location'] = updatedValue.location || this.merchant.location;
  //   }


  //   this.merchantService.updateMerchant(updatedField).subscribe((data) => {
  //     this.merchant = data;
  //   });

  //   this.router.navigateByUrl('/merchant-profile');
  // }

  // get emailId() {
  //   return this.updatedMerchant.get('emailId');
  // }


  // get merchantName() {
  //   return this.updatedMerchant.get('merchantName');
  // }

  // get location() {
  //   return this.updatedMerchant.get('location');
  // }

  // locations = [
  //   'Amritsar',
  //   'Bengaluru',
  //   'Bhopal',
  //   'Chennai',
  //   'Delhi',
  //   'Dehradun',
  //   'Goa',
  //   'Hyderabad',
  //   'Kolkata',
  //   'Lucknow',
  //   'Mumbai',
  //   'Pune',
  // ];

  merchant: any = {};
  updatedMerchant!: FormGroup;
  locations = [
    'Amritsar',
    'Bengaluru',
    'Bhopal',
    'Chennai',
    'Delhi',
    'Dehradun',
    'Goa',
    'Hyderabad',
    'Kolkata',
    'Lucknow',
    'Mumbai',
    'Pune',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private merchantService: MerchantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.merchantService.getMerchant().subscribe((data: any) => {
      this.merchant = data;
      this.initializeForm();
    });
  }

  initializeForm(): void {
    this.updatedMerchant = this.formBuilder.group({
      emailId: new FormControl(this.merchant.emailId, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      merchantName: new FormControl(this.merchant.merchantName, [Validators.minLength(3)]),
      location: new FormControl(this.merchant.location, [Validators.minLength(3)]),
    });
  }

  editMerchant(): void {
    const updatedValue = this.updatedMerchant.value;
    const updatedField: any = {};
    if (updatedValue.emailId || updatedValue.emailId === '') {
      updatedField['emailId'] = updatedValue.emailId || this.merchant.emailId;
    }
    if (updatedValue.merchantName || updatedValue.merchantName === '') {
      updatedField['merchantName'] = updatedValue.merchantName || this.merchant.merchantName;
    }
    if (updatedValue.location || updatedValue.location === '') {
      updatedField['location'] = updatedValue.location || this.merchant.location;
    }
    this.merchantService.updateMerchant(updatedField).subscribe((data) => {
      this.merchant = data;
      this.router.navigateByUrl('/merchant-profile');
    });
  }

  get emailId() {
    return this.updatedMerchant.get('emailId');
  }

  get merchantName() {
    return this.updatedMerchant.get('merchantName');
  }

  get location() {
    return this.updatedMerchant.get('location');
  }
}

