
// Typescript
import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';

export interface ApplicationState {
  counter: fromCounter.CounterState;
}

// This is what our module needs.
export const reducers = {
  counter: fromCounter.reducer
};


// Selectors (selector functions)

//  1. If this a feature, create a "feature selector"

// 2. Cretae a selector for each "branch" of the state.
const selectCounterBranch = (state: ApplicationState) => state.counter;

// 3. Create "helpers" (optional)

// 4. Create the selectors you need for the components

// 5. TODO: We need a function that returnss the current value  of the counter.

export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);
export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);

export const selectDecrementDisabled = createSelector(
  selectCurrentCount,
  selectCountingBy,
  (current, by) => current - by < 0
);

export const selectDisplayText = createSelector(
  selectCurrentCount,
  (current) => (current % 3 === 0 && current % 5 === 0) ? 'Fizbuzz' : (current % 3 === 0) ? 'Fiz' : (current % 5 === 0) ? 'Buzz' : ''
);
