import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import PortfoliosContainer from './containers/PortfoliosContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
      </div>
    );
  }
}

export default App
