import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="https://localhost:8080/";

  header:HttpHeaders = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem("token")+"");
  constructor(private http:HttpClient) { }

  getAllWaters(){
    return this.http.get(this.url+"getAllWaters");
  }
  addFeedBack(data:any){
    return this.http.post(this.url+"addFeedback",data,{headers:this.header});
  }
  getAllFeedbacks(){
    return this.http.get(this.url+"getFeedback/"+Number(localStorage.getItem("userid")),{headers:this.header});
  }
}
