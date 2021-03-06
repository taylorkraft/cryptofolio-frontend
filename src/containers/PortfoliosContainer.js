import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import fetchPortfolios from '../actions/fetchPortfolios'
import PortfolioForm from '../components/PortfolioForm'
import Portfolio from '../components/Portfolio'
import PortfolioList from '../components/PortfolioList'
import Home from '../components/Home'

class PortfoliosContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPortfolios() 
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/portfolios/new' component={PortfolioForm}/>
          <Route path='/portfolios/:id' component={Portfolio} />

          {/* <Route path='/portfolios/:id' render={(routeProps) => 
          <Portfolio {...routeProps} portfolios={this.props.portfolios}/>} /> */}

          {/* <Route path='/portfolios' render={(routeProps) => 
          <PortfolioList {...routeProps} portfolios={this.props.portfolios}/>}/> */}
          <Route path='/portfolios' component={PortfolioList}/>
          
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    )
  }
}

// maptStateToProps allows us to access the portfolios in our redux store
// this state is from our redux store
// const mapStateToProps = state => {
//   return {
//     portfolios: state.portfolios
//   }
// }

export default connect(null, {fetchPortfolios})(PortfoliosContainer)