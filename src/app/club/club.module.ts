import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './books/book-list/book-list.component';



@NgModule({
  declarations: [
    BookListComponent
  ],
  exports:[
    BookListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClubModule { }
