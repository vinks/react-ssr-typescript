// @flow
import { produce } from 'immer';
import { ActionTypes } from './actions';
import { LocaleState, LocaleAction } from './types';

export const initialState: LocaleState = Object.freeze({
    locale: 'en_US',
});

export default (state = initialState, action: LocaleAction) =>
    produce(state, (draft) => {
        const { type, payload } = action;

        switch (type) {
            case ActionTypes.SETLOCALE: {
                draft.locale = payload;
                return;
            }
        }
    });
