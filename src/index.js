import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Prodvider } from 'react-redux'

import App from './App'

// Our store is where we're storing our data globally

// We send an action object to our reducer, our reducer is responsible for taking in that object and deciding what we want to update about our current store, the reducer will return a new version of that store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Any component that we put in provider, and any of it's child components can access our store (App and it's children components)