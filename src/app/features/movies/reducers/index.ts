import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieListItem } from '../models';

export const featureName = 'moviesFeature';

export interface MoviesState {
  list: fromList.State;

}

export const reducers = {
  list: fromList.reducer
};

// Selectors

// 1. Feature Selector
const selectMovisFeature = createFeatureSelector<MoviesState>(featureName);

// 2. Selector Per branch
const selectListBranch = createSelector(selectMovisFeature, m => m.list);

// 3. helpers (optional)

const { selectAll: selectmovieListArray } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need.

// 5. Todo: we need a selector that returns a MovieListItem[] for our list.
export const selectMovieListItems = createSelector(
  selectmovieListArray,
  (movies) => movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    rentalPrice: movie.rentalPrice,
    rentalDays: movie.rentalDays,
    isTemporary: movie.id.startsWith('T')
  } as MovieListItem)));
