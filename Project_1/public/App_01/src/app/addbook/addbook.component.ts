import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../books-data.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Book } from '../books/books.component';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  author: Book ={} as Book; 
  @ViewChild("addbookForm")
  addbookForm!:NgForm;

  private _booksService!: BooksDataService;
  


  constructor(booksService:BooksDataService, private _myrouter:Router){ 
    this._booksService = booksService;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this._booksService.addBook(this.addbookForm.value).subscribe(value => {
      console.log(value);
      this._myrouter.navigate(["/books"]);
    });

  }

}

