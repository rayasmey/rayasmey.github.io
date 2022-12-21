import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup } from '@angular/forms';
import { Book } from './books/books.component';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  bookId!: string;

  private _baseUrl: string = environment.books_service_base_url;

  constructor(private _http: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    const url: string = this._baseUrl + "/books";
    return this._http.get(url) as Observable<Book[]>;
  }

  public getBooksList(offset: Number, count: Number): Observable<Book[]> {
    const url: string = this._baseUrl + "/books/?offset=" + offset + "&count=" + count;
    return this._http.get(url) as Observable<Book[]>;
  }
  public getBook(bookId: string): Observable<Book> {
    const url: string = this._baseUrl + "/books/" + bookId;
    return this._http.get(url) as Observable<Book>;
  }
  public getCount(): Observable<number> {
    const url: string = this._baseUrl + 'books/bookcount';
    return this._http.get(url) as Observable<number>;
  }

  public addBook(form: FormGroup) {
    const url: string = this._baseUrl + "/books";
    return this._http.post(url, form);
  }

  public updateBook(bookId: string, updateform: FormGroup): Observable<Book> {
    const url: string = this._baseUrl + "/books/" + bookId;
    return this._http.put(url, updateform) as Observable<Book>;
  }


  public updatePartial(bookId: string, partialupdateform: FormGroup): Observable<Book> {
    const url: string = this._baseUrl + "/books/" + bookId;
    return this._http.patch(url, partialupdateform) as Observable<Book>;
  }

  public deleteBook(bookId: string): Observable<Book> {
    const url: string = this._baseUrl + "/books/" + bookId;
    return this._http.delete(url) as Observable<Book>;
  }
  
  public updateAuthorNamePartial(bookId: string, partialupdateform: FormGroup): Observable<Book> {
    const url: string = this._baseUrl + "/books/" + bookId + "/author";
    return this._http.put(url, partialupdateform) as Observable<Book>;
  }

  public updateAuthorBirthdatePartial(bookId: string, partialupdateform: FormGroup): Observable<Book> {
    const url: string = this._baseUrl + "/books/" + bookId + "/author";
    return this._http.patch(url, partialupdateform) as Observable<Book>;
  }



}
