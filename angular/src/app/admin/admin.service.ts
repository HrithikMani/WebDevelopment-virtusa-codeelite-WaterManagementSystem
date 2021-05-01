import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string="https://localhost:8080/";
  header:HttpHeaders = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem("token")+"");

  constructor(private http:HttpClient) { }

  addAwareness(data:any){
    return this.http.post(this.url+"addAwareness",data,{headers:this.header});
  }
  getAllAware(){
    return this.http.get(this.url+ "getAwareness",{headers:this.header});
   
  }
  delAware(x:number){
    return this.http.delete(this.url+"admin/deleteAwareness/"+x,{headers:this.header})
  }
  deleteWaters(id:number){
    return this.http.delete(this.url + "admin/deleteWater/"+id,{headers:this.header});
  }
  getAllWaters(){
    return this.http.get(this.url+"getAllWaters");
  }


  addProject(data:any){
    return this.http.post(this.url+"admin/addProjectsInfo",data,{headers:this.header});
  }
  
  getAllProject(){
    return this.http.get(this.url+"getAllProjects",{headers:this.header});
  }

  deleteproject(x:number){
    return this.http.delete(this.url+"admin/deleteProjects/"+x,{headers:this.header});
  }

  adduser(data:any){
    return this.http.post(this.url+"signup",data,{headers:this.header});
  }
  getAllUsers(){
    return this.http.get(this.url+"admin/getAllUsers",{headers:this.header});
  }
  deleteUser(x:number){
    return this.http.delete(this.url+"admin/deleteUser/"+x,{headers:this.header});
  }
  
}
