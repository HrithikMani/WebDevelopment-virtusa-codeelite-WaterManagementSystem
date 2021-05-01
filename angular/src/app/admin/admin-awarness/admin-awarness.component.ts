import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-awarness',
  templateUrl: './admin-awarness.component.html',
  styleUrls: ['./admin-awarness.component.css']
})
export class AdminAwarnessComponent implements OnInit {
  description:string="";
  title:string="";
  image:string="";

  res:any;
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getAllAwarness();
  }
  addAwarness(){
    if(this.description.length ==0 ){
      alert("Please add description")
      return;
    }
    if(this.title.length ==0 ){
      alert("Please Enter Title")
      return;
    }
    if(this.image.length ==0 ){
      alert("Please Enter image filename")
      return;
    }
   var data = {
      "description":this.description,
      "image":this.image,
      "title":this.title
  }
    this.service.addAwareness(data).subscribe(data => {
      if(data != null){
        alert("Awarness added");
        this.getAllAwarness();
      }
    },error => {
      console.log(error);
    });
  }


  getAllAwarness(){
    this.service.getAllAware().subscribe(data => {
      this.res=data;
    },error=>{
      console.log(error);
    })
  }

  delAware(x:number){
    this.service.delAware(x).subscribe(data => {
      if(data == null){
        alert("Awarness added");
        this.getAllAwarness();
      }
    },error=>{

    })
  }
}
