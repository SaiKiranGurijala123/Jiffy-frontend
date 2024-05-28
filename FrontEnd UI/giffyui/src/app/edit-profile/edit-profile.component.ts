import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {


  user: any = {};

  updatedUser!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((data: any) => {
      this.user = data;
      this.initializeForm();
    });
  }

  initializeForm(): void {
    this.updatedUser = this.formBuilder.group({
      emailId: new FormControl(this.user.emailId, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      name: new FormControl(this.user.name, [Validators.minLength(3)]),
      phoneNo: new FormControl(this.user.phoneNo, [Validators.minLength(10), Validators.pattern("[0-9 ]{10}")]),
      city: new FormControl(this.user.city, [Validators.minLength(3)]),
      address: new FormControl(this.user.address, [Validators.minLength(3)]),
      imageUrl: new FormControl(this.user.imageUrl, []),
    });
  }

  converter(file: any): void {
    if (file.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = (event: any) => {
        this.updatedUser.patchValue({ imageUrl: event.target.result });
      };
    }
  }

  editUser(): void {
    const updatedValue = this.updatedUser.value;
    const updatedField: any = {};

    if (updatedValue.emailId || updatedValue.emailId === '') {
      updatedField['emailId'] = updatedValue.emailId || this.user.emailId;
    }

    if (updatedValue.name || updatedValue.name === '') {
      updatedField['name'] = updatedValue.name || this.user.name;
    }

    if (updatedValue.phoneNo || updatedValue.phoneNo === '') {
      updatedField['phoneNo'] = updatedValue.phoneNo || this.user.phoneNo;
    }

    if (updatedValue.city || updatedValue.city === '') {
      updatedField['city'] = updatedValue.city || this.user.city;
    }

    if (updatedValue.address || updatedValue.address === '') {
      updatedField['address'] = updatedValue.address || this.user.address;
    }

    if (updatedValue.imageUrl || updatedValue.imageUrl === '') {
      updatedField['imageUrl'] = updatedValue.imageUrl || this.user.imageUrl;
    }

    this.userService.updateUser(updatedField).subscribe((data) => {
      this.user = data;
    });

    this.router.navigateByUrl('/view-profile');
  }

  get emailId() {
    return this.updatedUser.get('emailId');
  }

  get city() {
    return this.updatedUser.get('city');
  }

  get name() {
    return this.updatedUser.get('name');
  }

  get phoneNo() {
    return this.updatedUser.get('phoneNo');
  }

  get address() {
    return this.updatedUser.get('address');
  }

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
}











