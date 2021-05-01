import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

url:string="https://localhost:8080/";
header:HttpHeaders = new HttpHeaders();


  constructor(private http:HttpClient) { }

  login(email:string,password:string){
  

    return this.http.post(this.url+"login",{username:email,password:password});
  }
  signup(data:any){
    return this.http.post(this.url+"signup",data);
  }
  getAwareness()
  {
    return this.http.get(this.url+"getAwareness");
  }
  getProjects()
  {
    return this.http.get(this.url+"getAllProjects");
  }
}
