import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksState } from '../../reducers';
import { addBook } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, authorEl: HTMLInputElement, formatEl: HTMLSelectElement) {
    const addToBook = {
      title: titleEl.value,
      author: authorEl.value,
      format: formatEl.value
    };

    this.store.dispatch(addBook({ ...addToBook }));
  }
}
