import axios from 'axios';
import hello from 'hellojs';
import jwt from 'jwt-decode';

import { SET_CURRENT_USER } from './types';

window.hello = hello;

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
}

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function login(data) {
    return dispatch => {
        hello.login('aad', {
			display: 'page',
			state: 'abcd'
		});
    }
}

export function logout() {
    return dispatch => {
        hello('aad').logout();
		this.setState({
			isAuthenticated: false,
			displayName: null
		});
    }
}