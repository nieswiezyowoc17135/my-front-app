import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, ObservedValueOf } from 'rxjs';
import { Book } from '../models/book';
import { catchError,map,tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {

  //sciezka z API do wyswietlania wszystkich ksiazek
  private booksUrl = 'https://localhost:7249/api/Books'

  //sciezka do wyswietlania poszczegolnej ksiazki
  private bookIdUrl = 'https://localhost:7249/api/Books/'
  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
  }

  getSpecificBook(id: number) : Observable<Book> {
    return this.http.get<Book>(this.bookIdUrl + id);
  }

  addSpecificBook(book: Book) : Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, this.httpOptions);
  }

  deleteSpecificBook(id: number) : Observable<Book> {
    return this.http.delete<Book>(this.bookIdUrl+id);
  }


  constructor(
    private http: HttpClient
  ) { }
}
