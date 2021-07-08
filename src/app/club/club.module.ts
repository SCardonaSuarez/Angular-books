import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './books/book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    BookListComponent,
    AddBookComponent,
    HomeComponent
  ],
  exports:[
    BookListComponent,
    AddBookComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClubModule { }
