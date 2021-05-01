import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {
res:any;
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.service.getAllUsers().subscribe(data => {
    this.res=data;
    },error => {
      console.log(error);
      alert("Server not responding");
    });
  }
  delUser(x:number){
   
    this.service.deleteUser(x).subscribe(data => {
        if(data){
           alert("User deleted");
           this.getAllUsers();
        }
    },error => {
      alert("Server not responding");
      console.log(error);

    });
  } 
}
