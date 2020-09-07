import React from 'react'

const Portfolio = (props) => {

  console.log(props)
  
  let portfolio = props.portfolios[props.match.params.id -1]

  // the first time props comes through we don't have portfolios yet
  return (
    <li>
      {portfolio ? portfolio.name : null} - {portfolio ? portfolio.balance : null}
    </li>
  )
}

export default Portfolio