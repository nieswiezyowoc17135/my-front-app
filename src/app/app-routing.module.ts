import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookDeleteComponent } from './components/book-delete/book-delete.component';
import { BookIdComponent } from './components/book-id/book-id.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  { path: 'allBooks', component: BooksComponent},
  { path: 'idBook', component: BookIdComponent},
  { path: 'addBook', component: BookAddComponent},
  { path: 'deleteBook', component: BookDeleteComponent},
  { path: '', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
