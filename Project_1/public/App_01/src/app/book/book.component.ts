import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksDataService } from '../books-data.service';
import { Book } from '../books/books.component';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: any = {} as any;
  isEditTitle: boolean = false;
  isEditYear: boolean = false;
  isEditPublisher: boolean = false;
  isEditNameofAuthor: boolean = false;
  isEditYearofBirth: boolean = false;

  
  
  @ViewChild("updatePartialYearForm")
  updatePartialForm!: NgForm;

  

  constructor(private _booksService: BooksDataService, private _router: ActivatedRoute, private _myrouter: Router, private _authenticationService: AuthenticationService) { }


  get isLoggedIn(): boolean {return this._authenticationService.isLoggedIn}

  ngOnInit(): void {
    const bookId = this._router.snapshot.params["bookId"];
    this._booksService.getBook(bookId).subscribe(value => {
      this.book = value;

    });
  }

  deleteBook() {
    const bookId = this._router.snapshot.params["bookId"];
    this._booksService.deleteBook(bookId).subscribe(value => {
      console.log(value);
      this._myrouter.navigate(['/books']);
    });
  }

  onEditTitle() {
    this.isEditTitle = !this.isEditTitle;
     }
  onEditYear() {
    this.isEditYear = !this.isEditYear;
  }
  onEditPublisher() {
    this.isEditPublisher = !this.isEditPublisher;
  }
  onEditNameofAuthor() {
    this.isEditNameofAuthor = !this.isEditNameofAuthor;
  }
  onEditYearofBirth() {
    this.isEditYearofBirth = !this.isEditYearofBirth;
  }


  onPartialUpdate() {
    const bookId = this._router.snapshot.params["bookId"];
    this._booksService.updatePartial(bookId, this.updatePartialForm.value).subscribe(value => {
      console.log(value);
      this._myrouter.navigate(["/books/bookId"]);
      this.isEditTitle = false;
      this.isEditYear = false;
      this.isEditPublisher = false;
      
    });
  }

  onPartialAuthorNameUpdate() {
    const bookId = this._router.snapshot.params["bookId"];
    this._booksService.updateAuthorNamePartial(bookId, this.updatePartialForm.value).subscribe(value => {
      console.log(value);
      this._myrouter.navigate(["/books/bookId"]);
      this.isEditNameofAuthor= false;

    });
  }

  onPartialAuthorBirthdateUpdate() {
    const bookId = this._router.snapshot.params["bookId"];
    this._booksService.updateAuthorBirthdatePartial(bookId, this.updatePartialForm.value).subscribe(value => {
      console.log(value);
      this._myrouter.navigate(["/books/bookId"]);
      this.isEditYearofBirth = false;
    });
  }

}
