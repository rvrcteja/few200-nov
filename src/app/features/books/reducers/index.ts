import * as fromList from './list.reducer';
import * as fromLoans from './loan.reducer';

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookListItem } from '../models/book-list-item.model';

export const featureName = 'booksFeature';

export interface BooksState {
  list: fromList.State;
  loans: fromLoans.State;
}

export const reducers = {
  list: fromList.reducer,
  loans: fromLoans.reducer
};

const selectBooksFeature = createFeatureSelector<BooksState>(featureName);
const selectListBranch = createSelector(selectBooksFeature, m => m.list);
const { selectAll: selectBookListArray } = fromList.adapter.getSelectors(selectListBranch);

export const selectBookListItems = createSelector(
  selectBookListArray,
  (books) => books.map(book => ({
    id: book.id,
    title: book.title,
    author: book.author,
    format: book.format,
  } as BookListItem)));

const selectLoansFeature = createFeatureSelector<BooksState>(featureName);
const selectLoanListBranch = createSelector(selectLoansFeature, m => m.loans);
const { selectAll: selectLoanListArray } = fromList.adapter.getSelectors(selectLoanListBranch);

export const selectLoanListItems = createSelector(
  selectLoanListArray,
  (loans) => loans.map(book => ({
    id: book.id,
    title: book.title,
    author: book.author,
    format: book.format,
  } as BookListItem)));
