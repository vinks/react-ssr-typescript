import axios from 'axios';

export const ActionTypes = {
    FETCH_CATS_REQUEST: 'cats/fetch-request',
    FETCH_CATS_SUCCESS: 'cats/fetch-success',
    FETCH_CATS_FAILURE: 'cats/fetch-failure',
};

const fetchCatsFailure = (error: any) => {
    return {
        type: ActionTypes.FETCH_CATS_FAILURE,
        payload: {
            fetching: false,
            src: null,
            error: error.message || 'UNKNOWN ERROR FETCHING CAT',
        },
    };
};

const fetchCatsSuccess = (data: any) => {
    return {
        type: ActionTypes.FETCH_CATS_SUCCESS,
        payload: {
            fetching: false,
            src: data.file,
        },
    };
};

export const fetchCats = () => {
    return (dispatch: any) => {
        dispatch({
            type: ActionTypes.FETCH_CATS_REQUEST,
            payload: { fetching: true },
        });

        return axios
            .get('https://aws.random.cat/meow')
            .then(
                (response: any) => dispatch(fetchCatsSuccess(response.data)),
                (error: any) => dispatch(fetchCatsFailure(error))
            );
    };
};
