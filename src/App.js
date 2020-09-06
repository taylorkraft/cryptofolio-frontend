import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/portfolios')
    .then(resp => resp.json())
    .then(respObj => console.log(respObj))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
