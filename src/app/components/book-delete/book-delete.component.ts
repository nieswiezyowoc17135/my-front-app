import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  //zmienna, ktora będzie przechowywała pojedyncza ksiazke
  book: Book = {id: 0, author:'', isbn:''};

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  //nie wiem co zznaczy subscribe  
  deleteBook() {
    this.bookService.deleteSpecificBook(this.book.id).subscribe();
  }

}
