import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, rentalPriceEl: HTMLInputElement, rentalDaysEl: HTMLSelectElement) {
    const iteamToAdd = {
      title: titleEl.value,
      rentalPrice: rentalPriceEl.value,
      rentalDays: rentalDaysEl.value
    };

    // TODO: Replace this with a dispatch

    console.log(iteamToAdd);
    titleEl.value = '';
    rentalPriceEl.value = '';
    rentalDaysEl.value = '';
  }
}
