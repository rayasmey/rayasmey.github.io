import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { AuthorDataService } from '../author-data.service';


@Component({
  selector: 'app-upadateauthor',
  templateUrl: './upadateauthor.component.html',
  styleUrls: ['./upadateauthor.component.css']
})
export class UpadateauthorComponent implements OnInit {
  author: any = {} as any;
 
  @ViewChild("updatebookForm")
  updateauthorForm!:NgForm;
 
   constructor(private _authorsService:AuthorDataService, private _router:ActivatedRoute, private _myrouter:Router) { }
 
   ngOnInit(): void {
     const bookId= this._router.snapshot.params["bookId"];
       this._authorsService.getAuthor(bookId).subscribe(value => {
       this.author= value;
       });
   }
 
   onAuthorUpdate() { 
     const bookId= this._router.snapshot.params["bookId"];
     this._authorsService.updateAuthor(bookId, this.updateauthorForm.value).subscribe(value => {
       console.log(value);
       this._myrouter.navigate(["/books/bookId"]);
   
   });
   }

}
