import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserLogin } from '../model/userLogin';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private formBuilder: FormBuilder,private logInService:LoginService,private router:Router,private snackBar:MatSnackBar) {}
  userLogin:any={}


  userlogInForm=this.formBuilder.group({
    emailId: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),

    });

  get emailId(){
    return this.userlogInForm.get('emailId');
  }
  get password(){
    return this.userlogInForm.get('password');
  }

  logged:any;

  onSubmit(){
    if(this.userlogInForm.value.emailId==='jiffyfoodapp@gmail.com'){
      if(this.userlogInForm.value.password==='jiffyfood123'){
        this.router.navigateByUrl('/admin-service')

      }else{
        alert("Check Your Credentials");
      }

    }else{



    this.userLogin = this.userlogInForm.value;
    console.log(this.userlogInForm.value);
    this.logInService.loginCheck(this.userLogin).subscribe({
      next: (data) => {
        console.log(data)
        this.logged = data;
        localStorage.setItem('token', this.logged.token);
        if (this.logged != null) {
          this.logInService.isLoggedIn = true;
          this.snackBar.open('LoggedIn !!', 'success', {​
            duration: 5000,​
             panelClass: ['mat-toolbar', 'mat-primary']​
           });
          this.router.navigateByUrl('/main-menu');
        }
      },
      error: (error) => {
        alert("Please recheck Password or Email ID");
      }

    });
  }

  }



}
