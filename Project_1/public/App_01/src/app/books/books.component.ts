import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BooksDataService } from '../books-data.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book[]=[];
  private _booksService!: BooksDataService;
  offset:number=0;
  count:number=5;
  pageNum: number = 1;
  numberOfPages!:number;
   
  
  constructor( booksService:BooksDataService, private _router:ActivatedRoute) { 
     this._booksService = booksService;
  }
      
  ngOnInit(): void {
      this._booksService.getBooks().subscribe(value => {
        console.log(value);
        this.books= value;
        
      });
        this._booksService.getCount().subscribe(value=>{
        this.numberOfPages = parseInt((value / this.count).toString())+1;
      });
    
     }

  onNext(){
    this.pageNum +=1;
    this.offset+=this.count;
    this._booksService.getBooksList(this.offset,this.count ).subscribe(value => {
      this.books= value;
      });
  }

  onPrevious(){
    this.offset-=this.count;
    this.pageNum -=1;
    this._booksService.getBooksList(this.offset,this.count ).subscribe(value => {
      this.books= value;
      });
  }

}


export class Book {
  #_id!: string;
  #Title!: string;
  #Year!: number;
  #Publisher!: string;
  Author: { _id: string, Name_of_Author: string; Year_of_Birth: number; } = {_id:'', Name_of_Author: '', Year_of_Birth: 0};
  get _id() {return this.#_id;}
  get Title() {return this.#Title;}
  set Title(Title: string) {this.#Title= Title;}
  get Year() {return this.#Year;}
  set Year(Year: number) {this.#Year= Year;}
  get Publisher() {return this.#Publisher;}
  set Publisher(Publisher: string) {this.#Publisher= Publisher;}
  get Name_of_Author() {return this.Author.Name_of_Author;}
  set Name_of_Author(Name_of_Author: string) {this.Author.Name_of_Author= Name_of_Author;}
  get Year_of_Birth() {return this.Author.Year_of_Birth;}
  set Year_of_Birth(Year_of_Birth: number) {this.Author.Year_of_Birth= Year_of_Birth;}
  
  constructor(id: string, title: string, year: number,publisher: string, nameofauthor: string, yearofbirth: number) {
  this.#_id= id;
  this.#Title= title;
  this.#Year= year;
  this.#Publisher= publisher;
  this.Author.Name_of_Author= nameofauthor;
  this.Author.Year_of_Birth= yearofbirth;
  }
}

