import React from 'react'
import { Link } from 'react-router-dom'
import link from './Link'
import { connect } from 'react-redux'


import TradesContainer from '../containers/TradesContainer'

const Portfolio = (props) => {

  // let portfolio = props.portfolios[props.match.params.id -1]
  let portfolio = props.portfolio
  // let portfolio = props.portfolios.filter(portfolio => 
  //   portfolio.id == props.match.params.id)[0]
  
  // the first time props comes through we don't have portfolios yet
  return (
    <div>
      <Link to={'/'} style={link}>HOME</Link>
        <br/>
      <Link to ={'/portfolios'} style={link}>BACK TO PORTFOLIOS</Link>
      <br/>

      <h3>
        {portfolio ? portfolio.name : null} 
      <br/>
        {portfolio ? portfolio.balance : null}
      </h3>

      <TradesContainer portfolio={portfolio}/>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  console.log(props)
  // find the portfolio that you want to display from the the redux store
  // return that single portfolio as a prop below
  let portfolio = state.portfolios.filter(portfolio => 
  portfolio.id == props.match.params.id)[0]

  return {
    portfolio: portfolio
  }
}

export default connect(mapStateToProps) (Portfolio)