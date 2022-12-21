import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { FormGroup } from '@angular/forms';
import { Book } from './books/books.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorDataService {
  bookId!: string;

  private _baseUrl: string= environment.books_service_base_url; 

  constructor(private _http:HttpClient) { }

    public addAuthor(bookId: string,form:FormGroup) {
      const url: string = this._baseUrl + "/books/" + bookId + "/author";
      return this._http.post(url,form);
    }

    public getAuthor(bookId: string) {
      const url: string = this._baseUrl + "/books/" + bookId;
      return this._http.get(url);
    }

    public updateAuthor(bookId: string, updateform: FormGroup) {
      const url: string = this._baseUrl + "/books/" + bookId + "/author";
      return this._http.put(url, updateform);
    }


}
