import { SET_AUTH } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    accessToken: ''
}

export default (state = initialState, action={}) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                isAuthenticated: action.payload.isAuthenticated,
                accessToken: action.payload.accessToken
            }
        default:
            return state;
    }
}