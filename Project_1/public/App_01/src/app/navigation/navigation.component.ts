import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { JwtHelperService} from '@auth0/angular-jwt';
 
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  get loggedIn() :boolean {
    return this._auth.isLoggedIn;
  }


  //copy the below command in every page you want
  get username(): string {
    if (this._auth.token) {
      return this._jwt.decodeToken(this._auth.token).username;
    } 
    return this._auth.name;
  }
  constructor(private _router:Router, private _auth: AuthenticationService, private _jwt: JwtHelperService, private _authenticationService: AuthenticationService) { }
  ngOnInit(): void { 
  } 

    onHome(): void {
    this._router.navigate([""]);
    }
    onBooks(): void {
        this._router.navigate(["books"]);
        }

    onRegister(): void {
        this._router.navigate(["register"]);
        }

    onLogout(): void {
          this._auth.removeToken();
          this._router.navigate([""]);
          }



}
