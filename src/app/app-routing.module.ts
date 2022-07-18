import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookDeleteComponent } from './components/book-delete/book-delete.component';
import { BookIdComponent } from './components/book-id/book-id.component';
import { BooksComponent } from './components/books/books.component';
import { FileCreateComponent } from './components/file-create/file-create.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { JwtModule } from '@auth0/angular-jwt'
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: 'allBooks', component: BooksComponent, canActivate:[AuthGuardService]},
  { path: 'idBook', component: BookIdComponent, canActivate:[AuthGuardService]},
  { path: 'addBook', component: BookAddComponent, canActivate:[AuthGuardService]},
  { path: 'deleteBook', component: BookDeleteComponent , canActivate:[AuthGuardService]},
  { path: 'fileCreate', component: FileCreateComponent, canActivate:[AuthGuardService]},
  { path: 'fileUpload', component: FileUploadComponent, canActivate:[AuthGuardService]},
  { path: '', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
