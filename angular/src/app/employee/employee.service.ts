import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string="https://localhost:8080/";
  header:HttpHeaders = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem("token")+"");

 

  constructor(private http:HttpClient) { }

  addwater(data:any){
   return this.http.post(this.url+"addInfo",data,{headers:this.header});
  }
  getAllWaters(){
    return this.http.get(this.url+"getAllWaters");
  }
  deleteWaters(id:number){
    return this.http.delete(this.url + "admin/deleteWater/"+id,{headers:this.header});
  }
  getAllFeedbacks(){
    return this.http.get(this.url+"admin/feedbacks");
  }
  deleteFeedback(id:number)
  {
    return this.http.delete(this.url + "admin/deleteFeedback/"+id,{headers:this.header}); 
  }
}
