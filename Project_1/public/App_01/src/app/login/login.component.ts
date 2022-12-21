import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UsersDataService } from '../users-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  user: Credentials = {} as Credentials; //= new Credentials("mYuSERANME", "NEWPASSWORD");
  @ViewChild("loginForm")
  loginForm!: NgForm;



  isLoggedIn: boolean = false;

  constructor(private userdataservice: UsersDataService, private _myrouter: Router, private _authenticationService: AuthenticationService) { }

  ngOnInit() {

  }

  onLogin() {
    console.log("form", this.loginForm.value);
    this.userdataservice.loginUser(this.loginForm.value).subscribe(value => {
    console.log(value);

      this._authenticationService.token = value.token;
      this._myrouter.navigate(["/books"]);
    });

  }

  reset() {
    this.user.username = "";
    this.user.password = "";
  }




  logout() {

    // this.authenticationService.isLoggedIn = false;
    // this.isLoggedInd = false;
    // this.name = "";
    this.reset();
  }

}

export class Credentials {
  #username!: string;
  #password!: string;
  #token!: string;


  get username() {
    return this.#username;
  }
  set username(username: string) {
    this.#username = username;
  }

  get password() {
    return this.#password;
  }
  set password(password: string) {
    this.#password = password;
  }

  get token() {
    return this.#token;
  }
  set token(token: string) {
    this.#token = token;
  }

  constructor(username: string, password: string, token: string) {
    this.#username = username;
    this.#password = password;
    this.#token = token;
  }
}

