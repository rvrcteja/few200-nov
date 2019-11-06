import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as listActions from '../actions/list.actions';
import { switchMap, map } from 'rxjs/operators';
import { MovieEntity } from '../reducers/list.reducer';

@Injectable()
export class ListEffects {

  // Adding a Movie
  // when we get a addedMovie -> addedMovieSuccess | addMovieFailure

  addMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.addMovie),
      map(a => a.payload),
      switchMap(originalMovie => this.client.post<MovieEntity>('http://localhost:3000/movies', {
        title: originalMovie.title,
        rentalPrice: originalMovie.rentalPrice,
        rentalDays: originalMovie.rentalDays
      }).pipe(
        map(addedMovie => listActions.addMovieSuccess({ oldId: originalMovie.id, payload: addedMovie }))
      ))
    )
  );

  // On application start, it is going to go get the movies from the API, and on:
  // Success - return the list of books in an action
  // Failure - do something else.

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.client.get<GetAllResponse>('http://localhost:3000/movies')
        .pipe(
          map(response => response.movies),
          map(movies => listActions.loadMovieSuccess({ movies }))
        )
      )
    ), { dispatch: true });

  constructor(private actions$: Actions, private client: HttpClient) { }
}

interface GetAllResponse {
  movies: MovieEntity[];
}
