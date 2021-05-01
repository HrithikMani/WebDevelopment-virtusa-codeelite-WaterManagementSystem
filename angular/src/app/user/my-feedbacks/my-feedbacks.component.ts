import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-feedbacks',
  templateUrl: './my-feedbacks.component.html',
  styleUrls: ['./my-feedbacks.component.css']
})
export class MyFeedbacksComponent implements OnInit {
res:any;

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.getFeed();
  }
  getFeed(){
    this.service.getAllFeedbacks().subscribe(data => {
      this.res=data;
    },error =>{
      console.log(error);
    })
  }
}
