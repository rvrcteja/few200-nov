import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

// const initialState = adapter.getInitialState();

const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'Book1', author: 'Author1', format: 'PaperBack' },
    2: { id: '2', title: 'Book2', author: 'Author2', format: 'EBook' }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(actions.addBook, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.loanBook, (state, action) => adapter.removeOne(action.payload.id, state))

);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}
