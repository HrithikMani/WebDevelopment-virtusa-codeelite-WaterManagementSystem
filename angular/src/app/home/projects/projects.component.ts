import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
res:any;
  constructor(private service:LoginService) { }

  ngOnInit(): void {
    this.getProjects();
  }
  getProjects()
  {
    this.service.getProjects().subscribe(data => {
      this.res=data;
    },error=>{
      console.log(error)
    });
  }
}
