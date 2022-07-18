import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookOptionsComponent } from './components/book-options/book-options.component';
import { BooksComponent } from './components/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { BookIdComponent } from './components/book-id/book-id.component';
import { FormsModule } from '@angular/forms';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookDeleteComponent } from './components/book-delete/book-delete.component';
import { FileCreateComponent } from './components/file-create/file-create.component';
import { FileOptionsComponent } from './components/file-options/file-options.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt'
import { AuthGuardService } from './guards/auth-guard.service';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    BookOptionsComponent,
    BooksComponent,
    BookIdComponent,
    BookAddComponent,
    BookDeleteComponent,
    FileCreateComponent,
    FileOptionsComponent,
    FileUploadComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    //importy potrzebne do poprawnego dzialania frameworku zwiazanego z JWT
    JwtModule.forRoot({
      config : {
        tokenGetter : tokenGetter,
        // podawanie portu do backendu
        allowedDomains : ["localhost:7249"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
