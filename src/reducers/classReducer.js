import {
    GET_CLASSES_START, GET_CLASSES_ERROR, GET_CLASSES_END
} from '../actions/types';

const initialState = {
    fetched: false,
    fetching: false,
    data: []
}

export default (state = initialState, action={}) => {
    switch(action.type) {
        case GET_CLASSES_START:
            return { ...state, fetching: true}
        case GET_CLASSES_ERROR:
            return {...state, fetching: false}
        case GET_CLASSES_END:
            return {...state, fetched: true, fetching: false, data: action.payload}
        default:
            return state;
    }
}