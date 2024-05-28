import { Injectable } from '@angular/core';
import { Merchant } from '../model/merchant';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../model/merchantLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  isLoggedIn:boolean=false;
  logged:Login={};
  loginCheck(merchant:Merchant){
    return this.httpClient.post('http://localhost:9002/userAuth/login', merchant)
  }
  
}
