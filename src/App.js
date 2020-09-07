import React from 'react'
import { connect } from 'react-redux'
import PortfoliosContainer from './containers/PortfoliosContainer'

class App extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <PortfoliosContainer/>
      </div>
    );
  }
}

export default connect()(App);
