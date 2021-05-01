import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-water',
  templateUrl: './add-water.component.html',
  styleUrls: ['./add-water.component.css']
})
export class AddWaterComponent implements OnInit {

  errdisp:boolean=true;
  errmsg:string="";
  
  success:boolean=true;
  res:any;

  city:string="";

  area:string="";
  duration:string="";
  pressure:string="";
  desc:string="";

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  }

  addWater(){
   if(this.city.length == 0){
     this.errdisp =false;
    this.errmsg = "Please Select City";
    this.success =true; 
    return;
   } 

   if(this.area.length == 0){
    this.errdisp =false;
   this.errmsg = "Please Enter Area";
   this.success =true; 
   return;
  } 

  if(this.duration.length == 0){
    this.errdisp =false;
   this.errmsg = "Please Enter Duration";
   this.success =true; 
   return;
  } 

  if(this.pressure.length == 0){
    this.errdisp =false;
   this.errmsg = "Please Enter Pressure";
   this.success =true; 
   return;
  } 

  if(this.desc.length == 0){
    this.errdisp =false;
   this.errmsg = "Please Enter Description";
   this.success =true; 
   return;
  } 
  var data = {
    "area":this.area,
    "city":this.city,
    "pressure":this.pressure,
    "description":this.desc,
    "duration":Number(this.duration),
     "user":{
         "id":Number(localStorage.getItem("userid"))
     }
  
 };
 this.errdisp =true;
   this.errmsg = "Loading...";
   this.success =false; 

this.service.addwater(data).subscribe(data => {
  if(data == "water added"){
    this.errdisp =true;
   this.errmsg = "Water model Successfully added";
   this.success =false; 
   return;
  }
},error=>{
  this.errdisp =false;
   this.errmsg = "Water model could not be added";
   this.success =true; 
   return;
})
  
  }
}
