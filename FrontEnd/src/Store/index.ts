import * as doustour from './Reducers/doustour.Reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface State {
  doustour: doustour.State
}

export const reducers: ActionReducerMap<State> = {
  doustour: doustour.reducer
};

export const selectState = createFeatureSelector<doustour.State>('doustour');
export const getAllChapters = createSelector(selectState, doustour.getAllChapters);
export const getAllArticles = createSelector(selectState, doustour.getAllArticle);