import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import portfolioReducer from './reducers/portfolioReducer'

import App from './App'

// our store is where we're storing our data globally

// we send an action object to our reducer
// our reducer is responsible for taking in that object and deciding what we want to update about our current store
// the reducer will return a new version of that store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// anytime something is dispatched, we want that actionObj to be sent to our portfolio reducer - which will then update our store 
const store = createStore(portfolioReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// any component that we put in provider, and any of it's child components can access our store 
// (App and it's children components)