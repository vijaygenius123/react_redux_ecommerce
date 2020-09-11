import {applyMiddleware, createStore} from 'redux'
import {createBrowserHistory} from 'history'
import createRootReducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {routerMiddleware} from "connected-react-router";

const history = createBrowserHistory()

const middleware = [thunk, routerMiddleware(history)]

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(...middleware),
));

export {store, history};
