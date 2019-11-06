import { Component, OnInit } from '@angular/core';
import { addMovie } from '../../actions/list.actions';
import { Store } from '@ngrx/store';
import { MoviesState } from '../../reducers';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<MoviesState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, rentalPriceEl: HTMLInputElement, rentalDaysEl: HTMLSelectElement) {
    const itemToAdd = {
      title: titleEl.value,
      rentalPrice: rentalPriceEl.valueAsNumber,
      rentalDays: parseInt(rentalDaysEl.value, 10),

    };

    // TODO: Replace this with a dispatch
    this.store.dispatch(addMovie({ ...itemToAdd }));
    // console.log(itemToAdd);
    titleEl.value = '';
    rentalPriceEl.value = '';
    rentalDaysEl.value = '';
    titleEl.focus();
  }
}
