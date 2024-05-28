import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { NavigationEnd, Router } from '@angular/router';
import { MerchantService } from '../services/merchant.service';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
hideButton= false;
LogInButton=false;
userButton=false;
mercahntButton=false
exitButton = false;
userHome=false;
merchantHome=false
LogHome=false
commanHome=false



user:any
  constructor(private breakpointObserver: BreakpointObserver,private loginService:LoginService,private router:Router,private merchantService:MerchantService,private userService:UserService,privatesnackBar:MatSnackBar) {
    
   router.events.subscribe(
    (data)=>{if(data instanceof NavigationEnd)
      if(data.url=='/'|| data.url=='/home'||data.url=='/user-logIn'|| data.url=='/user-register'|| data.url=='/merchant-register'||data.url=='/merchant-login' ){
        this.LogInButton=true;
        this.userButton=false;
        this.mercahntButton=false
        this.exitButton=false
        this.userHome=false
        this.merchantHome=false
        this.LogHome=true
        this.commanHome=false
        
      }
      else if(data.url=='/get-restaurant'||data.url=='/add-dishes'||data.url=='/merchant-profile' ||data.url=='/update-merchant' ){
        this.mercahntButton=true
        this.LogInButton=false;
        this.userButton=false;
        this.exitButton=false
        this.userHome=false
        this.merchantHome=true
        this.LogHome=false
        this.commanHome=false


      }
      else if(data.url=='/admin-service'||data.url=='/add-restaurant'){
        this.LogInButton=false;
        this.userButton=false;
        this.mercahntButton=false
        this.exitButton=true
        this.userHome=false
        this.merchantHome=false
        this.LogHome=false
        this.commanHome=true

      }
      else if(data.url.startsWith('/locationRestaurant/'))
      {
        this.LogInButton=true;
        this.userButton=false;
        this.mercahntButton=false
        this.exitButton=false
        this.userHome=true
        this.merchantHome=false
        this.LogHome=false
        this.commanHome=false
      }
      else{
        this.LogInButton=false;
        this.userButton=true;
        this.mercahntButton=false
        this.exitButton=false
        this.userHome=true
        this.merchantHome=false
        this.LogHome=false
        this.commanHome=false
        


      }

    }
   )

    this.hideButton=this.loginService.isLoggedIn
    this.userService.getUser().subscribe(data=>{this.user=data})

  }

  

   




  // merchantData:any;

  // ngOnInit(){
  //   this.merchantService.getMerchant().subscribe(
  //     data=>{
  //       this.merchantData=data;
  //       if(this.merchantData.restaurants===null){
  //         this.router.navigateByUrl("/add-restaurant")

  //       }

  //     }
  //   )
  // }

  // deleteRestaurant(name:any){
  //   this.merchantService.deleteRestaurant(name).subscribe(
  //     data=>{

  //     })
  //     this.snackBar.open('deleted','success',{
  //       duration:5000,
  //       panelClass:['mat-toolbar','mat-primary']
  //     })
  // }




logout(){
this.merchantService.removeToken()


this.router.navigateByUrl('/home')
}

}
