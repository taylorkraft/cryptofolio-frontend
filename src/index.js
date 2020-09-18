import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import portfolioReducer from './reducers/portfolioReducer'

import App from './App'

// our store is where we're storing our data globally

// anytime something is dispatched, we want that actionObj to be sent to our portfolio reducer
// our reducer will then update our store 
const store = createStore(portfolioReducer,(applyMiddleware(thunk)))

// any component that we put in provider, and any of it's children components - can access our store
// any component that we wrap in router, and any of it's children components - now have access to setting up routes and links
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);