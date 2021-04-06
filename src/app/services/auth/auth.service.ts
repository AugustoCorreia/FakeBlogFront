import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  URL:string = "http://localhost:8080/"

  public register(user:User){
    this.http.post(URL+"register", JSON.stringify(user));
  }

  public auth(user:User){

    return this.http.post(URL+"auth", JSON.stringify(user)).subscribe(data=>{
      localStorage.setItem("token","Bearer "+JSON.parse(JSON.stringify(data)).token),
      localStorage.setItem("uid", JSON.parse(JSON.stringify(data)).id),
      localStorage.setItem("login",JSON.parse(JSON.stringify(data)).Login)
    });
  }

  getLoggedUser(){
    
    return 
  }

}
