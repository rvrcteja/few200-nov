import { Component, OnInit, Input } from '@angular/core';
import { BookListItem } from '../../models';
import { loanBook } from '../../actions/list.actions';
import { Store } from '@ngrx/store';
import { BooksState } from '../../reducers';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  @Input() model: BookListItem[] = [];
  constructor() { }

  ngOnInit() {
  }
}
