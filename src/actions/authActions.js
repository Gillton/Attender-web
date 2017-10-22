import axios from 'axios';
import hello from 'hellojs';

import { appId, redirectUri } from '../utils/config';
import { SET_AUTH } from '../actions/types';

export function init() {
    // Initialize the auth network.
    hello.init({
        aad: {
            name: 'Azure Active Directory',
            oauth: {
                version: 2,
                auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
            },
            form: false
        }
    });

    window.hello = hello;

    let auth = !!hello('aad').getAuthResponse();
    let accessToken = hello('aad').getAuthResponse().access_token;

    if (auth)
        axios.defaults.headers.common['Authorization'] = accessToken;

    return dispatch => {
        dispatch({
            type: SET_AUTH,
            payload: {
                isAuthenticated: auth,
                accessToken: accessToken
            }
        });
    }
}

export function login() {
    hello.init({
        aad: appId
    }, {
        redirect_uri: redirectUri,
        scope: 'user.readbasic.all+mail.send+files.read'
    });
    hello.login('aad', {
        display: 'page',
        state: 'abcd'
    });
}

export function logout() {
    hello('aad').logout();
    return {
        type: SET_AUTH,
        payload: {
            isAuthenticated: false,
            accessToken: ''
        }
    }
}