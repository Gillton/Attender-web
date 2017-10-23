import axios from 'axios';

import {
    BEGIN_COLLECT_START, BEGIN_COLLECT_ERROR, BEGIN_COLLECT_END,
    STOP_COLLECT_START, STOP_COLLECT_ERROR, STOP_COLLECT_END
} from './types';

export function startCollect(classId) {
    return dispatch => {
        dispatch({ type: BEGIN_COLLECT_START });
        axios.get('/collect/' + classId + '/start')
            .then(res => {
                dispatch({ type: BEGIN_COLLECT_END, payload: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: BEGIN_COLLECT_ERROR});
            });
    }
}

export function endCollect(classId) {
    return dispatch => {
        dispatch({ type: STOP_COLLECT_START });
        axios.get('/collect/' + classId + '/stop')
            .then(res => {
                dispatch({ type: STOP_COLLECT_END, payload: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: STOP_COLLECT_ERROR});
            });
    }
}
