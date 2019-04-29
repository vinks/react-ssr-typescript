import { createSelector } from 'reselect';
import { CatsState } from './types';

export const cats = (state: { cats: CatsState }): CatsState => state.cats;

export const getCatSrc = createSelector(
    [cats],
    (cats) => cats.src
);
