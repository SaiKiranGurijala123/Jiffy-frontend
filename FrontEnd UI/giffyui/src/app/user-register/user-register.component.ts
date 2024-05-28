import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',  
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private formBuilder: FormBuilder, private userService:UserService,private router:Router,private __snackBar:MatSnackBar) {}

  user:any={};

  userRegister=this.formBuilder.group({
    emailId: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
     name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      phoneNo:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern("[0-9 ]{10}")]),
      address:new FormControl('',[Validators.required,Validators.minLength(3)]),
      city:new FormControl('',[Validators.required,Validators.minLength(3)]),
      imageUrl:new FormControl('',[]),




    });

  get emailId(){
    return this.userRegister.get('emailId');
  }
   get name(){
     return this.userRegister.get('name');
   }
  get password(){
    return this.userRegister.get('password');
  }
  get phoneNo(){
    return this.userRegister.get('phoneNo');
  }

  get address(){
    return this.userRegister.get('address');
  }
  get city(){
    return this.userRegister.get('city');
  }
  get imageUrl(){
    return this.userRegister.get('imageUrl');
  }

  url:string="../../../assets/img/fotor_2023-6-5_9_58_36(1).jpg"

  converter(event:any){
    if(event.target.files){
      const reader= new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(file:any)=>{
        this.url=file.target.result
      };

    }
    const fileData=event.target.files[0];

  }
  message:any;
emailDetail:any={
  recipient: '',
  msgBody: 'Welcome to Jiffy Food Delivery! Get ready for a delightful culinary experience.Browse, order, and indulge in a wide variety of delicious dishes from our top-notch restaurants, all from the comfort of your home.If you have any questions or need assistance, our support team is here to help.Enjoy your journey with Jiffy Food Delivery! ::',
  subject: 'Registration Confirmation '
}


  onSubmit(){
    this.user=this.userRegister.value.imageUrl=this.url;

    this.user=this.userRegister.value;
     this.userService.addUser(this.user).subscribe({
       next:()=>{
         this.router.navigateByUrl("/user-logIn");

       },
       error:(error)=>{
         alert(error+"UserID already exist Please Login ");
         this.router.navigateByUrl("/user-logIn");
         this.userRegister.reset();
       }

     });
     this.__snackBar.open('Congrats, you have submitted the form!!', 'success', {​
       duration: 5000,​
        panelClass: ['mat-toolbar', 'mat-primary']​
      });


      this.emailDetail.recipient=this.userRegister.value.emailId
this.userService.sendMail(this.emailDetail).subscribe(data=>{
  this.message=data
},error=>alert(error)
)

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
