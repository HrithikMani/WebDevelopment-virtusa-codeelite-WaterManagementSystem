import { Component, Input, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { UserService } from '../user.service';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.css']
})
export class FeedbackModalComponent implements OnInit {

  @Input("waterid") id:any;
  duration:number=0;
  description:string="";
 
  constructor(private service:UserService) { }

  ngOnInit(): void {
    
  }
  sent(){

    if(this.duration == 0){
      alert("Please Enter Duration");
      return;
    }

    if(this.description.length == 0){
      alert("Please Enter Descriptiion");
      return;
    }
    if(this.duration > 30){
      alert("You Cannot send feedback if duration is more than 30")
      return;
    }
    var data = {
      "duration":this.duration,
      "feedback":this.description,
      "user":{
          "id":localStorage.getItem("userid")
      },
      "water":{
          "id":Number(this.id)
      }
    };
    
this.service.addFeedBack(data).subscribe(data => {
  if(data == null){
    alert("Feedback sent");
  }

},error =>{
console.log(error);
});
  }
}
