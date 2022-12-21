import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { UsersDataService } from '../users-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerationform!: FormGroup;

  constructor( private userdataservice: UsersDataService, private _myrouter:Router) { }
  
  

  ngOnInit(): void {
    this.registerationform = new FormGroup({
      name: new FormControl(), 
      username: new FormControl(),
      password: new FormControl(),
      passwordrepeat: new FormControl()
    });
  }

  onSubmit(form: FormGroup): void{
    console.log("form",form.value);
    this.userdataservice.registerUser(form.value).subscribe({
      next: (value) => {
      console.log(value);  
      this._myrouter.navigate(['/login']); 
    }, error: (err) => {
      console.log(err);
    }});

    
  }

}
