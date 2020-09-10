import React from 'react'
import PortfoliosContainer from './containers/PortfoliosContainer'
import './App.css'

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
