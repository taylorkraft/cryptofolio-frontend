import React from 'react'

const PortfolioList = (props) => {

  return (
    <div>
      {props.portfolios.map(portfolio => <li key={portfolio.id}>{portfolio.name} - {portfolio.balance}</li> )}
    </div>
  )
}

export default PortfolioList