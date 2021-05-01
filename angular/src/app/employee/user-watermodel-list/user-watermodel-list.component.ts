import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-watermodel-list',
  templateUrl: './user-watermodel-list.component.html',
  styleUrls: ['./user-watermodel-list.component.css']
})
export class UserWatermodelListComponent implements OnInit {

  res:any;

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  this.getWaterModels();
  }

  getWaterModels(){
    this.service.getAllWaters().subscribe(data => {
      this.res = data;
    },error =>{
    
    console.log(this.res);
    });
  }

  deleteModel(a:number){
    this.service.deleteWaters(a).subscribe(data => {
      alert("Watermodel deleted");
      this.getWaterModels();
    },error => {
      alert("Server not responding");
    });
  }
}
