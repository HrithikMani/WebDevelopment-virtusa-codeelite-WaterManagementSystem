import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-water-models',
  templateUrl: './admin-water-models.component.html',
  styleUrls: ['./admin-water-models.component.css']
})
export class AdminWaterModelsComponent implements OnInit {
res:any;
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getWaterModels();
  }

  deleteModel(a:number){
    this.service.deleteWaters(a).subscribe(data => {
      alert("Watermodel deleted");
      this.getWaterModels();
    },error => {
      alert("Server not responding");
    });
  }
  getWaterModels(){
    this.service.getAllWaters().subscribe(data => {
      this.res = data;
    },error =>{
    
    console.log(this.res);
    });
  }

}
