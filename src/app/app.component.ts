import { Component } from '@angular/core';
import { ApplicationState } from './reducers';
import { applicationStarted } from './actions/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front End Web 200';

  constructor(store: Store<ApplicationState>) {
    store.dispatch(applicationStarted());
  }
}
