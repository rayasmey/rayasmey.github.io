import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Credentials } from './login/login.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

 

  private _baseUrl: string= "http://localhost:3000/users"; 

  constructor(private _http:HttpClient) { 
  }

  public registerUser(user:User): Observable<User>{
    return this._http.post(this._baseUrl, user)as Observable<User>;
  }

  public loginUser(user:Credentials): Observable<Credentials>{
    const url:string= this._baseUrl + "/login"; 
    return this._http.post(url, user)as Observable<Credentials>;
  }


}

export class User {
  name!: string;
  username!: string;
  password!: string;


  constructor(name: string, username: string, password: string) {
  this.name = name;
  this.username = username;
  this.password = password;
 }

}
