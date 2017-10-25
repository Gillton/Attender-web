import axios from 'axios';

import {
    GET_CLASSES_START, GET_CLASSES_ERROR, GET_CLASSES_END
} from './types';

export function getClasses() {
    return dispatch => {
        dispatch({ type: GET_CLASSES_START });
        axios.get('/api/classes')
            .then(res => {
                dispatch({ type: GET_CLASSES_END, payload: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: GET_CLASSES_ERROR});
            });
    }
}