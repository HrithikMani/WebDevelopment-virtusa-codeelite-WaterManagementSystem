import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
email:string="";
password:string="";
repassword:string="";
username:string="";
phone:string="";

errdisp:boolean=true;
errmsg:string="";

success:boolean=true;


  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }
signup(){
  if(this.email.length ==0){
    this.errmsg = "Please Enter Email";
    this.errdisp=false;
    return;
  }
  if(this.username.length ==0){
    this.errmsg = "Please Enter Username";
    this.errdisp=false;
    return;
  }
  if(this.phone.length ==0){
    this.errmsg = "Please enter Phone Number";
    this.errdisp=false;
    return;
  }
  if(this.phone.length < 10){
    this.errmsg = "Phone Number should be 10 digits";
    this.errdisp=false;
    return;
  }
  if(this.password.length ==0){
    this.errmsg = "Please Enter Password";
    this.errdisp=false;
    return;
  }
  if(this.repassword.length ==0){
    this.errmsg = "Please  Re Enter Password";
    this.errdisp=false;
    return;
  }
  if(this.password.length <6 ){
    this.errmsg = "Passwords Should be greater than 6";
    this.errdisp=false;
    return;
  }

  if(this.repassword != this.password ){
    this.errmsg = "Passwords Do not Match";
    this.errdisp=false;
    return;
  }
  this.errmsg = "Loading....";
    this.errdisp=true;
    this.success=false;

  var  data = {
    "email":this.email,
    "username":this.username,
    "password":this.password,
    "phone":this.phone,
   
  };
  
  this.service.signup(data).subscribe(data => {
    if(data !=null){
      this.errmsg = "User Added";
      this.errdisp=true;
      this.success=false;
    }
  },error => {
    console.log(error);
  })
}



}
