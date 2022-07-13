import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { catchError,map,tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {

  private booksUrl = 'https://localhost:7249/api/Books'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
  }


  constructor(
    private http: HttpClient
  ) { }
}
