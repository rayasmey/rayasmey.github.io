import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthorDataService } from '../author-data.service';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Book } from '../books/books.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  book: any ={} as any; 
  @ViewChild("addauthorForm")
  addauthorForm!:NgForm;

  private _authorsService!: AuthorDataService;
  


  constructor(authorsService:AuthorDataService,private _router:ActivatedRoute, private _myrouter:Router) { 
    this._authorsService = authorsService;
  }

  ngOnInit(): void {
  }

  onSubmit(addAuthorbody:NgForm){
    const bookId= this._router.snapshot.params["bookId"];
    this._authorsService.addAuthor(bookId, addAuthorbody.value).subscribe(value => {
      console.log(value);
      this._myrouter.navigate(['/books']);
    });

  }

}
