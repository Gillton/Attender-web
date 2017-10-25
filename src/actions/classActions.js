import axios from 'axios';

import {
    GET_CLASSES_START, GET_CLASSES_ERROR, GET_CLASSES_END,
    EDIT_CLASS_START, EDIT_CLASS_ERROR, EDIT_CLASS_END,
    DELETE_CLASS_START, DELETE_CLASS_ERROR, DELETE_CLASS_END,
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

export function editClass(c) {
    return dispatch => {
        dispatch({ type: EDIT_CLASS_START});
        axios.put('/api/classes/' + c._id, c)
            .then(res => {
                dispatch({ type: EDIT_CLASS_END, payload: c })
            })
            .catch(err => {
                dispatch({ type: EDIT_CLASS_ERROR });
            });
    }
}

export function deleteClass(id) {
    return dispatch => {
        dispatch({ type: DELETE_CLASS_START });
        console.log('Delete class: ', id);
        axios.delete('/api/classes/' + id)
            .then(res => {
                dispatch({ type: DELETE_CLASS_END, payload: id });
            })
            .catch(err => {
                dispatch({ type: DELETE_CLASS_ERROR});
            });
    }
}