import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit {
name:string="";
description:string="";
image:string="";
res:any;  

constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getAllprojects();
  }
  getAllprojects()
  {
   this.service.getAllProject().subscribe(data => {
    this.res=data;

    },error=>{
      console.log(error);
    });
  }


  addproject(){
  
    if(this.name.length ==0){
      alert("Please Enter name of the project");
      return;
    }

    if(this.description.length ==0){
      alert("Please Enter Description of the project");
      return;
    }

    if(this.image.length ==0){
      alert("Please Enter Image File Name");
      return;
    }

  
    var data =  {
      "name":this.name,
      "image":this.image,
      "status":this.description
  };


  this.service.addProject(data).subscribe(data => {
    if(data== null){
      alert("Project Added");
      this.getAllprojects();
    }
  },error => {
    console.log(error);
  });

  }

  delProject(x:number){
      this.service.deleteproject(x).subscribe(data => {
        if(data == null){
          alert("Project Deleted");
          this.getAllprojects();
        }
      },error=>{
        console.log(error);
      });
  }
}
