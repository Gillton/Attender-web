import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { initializeIcons } from '@uifabric/icons';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';

import { init } from './actions/authActions';

initializeIcons();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(init());

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
