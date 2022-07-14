import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  //zmienna, ktora będzie przechowywała pojedyncza ksiazke
  book: Book = {id: 0, author:'', isbn:''};

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  addBook() {
    this.bookService.addSpecificBook(this.book).subscribe();
  }
}
