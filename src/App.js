import React from 'react'
import { connect } from 'react-redux'
import { fetchPortfolios } from './actions/fetchPortfolios'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPortfolios({type: 'FETCH_PORTFOLIOS', payload: {name: 'Bitcoin Portfolio'}})
  }

  render() {
    return (
      <div className="App">
        New app
      </div>
    );
  }
}

export default connect(null, {fetchPortfolios})(App);
