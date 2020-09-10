import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from './Portfolio'

const PortfolioList = (props) => {

  //we are iterating over all our portfolios that are coming in as props from our PortfoliosContainer
  // which is coming in through our store from mapStateToProps
  // for each portfolio we create a Portfolio component
  // that Portfolio component must accept a portfolio as props
  return (
    <div>
      {props.portfolios.map(portfolio => 
      <div key={portfolio.id}>
        <Link to={`/portfolios/${portfolio.id}`}>{portfolio.name}</Link>
      </div> )}
    </div>
  )
}

export default PortfolioList