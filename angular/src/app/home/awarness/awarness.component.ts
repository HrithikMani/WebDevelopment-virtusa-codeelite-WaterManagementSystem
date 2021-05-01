import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-awarness',
  templateUrl: './awarness.component.html',
  styleUrls: ['./awarness.component.css']
})
export class AwarnessComponent implements OnInit {
res:any;
  constructor(private service:LoginService) { }

  ngOnInit(): void {
  this.getAwarness();
  }

  getAwarness()
  {
    this.service.getAwareness().subscribe(data => {
      this.res=data;
    },error=>{
      console.log(error)
    });
  }
}
