import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  { path: 'allBooks', component: BooksComponent},
  { path: 'idBook', component: BooksComponent},
  { path: 'addBook', component: BooksComponent},
  { path: 'deleteBook', component: BooksComponent},
  { path: '', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
