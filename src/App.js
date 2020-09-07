import React from 'react'
import { connect } from 'react-redux'
import { fetchPortfolios } from './actions/fetchPortfolios'

class App extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        New app
      </div>
    );
  }
}

export default connect()(App);
