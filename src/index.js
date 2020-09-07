import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import portfolioReducer from './reducers/portfolioReducer'

import App from './App'

// Our store is where we're storing our data globally

// We send an action object to our reducer, our reducer is responsible for taking in that object and deciding what we want to update about our current store, the reducer will return a new version of that store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

// anytime something is dispatched, we want that actionObj to be sent to our portfolio reducer - which will then update my store 

let myStore = createStore(portfolioReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Any component that we put in provider, and any of it's child components can access our store (App and it's children components)