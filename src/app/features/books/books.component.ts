import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BooksState, selectBookListItems, selectLoanListItems } from './reducers';
import { BookListItem } from './models/book-list-item.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BookListItem[]>;
  loans$: Observable<BookListItem[]>;

  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectBookListItems);
    this.loans$ = this.store.select(selectLoanListItems);
  }

}
