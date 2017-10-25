import {
    GET_CLASSES_START, GET_CLASSES_ERROR, GET_CLASSES_END
} from '../actions/types';

const initialState = {
    fetched: false,
    fetching: false,
    data: {}
}

export default (state = initialState, action={}) => {
    switch(action.type) {
        case GET_CLASSES_START:
            return { ...state, fetching: true}
        case GET_CLASSES_ERROR:
            return {...state, fetching: false}
        case GET_CLASSES_END:
            let d = {};
            action.payload.forEach(c => {
                d[c._id] = c;
            });
            return {...state, fetched: true, fetching: false, data: d}
        default:
            return state;
    }
}