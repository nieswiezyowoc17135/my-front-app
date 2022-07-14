import { Component, Input, OnInit } from '@angular/core';
import { catchError, NEVER, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-id',
  templateUrl: './book-id.component.html',
  styleUrls: ['./book-id.component.css']
})
export class BookIdComponent implements OnInit {

  //zmienna, ktora będzie przechowywała pojedyncza ksiazke
  book: Book = {} as Book;
  //zmienna, która bedzie brała id z Inputa
  @Input() bookId: number = 0;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  getBook() {
    this.bookService.getSpecificBook(this.bookId)
      .subscribe(x => {
        this.book = x;
      },
        error => console.log(error));
  }

}
