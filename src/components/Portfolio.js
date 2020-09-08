import React from 'react'
import { Redirect } from 'react-router-dom'

import TradesContainer from '../containers/TradesContainer'

const Portfolio = (props) => {

  // let portfolio = props.portfolios[props.match.params.id -1]
  let portfolio = props.portfolios.filter(portfolio => portfolio.id == props.match.params.id)[0]
  
  // the first time props comes through we don't have portfolios yet
  return (
    <div>
      <h2>
        {portfolio ? portfolio.name : null} - {portfolio ? portfolio.balance : null}
      </h2>
      <TradesContainer portfolio={portfolio}/>
    </div>
  )
}

export default Portfolio