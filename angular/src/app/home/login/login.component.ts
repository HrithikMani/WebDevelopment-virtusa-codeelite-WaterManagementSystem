import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string="";
password:string="";

errdisp:boolean=true;
errmsg:string="";

success:boolean=true;
res:any;
  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  
  login(){  
  if(this.email.length == 0){
    this.errdisp=false;
    this.errmsg = "Please Enter Email";
    return 
  }
  if(this.password.length == 0){
    this.errdisp=false;
    this.errmsg = "Please Enter Password";
    return ;
  }
  this.errdisp = true;
  this.errmsg="Loading..";
  this.success = false;
    this.service.login(this.email,this.password).subscribe(data => {
      
      if(data){
        this.errdisp = true;
        this.errmsg="Please wait as we redirect....";
        this.success = false;

        this.res=data;

        localStorage.setItem("userid",this.res.id);
        localStorage.setItem("roles",this.res.roles);
       localStorage.setItem("token",this.res.accessToken);


        if(this.res.roles == "ROLE_USER"){
            
          this.router.navigate(['/user/menu']);
        }else if(this.res.roles == "ROLE_EMPLOYEE"){
          this.router.navigate(['/employee/menu']);
        }else{
          this.router.navigate(['/admin/menu']);
        }

      }
    },error=>{
      console.log(error);
      this.errdisp = false;
      this.errmsg="Invalid Credentials";
      this.success = true;
    });
  }

}
