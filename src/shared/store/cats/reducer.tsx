import { produce } from 'immer';
import { ActionTypes } from './actions';
import { CatsState, CatsAction } from './types';

export const initialState: CatsState = Object.freeze({
    fetching: false,
    src: null,
    error: null,
});

export default (state = initialState, action: CatsAction) =>
    produce(state, (draft) => {
        const { type, payload } = action;

        switch (type) {
            case ActionTypes.FETCH_CATS_REQUEST: {
                draft.fetching = payload.fetching;
                return;
            }

            case ActionTypes.FETCH_CATS_FAILURE: {
                draft.fetching = payload.fetching;
                draft.src = payload.src;
                draft.error = payload.error;
                return;
            }

            case ActionTypes.FETCH_CATS_SUCCESS: {
                draft.fetching = payload.fetching;
                draft.src = payload.src;
                return;
            }
        }
    });
