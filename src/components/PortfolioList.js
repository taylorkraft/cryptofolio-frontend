import React from 'react'
import { Link } from 'react-router-dom'
import link from './Link'


const PortfolioList = (props) => {

  //we are iterating over all our portfolios that are coming in as props from our PortfoliosContainer
  // which is coming in through our store from mapStateToProps
  // for each portfolio we create a Portfolio component
  // that Portfolio component must accept a portfolio as props
  return (
    <div>

      <Link to={'/'} style={link}>HOME</Link>
        <br/>
      <Link to={'/portfolios/new'} style={link}>CREATE A NEW PORTFOLIO</Link>
        <br/>
        <br/>

      {props.portfolios.map(portfolio => 

      <div key={portfolio.id}>
        <Link to={`/portfolios/${portfolio.id}`} style={link}>{portfolio.name}</Link>
      </div>)}

    </div>
  )
}

export default PortfolioList