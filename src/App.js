import React from 'react'
import PortfoliosContainer from './containers/PortfoliosContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <PortfoliosContainer/>
        </header>
      </div>
    );
  }
}

export default App
