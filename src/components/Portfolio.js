import React from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import link from './HomeLink'


import TradesContainer from '../containers/TradesContainer'

const Portfolio = (props) => {

  // let portfolio = props.portfolios[props.match.params.id -1]
  let portfolio = props.portfolios.filter(portfolio => portfolio.id == props.match.params.id)[0]
  
  // the first time props comes through we don't have portfolios yet
  return (
    <div>
      <Link to={'/'} style={link}>HOME</Link><br/>
      <Link to ={'/portfolios'} style={link}>BACK TO PORTFOLIOS</Link><br/><br/>
      <h3>
        {portfolio ? portfolio.name : null} - {portfolio ? portfolio.balance : null}
      </h3>
      <TradesContainer portfolio={portfolio}/>
    </div>
  )
}

export default Portfolio