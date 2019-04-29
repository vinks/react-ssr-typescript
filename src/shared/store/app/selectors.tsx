import { createSelector } from 'reselect';
import { LocaleState } from './types';

export const app = (state: { app: LocaleState }): LocaleState => state.app;

export const getLocale = createSelector(
    [app],
    (app) => app.locale
);
