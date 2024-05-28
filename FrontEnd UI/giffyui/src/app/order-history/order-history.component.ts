import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {

  constructor(private userService:UserService){


  }
  user:any;


  allOrder:any=[];
  getArray:any=[]

  ngOnInit(){
    this.userService.getAllOrder().subscribe(
      data=>{
    this.getArray=data
        this.allOrder=this.getArray.reverse();


      })
      this.userService.getUser().subscribe(
        data=>{
          this.user=data;
        }
      )
  }

  deleteOrder(orderId:any){
    this.userService.deleteOrder(orderId).subscribe()
    alert("deleted");
    this.ngOnInit();

  }
  displayMessage(){
    if(this.allOrder==null || this.allOrder==""){
      return false;
    }else
    return true;
    }





}
