import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-update-model',
  templateUrl: './update-model.component.html',
  styleUrls: ['./update-model.component.css']
})
export class UpdateModelComponent implements OnInit {
email:string="";
password:string="";
phone:string="";
role:string = "";
username:string="";

errdisp:boolean=true;
errmsg:string="";

success:boolean=true;
  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }
  adduser(){
  
    if(this.email.length ==0){
      this.errmsg = "Please Enter Email";
      this.errdisp=false;
      return;
    }

    if(this.password.length ==0){
      this.errmsg = "Please Enter Password";
      this.errdisp=false;
      return;
    }
   
    if(this.password.length <6 ){
      this.errmsg = "Passwords Should be greater than 6";
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
 
    // if(this.role.length == 0){
    //   this.errmsg = "Please Select role";
    //   this.errdisp=false;
    //   return;
    // }

  
    var  data = {
      "email":this.email,
      "username":this.username,
      "password":this.password,
      "phone":this.phone,
      "role":[this.role]
    };
    alert(this.role);
    this.service.adduser(data).subscribe(data => {
  
      if(data != null){
        this.errmsg = "User Added";
        console.log(data);
      this.errdisp=true;
      this.success=false;
      }
    
    },error => {
      console.log(error);
    });
  }
}
