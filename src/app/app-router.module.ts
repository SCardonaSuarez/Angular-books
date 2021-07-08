import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './club/books/book-list/book-list.component';
import { AddBookComponent } from './club/add-book/add-book.component';
import { HomeComponent } from './club/home/home.component';

const routes: Routes =[
  {
    path: '',
    component: BookListComponent,
    pathMatch:'full'
  },
  {
    path:'add-book',
    component: AddBookComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:'**',
    redirectTo: '/'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
