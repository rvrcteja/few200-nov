import { Component, OnInit, Input } from '@angular/core';
import { BookListItem } from '../../models';
import { loanBook } from '../../actions/list.actions';
import { Store } from '@ngrx/store';
import { BooksState } from '../../reducers';
import { BookEntity } from '../../reducers/list.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() model: BookListItem[] = [];
  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
  }

  loanBook(book: BookEntity) {
    this.store.dispatch(loanBook({ payload: book }));
  }


}
