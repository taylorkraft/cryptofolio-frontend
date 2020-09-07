import React from 'react'

const PortfolioList = (props) => {

  //we are iterating over all our portfolios that are coming in as props from our PortfoliosContainer
  // which is coming in through our store from mapStateToProps
  return (
    <div>
      {props.portfolios.map(portfolio => 
      <li key={portfolio.id}> {portfolio.name} - {portfolio.balance}</li>)}
    </div>
  )
}

export default PortfolioList