import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component'
import { RegisterComponent } from './register/register.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthorComponent } from './author/author.component';
import { UpadateauthorComponent } from './upadateauthor/upadateauthor.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    RegisterComponent,
    BooksComponent,
    BookComponent,
    AddbookComponent,
    UpdateComponent,
    LoginComponent,
    AuthorComponent,
    UpadateauthorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
        },
        {
            path: "books",
            component: BooksComponent
          },
          {
            path: "book/:bookId",
            component: BookComponent,
          },
          {
            path: "addbook",
            component: AddbookComponent,

          },
          {
            path: "addauthor/:bookId",
            component: AuthorComponent,

          },
          {
            path: "updateauthor/:bookId",
            component: UpadateauthorComponent,

          },
          {
            path: "update/:bookId",
            component: UpdateComponent,

          },
          {
            path: "partial/:bookId",
            component: UpdateComponent,

          },
          {
            path: "register",
            component: RegisterComponent,
          },
          {
            path: "login",
            component: LoginComponent,
          },
          {
            path: "*",
            component: ErrorComponent,
          },
  ])
],
  providers: [
    JwtHelperService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




