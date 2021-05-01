import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-get-feedback',
  templateUrl: './get-feedback.component.html',
  styleUrls: ['./get-feedback.component.css']
})
export class GetFeedbackComponent implements OnInit {
res:any;
  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAllFeedbacks().subscribe(data => {
      this.res = data;
    },error => {
      console.log(error);
    });
  }
  del(a:number){
    this.service.deleteFeedback(a).subscribe(data => {
      if(data == null){
        alert("Deleted");
        this.getAll();
      }
    }, error => {
      console.log(error);
    });
  }
}
