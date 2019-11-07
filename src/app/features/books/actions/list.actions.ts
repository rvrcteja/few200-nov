import { createAction, props } from '@ngrx/store';
import { BookEntity } from '../reducers/list.reducer';

let id = 1;

export const addBook = createAction(
  '[books] added a book',
  ({ title, author, format }: { title: string, author: string, format: string }) => ({
    payload: {
      id: 'T' + (id++).toString(),
      title,
      author,
      format
    } as BookEntity
  })
);

// export const loanBook = createAction(
//   '[books] loaned a book',
//   ({ id, title, author, format }: { id: string, title: string, author: string, format: string }) => ({
//     payload: {
//       id: 'T' + (id).toString(),
//       title,
//       author,
//       format
//     } as BookEntity
//   })
// );

export const loanBook = createAction(
  '[books] loaned a book',
  props<{ payload: BookEntity }>()
);
