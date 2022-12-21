import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BooksDataService } from '../books-data.service';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Book } from '../books/books.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  book: any = {} as any;
 
 @ViewChild("updatebookForm")
 updatebookForm!:NgForm;

  constructor(private _booksService:BooksDataService, private _router:ActivatedRoute, private _myrouter:Router) { }

  ngOnInit(): void {
    const bookId= this._router.snapshot.params["bookId"];
      this._booksService.getBook(bookId).subscribe(value => {
      this.book= value;
      });
  }

  onUpdate() { 
    const bookId= this._router.snapshot.params["bookId"];
    this._booksService.updateBook(bookId, this.updatebookForm.value).subscribe(value => {
      console.log(value);
      this._myrouter.navigate(["/books"]);
  
  });
  }
   

}

