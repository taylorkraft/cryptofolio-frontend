import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from './Portfolio'
import link from './HomeLink'
import componentLink from '../components/ComponentLink'

const PortfolioList = (props) => {

  //we are iterating over all our portfolios that are coming in as props from our PortfoliosContainer
  // which is coming in through our store from mapStateToProps
  // for each portfolio we create a Portfolio component
  // that Portfolio component must accept a portfolio as props
  return (
    <div>
      <Link to={'/'} style={link}>CRYPTOFOLIO HOME</Link><br/><br/>
      {props.portfolios.map(portfolio => 
      <div key={portfolio.id}>
        <Link to={`/portfolios/${portfolio.id}`} style={componentLink}>{portfolio.name}</Link>
      </div> )}<br/>
        <Link to={'/portfolios/new'} style={link}>Create a new portfolio</Link>
    </div>
  )
}

export default PortfolioList