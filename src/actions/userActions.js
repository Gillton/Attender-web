import { Client } from 'msgraph-sdk-javascript';

import { login } from './authActions';
import { 
    GET_USER_START, GET_USER_ERROR, GET_USER_END,
} from './types';

let client = Client.init({
    debugLogging: true,
    authProvider: (done) => {
        done(null, window.hello('aad').getAuthResponse().access_token)
    }
});

export function getMe() {
    return dispatch => {
        dispatch({type: GET_USER_START});
    client
        .api('/me')
        .select('displayName, id')
        .get((err, res) => {
            if (!err)
                dispatch({
                    type: GET_USER_END,
                    payload: {
                        displayName: res.displayName,
                        userId: res.id
                    }
                });
            else {
                _handleError(err);
                dispatch({type: GET_USER_ERROR})
            }
        });
    }
}

function _handleError(err) {
    console.log(err.code + ' - ' + err.message);

    // This needs to be better...
    if (err.statusCode === 401 && err.message === 'Access token has expired.') {
        login();
    }
}