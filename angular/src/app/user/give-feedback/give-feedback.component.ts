import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { UserService } from '../user.service';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.css']
})
export class GiveFeedbackComponent implements OnInit {
res:any;

waterid:number=0;
display:boolean=false;

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.getAllWaters();
  }
  getAllWaters(){
   
    this.service.getAllWaters().subscribe(data => {
      this.res = data;
    },error=>{
      console.log(error);
    });
  }
  setId(a:number){
    this.waterid = a;
    
  }
}
