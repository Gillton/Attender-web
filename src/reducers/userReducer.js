import { 
    // eslint-disable-next-line
    GET_USER_START, GET_USER_ERROR, GET_USER_END
 } from '../actions/types';

const initialState = {
    displayName: '',
    userId: ''
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_USER_END:
            return {
                userId: action.payload.userId,
                displayName: action.payload.displayName
            }
        default:
            return state;
    }
}