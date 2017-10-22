import { Client } from 'msgraph-sdk-javascript';

// import { login } from './authActions';
import { 
    GET_USER_START, GET_USER_ERROR, GET_USER_END,
    SET_AUTH
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
                _handleError(err, dispatch);
            }
        });
    }
}

function _handleError(err, dispatch) {
    dispatch({type: GET_USER_ERROR});

    dispatch({type: SET_AUTH, payload: {
        isAuthenticated: false,
        accessToken: ''
    }})

    console.log(err.code + ' - ' + err.message);

    if (err.statusCode === 401 && err.message === 'Access token has expired.') {
            if (window.location.pathname !== '/login')
                window.location.pathname = '/login';
        }
}