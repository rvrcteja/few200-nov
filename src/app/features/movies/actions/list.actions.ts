import { createAction, props } from '@ngrx/store';
import { MovieEntity } from '../reducers/list.reducer';

let id = 1;

export const addMovie = createAction(
  '[movies] added a movie',
  ({ title, rentalDays, rentalPrice }: { title: string, rentalDays: number, rentalPrice: number }) => ({
    payload: {
      id: 'T' + (id++).toString(),
      title,
      rentalDays,
      rentalPrice
    } as MovieEntity
  })
);

export const addMovieSuccess = createAction(
  '[Movies] added a movie succesfully',
  props<{ oldId: string, payload: MovieEntity }>()
);
export const addMovieFailure = createAction(
  '[Movies] added a movie failure',
  props<{ error: string, badMovie: MovieEntity }>()
);

export const loadMovieSuccess = createAction(
  '[Movies] loaded movies successfully',
  props<{ movies: MovieEntity[] }>()
);
export const loadMovieFailure = createAction(
  '[Movies] failure in loading movies',
  props<{ error: string }>()
);
