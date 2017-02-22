


import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'

var buildStore

import { combineReducers } from 'redux';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)
    /*if(module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(require('../reducers'))
        })
    }*/
    return store
}
